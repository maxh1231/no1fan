const loginFormHandler = async (evt) => {
    evt.preventDefault();
    const toggleErrMsg = () => {
        document.querySelector('#error-message').classList.remove('display-none');
        setTimeout(() => { document.querySelector('#error-message').classList.add('display-none') }, 2000);
    };
    const email = document.querySelector('#email-input').value.trim();
    const password = document.querySelector('#password-input').value.trim();
    if (!email || !password) {
        toggleErrMsg();
        return;
    }
    console.log('hit');
    const response = await fetch('/api/user/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({ email: email, password: password })
    });
    if (!response.ok) {
        toggleErrMsg();
        return;
    }
    console.log('logged in');
};

document.querySelector('#login-form').addEventListener('submit', loginFormHandler);