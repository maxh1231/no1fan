const home = () => {
    document.location.assign('/');
};

const login = () => {
    document.location.assign('/login');
};

const signup = () => {
    document.location.assign('/signup');
};

const dashboard = () => {
    document.location.replace('/dashboard');
};

const search = (evt) => {
    evt.preventDefault();
    const input = document.querySelector('#home-search-input').value.trim();
    document.location.assign(`/info/search/${input}`);
};

const logout = async () => {
    const response = await fetch('/api/user/logout', {
        method: 'POST',
    });
    if (!response.ok) {
        alert(response.statusText);
        return;
    }
    document.location.assign('/');
};

document.querySelector('#home-btn').addEventListener('click', home);
document.querySelector('#home-search-form').addEventListener('submit', search);
const loginBtn = document.querySelector('#login-btn');
if (loginBtn) { loginBtn.addEventListener('click', login) };
const signupBtn = document.querySelector('#signup-btn');
if (signupBtn) { signupBtn.addEventListener('click', signup) };
const dashBtn = document.querySelector('#dashboard-btn');
if (dashBtn) { dashBtn.addEventListener('click', dashboard) };
const logoutBtn = document.querySelector('#logout-btn');
if (logoutBtn) { logoutBtn.addEventListener('click', logout) };