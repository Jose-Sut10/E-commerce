//datos
class datosUsuario{
    #nombre; 
    #password; 

    constructor(){
        this.#nombre = ""; 
        this.#password = ""; 
    }
}

const cliente0 = new datosUsuario(); 
cliente0.nombre = "nohemi914@gmail.com"; 
cliente0.password = "Bodoque05/11";  

function validacion(usuario,password){
    if(usuario == cliente0.nombre && password==cliente0.password){
        console.log("BIENVENIDO"); 
    }else{
        console.log("ERROR"); 
    }
}


//captura de inputs
const entrar = document.querySelector('[data-from-btnEntrar]');

entrar.addEventListener('click',function entrada(){
    const usuario = document.querySelector('[data-from-nombre]'); 
    const password = document.querySelector('[data-from-password]'); 
    validacion(usuario.value, password.value); 
}); 