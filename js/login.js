//captura de inputs
const entrar = document.querySelector('[data-from-btnEntrar]');

entrar.addEventListener('click',function entrada(){
    const usuario = document.querySelector('[data-from-nombre]'); 
    const password = document.querySelector('[data-from-password]'); 

    console.log(usuario.value); 
    console.log(password.value); 
}); 