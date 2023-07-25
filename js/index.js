const carrito = RecuperarCarrito()

const Catalogodeprendas = [
    { codigo: 1, nombre: "camisa blanca", precio: 5000 },
    { codigo: 2, nombre: "camisa azul", precio: 4500 },
    { codigo: 3, nombre: "remera mangas corta", precio: 2000 },
    { codigo: 4, nombre: "remera mangas largas", precio: 2200 },
    { codigo: 5, nombre: "pantalon corto", precio: 2500 },
    { codigo: 6, nombre: "pantalon largo", precio: 3500 },
    { codigo: 7, nombre: "vestido de fiesta", precio: 7900 },
    { codigo: 8, nombre: "traje de gala", precio: 9000 },
    { codigo: 9, nombre: "buzo canguro", precio: 7500 },
    { codigo: 10, nombre: "campera rustica", precio: 8000 },
]

function GuardarenCarrito() {
    if (carrito > 0) {
        localStorage.getItem("carrito", JSON.stringify(carrito))
    }
}

function RecuperarCarrito() {
    if (localStorage.getItem("carrito")) {
        return JSON.parse(localStorage.getItem("carrito"))
    } else {
        return []
    }
}

const TablaProductos = document.querySelector("tbody#tabla-productos")
const InputBuscar = document.querySelector("#input-buscar")
const Mensaje = document.querySelector(".mensajes")



function CrearTablaProducto(producto) {
    return `<tr>
                <td class="codigo-producto">${producto.codigo}</td>
                <td class="nombre-producto">${producto.nombre}</td>
                <td class="precio-producto">$ ${producto.precio}</td>
                <td id="${producto.codigo}"><button class="button-carrito">Añadir a carrito</button></td>
            </tr>`
}

function ActivarBotones() {
    const botones = document.querySelectorAll("button.button-carrito")
    botones.forEach((boton)=> {
        boton.addEventListener("click", ()=> {
           let producto = Catalogodeprendas.find((producto)=> producto.codigo === parseInt(boton.codigo))
           carrito.push(producto)
           Mensaje.textContent = producto + "Se agrego a tu carrito"
           GuardarenCarrito()
        })
    }
    )
    
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


