const signupFormHandler = (evt) => {
    evt.preventDefault();
    const email = document.querySelector('#email-input').value.trim();
    const username = document.querySelector('#username-input').value.trim(); 
    const password = document.querySelector('#password-input').value.trim();
    const confirmPassword = document.querySelector('#confirm-password-input').value.trim();
    if (!email || !username || !password || !confirmPassword) {
        console.log('miss');
        return;
    }
    console.log('hit');
};

document.querySelector('#signup-form').addEventListener('submit', signupFormHandler);