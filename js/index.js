const TablaProductos = document.querySelector("tbody#tabla-productos")
const InputBuscar = document.querySelector("#input-buscar")
const Mensaje = document.querySelector(".mensajes")
const URL = "js/catalogo.json"



function CrearTablaProductos(producto) {
    return `<tr>
                <td class="codigo-producto">${producto.codigo}</td>
                <td class="nombre-producto">${producto.nombre}</td>
                <td class="precio-producto">$ ${producto.precio}</td>
                <td><button id="${producto.codigo}" class="button-AñadiraCarrito">Añadir a carrito</button></td>
                </tr>`
}

function ActivarBotonesAñadir() {
    const botones = document.querySelectorAll("button.button-AñadiraCarrito")
    botones.forEach((boton) => {
        boton.addEventListener("click", () => {
            let producto = Catalogodeprendas.find((producto) => producto.codigo === parseInt(boton.id))
            carrito.push(producto)
            Mensaje.textContent = "Se agregó un producto al carrito: " + producto.nombre
            GuardarenCarrito()
        })
    })

}

function cargarPrendas(Catalogodeprendas) {
    TablaProductos.innerHTML = ""
    if (Catalogodeprendas.length > 0) {
        Catalogodeprendas.forEach((producto) => TablaProductos.innerHTML += CrearTablaProductos(producto))
        ActivarBotonesAñadir()
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

async function LlamarCatalogo() {
    try {
        const response = await fetch(URL)
        const data = await response.json()
        Catalogodeprendas.push(...data)
        cargarPrendas(Catalogodeprendas)
    } catch (error) {
        console.error("No es posible mostrar los productos ene este momento, disculple las molestias" + error)
    }

}

LlamarCatalogo()
