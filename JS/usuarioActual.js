document.addEventListener('DOMContentLoaded', ()=>{Logged()});

function Logged(){
    const userLogged = sessionStorage.getItem('HAS_LOGGED');

    if(userLogged === 'true'){
        const user = JSON.parse(sessionStorage.getItem('USER_LOGGED'));
        const userName = document.getElementById('user-name');
        const userIcon = document.getElementById('user-icon')
        const log_out = document.getElementById('log-out');
        const sign_up = document.getElementById('sign-up');
        const log_in = document.getElementById('log-in');
        const log = document.getElementById('nav__user');

        userName.classList.remove('hidden');
        userIcon.classList.remove('hidden');
        log_out.classList.remove('hidden');
        sign_up.classList.add('hidden');
        log_in.classList.add('hidden');
        log.classList.add('logged')

        userName.innerHTML = `<h1>${user.name} ${user.lastName}</h1>`; 
    }
}

function logOut(){
    const confirmation = document.getElementById('log-out__confirm');
    confirmation.classList.remove('hidden');
}

function confirm(hasConfirmed){
    if(hasConfirmed){
        const log = document.getElementById('nav__user');
        const confirmation = document.getElementById('log-out__confirm');

        const userName = document.getElementById('user-name');
        const userIcon = document.getElementById('user-icon')
        const log_out = document.getElementById('log-out');
        const sign_up = document.getElementById('sign-up');
        const log_in = document.getElementById('log-in');

        userName.classList.add('hidden');
        userIcon.classList.add('hidden');
        log_out.classList.add('hidden');
        sign_up.classList.remove('hidden');
        log_in.classList.remove('hidden');

        log.classList.remove('logged');
        confirmation.classList.add('hidden');

        sessionStorage.removeItem('HAS_LOGGED');
        sessionStorage.removeItem('USER_LOGGED');

        location.reload();
    }
    else{
        const log = document.getElementById('nav__user');
        const confirmation = document.getElementById('log-out__confirm');

        log.classList.add('logged');
        confirmation.classList.add('hidden');
    }
}