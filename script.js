

let ARRAYPRODUCTOS = []

//MOSTRAR PRODUCTOS

fetch('productos.json')
.then(promesa=>promesa.json())
.then (productos=>{
    productos.forEach(producto => {

        ARRAYPRODUCTOS.push(producto) // ??
        document.querySelector("#mostrarProductos").innerHTML += 
    
        `<div class = "card">
                <div> ${producto.nombre} </div>
                <div> ${producto.marca} </div>
                <div> ${producto.precio} </div>
                <button id = "boton${producto.id}" class = "boton"> Agregar al carrito </button>
    
        </div>`


    
    });
})

let CARRITO = []

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


ARRAYPRODUCTOS.forEach (producto => {
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

