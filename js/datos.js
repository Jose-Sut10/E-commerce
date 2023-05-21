class prodcuto{
    #nombre; 
    #precio; 
    #categoria;

    constructor(){
        this.#nombre = ""; 
        this.#precio = 0;
        this.#categoria = ""; 
    }
}
const agregar = document.querySelector('[data-btnAgregar]');

const ingreso = (evento)=>{
    location.href = "agregar.html";    
};

const agregarProducto = (evento)=>{
    const nombre = document.querySelector('[data-nombre]'); 
    const categoria = document.querySelector('[data-categoria]'); 
    const precio = document.querySelector('[data-precio]'); 
    const descripcion = document.querySelector('[data-descripcion]');  
}; 

agregar.addEventListener('click', ingreso); 
