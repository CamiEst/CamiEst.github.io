let form = document.getElementById('register');

form.addEventListener('submit', (event)=> {
    event.preventDefault();
    sign_up();
    redirect();
});

function sign_up(){
    const userName = document.getElementById('name').value;
    const userLastName = document.getElementById('last-name').value;
    const userEmail = document.getElementById('email').value;
    const userPassword = document.getElementById('password').value;
    const userGender = document.querySelector('input[name="gender"]:checked').value;

    let user = {
        name: userName,
        lastName: userLastName,
        email: userEmail,
        password: userPassword,
        gender: userGender,
    }
    localStorage.setItem(userEmail, JSON.stringify(user));
}

function redirect(){
    window.location = 'iniciarSesion.html';
}
