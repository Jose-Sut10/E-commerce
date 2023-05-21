( ()=>{

    class datosUsuario{
        #nombre; 
        #password; 
    
        constructor(){
            this.#nombre = ""; 
            this.#password = ""; 
        }
    }
    const entrar = document.querySelector('[data-from-btnEntrar]');
    
    const cliente0 = new datosUsuario(); 
    const dato1 = cliente0.nombre = "algeek4@gmail.com"; 
    const dato2 = cliente0.password = "frontEnd2023";  
    
    const registroDatos = (evento)=>{
        evento.preventDefault(); 
        const usuario = document.querySelector('[data-nombre]'); 
        const password = document.querySelector('[data-password]'); 
        
        datosCliente(usuario.value, password.value);  
    };
    
    entrar.addEventListener('click', registroDatos); 
    
    function datosCliente(nombre, password){
        const usuario = nombre; 
        const contrasenhia = password; 
    
        if(usuario == dato1 && contrasenhia==dato2){  
            location.href = "productos.html";        
        }else{
            console.log("ERROR"); 
        }
    }; 

}) (); 