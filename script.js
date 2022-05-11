
class cuenta {
    constructor(nombre,contraseña){
        this.nombre = nombre
        this.contraseña = contraseña
    }  
}

let cuenta1 = new cuenta("Laurax5",1234);
let cuenta2 = new cuenta("LuisSC",4815)
let cuenta3 = new cuenta ("Maria",3335)

let cuentas = [cuenta1,cuenta2,cuenta3]

let boton = document.querySelector("#boton")
let usuario = document.querySelector("#usuario")
let contraseña = document.querySelector("#contraseña")
let mensaje = document.querySelector ("#mensaje")
let resultadoBusqueda = false



function buscarCuenta(nombre,contraseña){
    cuentas.forEach(cuenta =>{
        if(cuenta.nombre==nombre&&cuenta.contraseña==contraseña){
            resultadoBusqueda = true
        }
    })
}


boton.addEventListener("click",()=>{
    buscarCuenta(usuario.value,contraseña.value)
    if(resultadoBusqueda==true){
        mensaje.innerHTML = "Hola " + usuario.value + "!"
    }else{
        mensaje.innerHTML = "Usuario o contraseña incorrecta"
    }
    usuario.value = ""
    contraseña.value = ""
})

