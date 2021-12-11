const router = require('express').Router();
const { User } = require('../../models');

// findAll
router.get('/', async (req, res) => {
    try {
        const response = await User.findAll({
            attributes: ['id', 'email', 'username','createdAt']
        });
        res.json(response);
    }
    catch (err){
        res.status(500).json(err);
    }
});

// findOne
router.get('/:id', async (req, res) => {
    try {
        const response = await User.findOne({
            where: { id: req.params.id },
            attributes: ['id', 'email', 'username','createdAt']
        });
        res.json(response);
    }
    catch (err){
        res.status(500).json(err);
    }
});

// create
router.post('/', async (req, res) => {
    try {
        const response = await User.create({
            email: req.body.email,
            username: req.body.username,
            password: req.body.password
        });
    }
    catch (err){
        res.status(500).json(err);
    }
});

// update
router.put('/:id', async (req, res) => {
    try {
        const response = await User.update({
            where: { id: req.params.id }
        })
    }
    catch (err){
        res.status(500).json(err);
    }
});

// login
router.post('/login', async (req, res) => {
    try {
        const response = await User.findOne({
            where: { email: req.body.email, }
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
    catch (err){
        res.status(500).json(err);
    }
});

// delete
router.delete('/', async (req, res) => {
    try {
        const response = await User.destroy({
            where: { id: req.body.id }
        });
        if (!response) {
            res.status(401).json({ message: 'Invalid Email!'});
            return;
        }
        res.json(response);
    }
    catch (err){
        res.status(500).json(err);
    }
});

module.exports = router;