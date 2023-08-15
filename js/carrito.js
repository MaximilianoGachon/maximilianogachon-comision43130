const ProductosCarrito = document.querySelector("tbody#tabla-carrito")
const SectionCarrito = document.querySelector("table.section-productos")
const Comprar = document.querySelector("button.button-comprar")

function CarritoVacio() {
    return `<div class="carrito-vacio">
                <h2>No hay prodcutos en el carrito</h3> 
            </div>`
}


function MostrarProductosenCarrito() {
    ProductosCarrito.innerHTML = ""
    if (carrito.length > 0) {
        carrito.forEach((producto) => ProductosCarrito.innerHTML += ArmarProductosCarrito(producto))
        BotonEliminar()
        ProductosCarrito.innerHTML += TotalCarrito(carrito)
    } else {
        ProductosCarrito.innerHTML = CarritoVacio()
    }
}


function BotonEliminar() {
    const BotonEliminar = document.querySelectorAll(".button-eliminar")
    BotonEliminar.forEach((boton) => {
        boton.addEventListener("click", () => {
            let codigo = parseInt(boton.codigo)
            let indice = carrito.findIndex((producto) => producto.id === codigo)
            carrito.splice(indice, 1)
            MostrarProductosenCarrito()
            GuardarenCarrito()
        })
    })
}

function TotalCarrito() {
    let total
    if (carrito.length > 0) {
        total = carrito.reduce((acc, producto) => acc + producto.precio, 0)
    } else {
    }
    return `<tr>
                <td></td>
                <td>Total Carrito:</td>
                <td>$ ${total}</td>
                <td></td>
            </tr>`
}


Comprar.addEventListener("click",()=> {
    Swal.fire({
        title: 'Desea comprar los productos?',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Comprar'
      }).then((result) => {
        if (result.isConfirmed) {
            localStorage.removeItem("micarrito")
            carrito.length = 0
            SectionCarrito.innerHTML = CarritoVacio()
            Swal.fire({
                icon: 'success',
                title: 'Muchas gracias por su compra',
                showConfirmButton: false,
                timer: 2000
              })
        }
      })
}) 

MostrarProductosenCarrito()