const withAuth = async (res, req, next) => {
    if (!req.session.loggedIn) {
        res.redirect('/login');
    } else {
        next();
    }
}

module.exports = withAuth;