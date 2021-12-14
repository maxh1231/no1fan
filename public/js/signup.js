const signupFormHandler = async (evt) => {
    evt.preventDefault();
    const toggleErrMsg = (target) => {
        document.querySelector(target).classList.remove('display-none');
        setTimeout(() => { document.querySelector(target).classList.add('display-none') }, 2000);
    };
    const email = document.querySelector('#email-input').value.trim();
    const username = document.querySelector('#username-input').value.trim(); 
    const password = document.querySelector('#password-input').value.trim();
    const confirmPassword = document.querySelector('#confirm-password-input').value.trim();
    if (!email || !username || !password || !confirmPassword) {
        toggleErrMsg('#err-msg');
        return;
    } else if (password !== confirmPassword) {
        toggleErrMsg();
        return;
    }
    const response = await fetch('/api/user/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({ email: email, username: username, password: password })
    });
    if (!response.ok) {
        const errMsg = await response.json();
        if (!errMsg.error) {
            toggleErrMsg('#err-msg');
            return;
        }
        if (errMsg.error === 'email') {
            toggleErrMsg('#err-msg2');
            return;
        } else {
            toggleErrMsg('#err-msg3');
            return;
        }
    } 
    console.log('user created');
    document.location.reload();
    // TODO: Load dashboard or homepage
};

document.querySelector('#signup-form').addEventListener('submit', signupFormHandler);