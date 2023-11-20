let form = document.getElementById('get-in');
const incorrect = document.getElementById('not-found');

form.addEventListener('submit', (event)=> {
    event.preventDefault();
    log_in();
});

function log_in(){
    const userEmail = document.getElementById('email').value;
    const userPassword = document.getElementById('password').value;
    
    const user = JSON.parse(localStorage.getItem(userEmail));

    if(user && user.password === userPassword){
        localStorage.setItem('HAS_LOGGED', 'true');
        window.location = 'productos.html';
    }
    else{
        incorrect.classList.remove('hidden');
    }

}
