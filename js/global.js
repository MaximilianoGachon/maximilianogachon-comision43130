const carrito = RecuperarCarrito()
const Catalogodeprendas = []

function GuardarenCarrito() {
    if (carrito.length > 0) {
        localStorage.setItem("micarrito", JSON.stringify(carrito))
    }
}

function RecuperarCarrito() {
    if (localStorage.getItem("micarrito")) {
        return JSON.parse(localStorage.getItem("micarrito"))
    } else {
        return []
    }
}

function ArmarProductosCarrito(producto) {
    return `<tr>
                <td class="codigo-producto">${producto.codigo}</td>
                <td class="nombre-producto">${producto.nombre}</td>
                <td class="precio-producto">$ ${producto.precio}</td>
                <td><button id="${producto.codigo}" class="button-eliminar">Eliminar</button></td>
                </tr>`
}