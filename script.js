
class Producto {
    constructor(nombre, marca, precio, stock, id){
        this.nombre = nombre
        this.marca = marca
        this.precio = precio
        this.stock = stock
        this.id = id
    }
}

let producto1 = new Producto ("zapatillas", "nike", 12000,5,01)
let producto2 = new Producto ("remera", "puma", 5500, 6, 02)
let producto3 = new Producto ("campera", "adidas", 10200, 4, 03)

let PRODUCTOS = [producto1,producto2,producto3]

let mostrarProductos = document.querySelector("#mostrarProductos")

PRODUCTOS.forEach(producto => {
    mostrarProductos.innerHTML += 

    `<div class = "cardProducto"> ${producto.nombre} ${producto.marca} ${producto.precio}
        <button id = "agregar${producto.id}" class = "boton"> Agregar al carrito </button>
    
    
    </div>`
});

let boton = document.querySelector("#agregar01")

boton.addEventListener("click",()=>{
    console.log("proddddd 1")
})

// PRODUCTOS.forEach (producto => {
//     let boton${producto.id} = document.querySelector(`#agregar${producto.id}`) 
//     boton.addEventListener("click",()=>{
//         console.log(producto)
//     })


// })


