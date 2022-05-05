

class Producto {
    constructor(nombre, marca, precio, stock){
        this.nombre = nombre
        this.marca = marca
        this.precio = precio
        this.stock = stock
    }
}

function verProductos(){
    PRODUCTOS.forEach((prod) => {
        console.log(prod)
    })
}

function buscarProducto(){
    let busqueda = prompt("Ingrese producto")
    PRODUCTOS.forEach((prod)=>{
        if(prod.nombre==busqueda){
            console.log("vas a comprar",prod.nombre, prod.marca,"precio $",prod.precio,"stock", prod.stock)
            prod.stock-=1
            console.log("muchas gracias")
        }
    })
}

const Producto1 = new Producto("zapatilla","adidas",7500,7)
const Producto2 = new Producto("campera","nike",11000,5)
const Producto3 = new Producto("remera", "puma",3000,8)

let PRODUCTOS =  [Producto1,Producto2,Producto3]

let salir = false

do{
    let opcion = parseInt(prompt("seleccione una opcion. 1 Ver productos 2 Comprar 3 Salir"))
    switch(opcion){
        case 1:
            verProductos()
            break
        case 2:
            buscarProducto()
            
            break
        case 3:
            salir=true
            break
    }

}while(salir == false)

console.log(PRODUCTOS)
console.log("Hasta Luego")




