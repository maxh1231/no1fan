const withAuth = async (res, req, next) => {
    if (!req.session.loggedIn) {
        res.redirect('home');
    }   
    next();
}

module.exports = withAuth;