async function deleteAccount(event) {
    event.preventDefault();

    const response = await fetch(`/api/user`, {
        method: 'DELETE',
        headers: {
            'Accept': 'application.json',
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.assign('/signup');
    } else {
        alert(response.statusText);
        return;
    }
}
document.querySelector('#delete-account').addEventListener('click', deleteAccount);