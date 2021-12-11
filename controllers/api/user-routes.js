const router = require('express').Router();
const { User } = require('../../models');

// findAll
router.get('/', async (req, res) => {
    try {
        const response = await User.findAll({
            attributes: { exclude: ['password'] }
        });
        if (response.length === 0) {
            res.status(204).json({ message: 'No users found!'});
        } else {
            res.json(response);
        }
    }
    catch(err) {
        res.status(500).json(err);
    }
});

// findOne
router.get('/:id', async (req, res) => {
    try {
        const response = await User.findOne({
            where: { id: req.params.id },
            attributes: { exclude: ['password'] }
        });
        if (!response) {
            res.status(204).json({ message: 'No user found with that ID!'});
        } else {
            res.json(response);
        }
    }
    catch(err) {
        res.status(500).json(err);
    }
});

// create
router.post('/', async (req, res) => {
    try {
        const response = await User.create({
            email: req.body.email,
            username: req.body.username,
            password: req.body.password,
        });
        req.session.save(() => {
            req.session.id = response.id;
            req.session.email = response.email
            req.session.username = response.username;
            res.json( {user: response.username, message: 'Login Successful!'});
        });
    }
    catch(err){
        res.status(500).json(err);
    }
});

// update
router.put('/:id', async (req, res) => {
    try {
        const response = await User.update(req.body, {
            individualHooks: true,
            where: { id: req.params.id },
        });
        res.json( {user: response.username, message: 'Update Successful!'});
    }
    catch(err) {
        res.status(500).json(err);
    }
});

// login
router.post('/login', async (req, res) => {
    try {
        const response = await User.findOne({
            where: { email: req.body.email, },
            attributes: { exclude: ['password'] }
        });
        if (!response) {
            res.status(401).json({ message: 'Invalid Username!'});
            return;
        }
        const validPassword = response.checkPassword(req.body.password);
        if (!validPassword) {
            res.status(401).json({ message: 'Invalid Password!'});
            return;
        }
        req.session.save(() => {
            req.session.username = response.username;
            req.session.id = response.id;
            req.session.loggedIn = true;
            res.json(response);
        });
    }
    catch(err) {
        res.status(500).json(err);
    }
});

// logout
router.post('/logout', (req, res) => {
    try {
        if (!req.session.loggedIn) {
            res.status(404).end();
        }
        req.session.destroy(() => {
            res.status(200).end();
        });
    }
    catch(err) {
        res.status(500).json(err);
    }
});

// delete
router.delete('/:id', async (req, res) => {
    try {
        const response = await User.destroy({
            where: { id: req.params.id }
        });
        if (!response) {
            res.status(404).end();
            return;
        }
        res.json(response);
    }
    catch(err) {
        res.status(500).json(err);
    }
});

module.exports = router;