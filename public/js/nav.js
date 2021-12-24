const home = (evt) => {
    evt.preventDefault();
    document.location.assign('/');
};

const login = (evt) => {
    evt.preventDefault();
    document.location.assign('/login');
};

const signup = (evt) => {
    evt.preventDefault();
    document.location.assign('/signup');
};

const logout = async () => {
    const response = await fetch('/api/user/logout', {
        method: 'POST',
    });
    if (!response.ok) {
        alert(response.statusText); // TODO: Remove this alert before pushing!!
        return;
    }
    document.location.assign('/');
};

const dashboard = (evt) => {
    evt.preventDefault();
    document.location.replace('/dashboard');
};

document.querySelector('#dashboard-btn').addEventListener('click', dashboard);
document.querySelector('#home-btn').addEventListener('click', home);

const loginBtn = document.querySelector('#login-btn');
if (loginBtn) {
    loginBtn.addEventListener('click', login);
}

const signupBtn = document.querySelector('#signup-btn');
if (signupBtn) {
    signupBtn.addEventListener('click', signup);
}

const logoutBtn = document.querySelector('#logout-btn');
if (logoutBtn) {
    logoutBtn.addEventListener('click', logout);
}
