
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

    `<div class = "card">
            <div> ${producto.nombre} </div>
            <div> ${producto.marca} </div>
            <div> ${producto.precio} </div>
            <button id = "boton${producto.id}" class = "boton"> Agregar al carrito </button>

    </div>`

});

// AGREGAR PRODUCTOS AL CARRITO

function agregarAlCarrito(producto){
    CARRITO.push(producto)
    localStorage.setItem('carrito',JSON.stringify(CARRITO))
    Toastify({
        text: `${producto.nombre} agregado al carrito`,
        duration: -1,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "#ffe4c4",
          color: "#000000",
          border: "solid 2px #000000"
        },
        onClick: function(){} // Callback after click
      }).showToast();
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
        `<div class = "card">
            <div> ${producto.nombre} </div>
            <div> ${producto.marca} </div>
            <div> ${producto.precio} </div>
         </div>`

    })
}

document.querySelector("#carrito").addEventListener("click",()=>{
    document.querySelector("#mostrarCarrito").innerHTML = ""
    mostrarCarrito()
})

