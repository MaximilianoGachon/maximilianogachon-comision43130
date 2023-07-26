const TablaProductos = document.querySelector("tbody#tabla-productos")
const InputBuscar = document.querySelector("#input-buscar")
const Mensaje = document.querySelector(".mensajes")



function CrearTablaProducto(producto) {
    return `<tr>
                <td class="codigo-producto">${producto.codigo}</td>
                <td class="nombre-producto">${producto.nombre}</td>
                <td class="precio-producto">$ ${producto.precio}</td>
                <td><button id="${producto.codigo}" class="button-carrito">Añadir a carrito</button></td>
                </tr>`
}

function ActivarBotones() {
    const botones = document.querySelectorAll("button.button-carrito")
    botones.forEach((boton) => {
        boton.addEventListener("click", () => {
            let producto = Catalogodeprendas.find((producto) => producto.codigo === parseInt(boton.id))
            console.log(boton)
            carrito.push(producto)
            Mensaje.textContent = "Se agregó un producto a favoritos: " + producto.nombre
            GuardarenCarrito()
        })
    })

}

function cargarPrendas(array) {
    TablaProductos.innerHTML = ""
    if (array.length > 0) {
        array.forEach((producto) => TablaProductos.innerHTML += CrearTablaProducto(producto))
        ActivarBotones()
    } else {
        Mensaje.textContent = "No hay productos para cargar."
    }
}

InputBuscar.addEventListener("search", () => {
    if (InputBuscar.value.trim() !== "") {
        let resultado = Catalogodeprendas.filter((producto) => producto.nombre.toLowerCase().includes(InputBuscar.value.trim().toLowerCase()))
        cargarPrendas(resultado)
    }
})

cargarPrendas(Catalogodeprendas)
