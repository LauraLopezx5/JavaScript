
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

let CARRITO = []

//MOSTRAR PRODUCTOS

PRODUCTOS.forEach(producto => {
    document.querySelector("#mostrarProductos").innerHTML += 

    `<div class = "card"> ${producto.nombre} ${producto.marca} ${producto.precio}
        <button id = "boton${producto.id}" class = "boton"> Agregar al carrito </button>
    
    
    </div>`
});

// AGREGAR PRODUCTOS AL CARRITO

function agregarAlCarrito(producto){
    CARRITO.push(producto)
    localStorage.setItem('carrito',JSON.stringify(CARRITO))
}


PRODUCTOS.forEach (producto => {
    document.querySelector(`#boton${producto.id}`).addEventListener("click",()=>{
        agregarAlCarrito(producto)
    })


})

//MOSTRAR CARRITO

function mostrarCarrito(){
    let CARRITOSTORAGE = JSON.parse(localStorage.getItem('carrito'))
    CARRITOSTORAGE.forEach(producto=>{
        document.querySelector("#mostrarCarrito").innerHTML +=
        `<div class = "card"> ${producto.nombre} ${producto.marca} ${producto.precio}
        
    </div>`

    })
}

document.querySelector("#carrito").addEventListener("click",()=>{
    document.querySelector("#mostrarCarrito").innerHTML = ""
    mostrarCarrito()
})

