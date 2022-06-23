let name;
let correo;
let asunto;
let mensaje;

const enviarDatos = () => {

    name = document.getElementById("nombre").value;
    
    correo = document.getElementById("email").value;
    
    asunto = document.getElementById("asunto").value;
    
    mensaje = document.getElementById("mensaje").value;
    
    if(name === "" || correo === "" || asunto === "" || mensaje === ""){


    }
    else{
        console.info(name);
        console.info(correo);
        console.info(asunto);
        console.info(mensaje);
    }
        
    
   
}