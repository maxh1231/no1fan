const loginFormHandler = async (evt) => {
    evt.preventDefault();
    const email = document.querySelector('#email-input').value.trim();
    const password = document.querySelector('#password-input').value.trim();
    if (!email || !password) {
        console.log('miss');
        return;
    }
    console.log('hit');
    const response = await fetch('/user/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({ email: email, password: password })
    });
};

document.querySelector('#login-form').addEventListener('submit', loginFormHandler);