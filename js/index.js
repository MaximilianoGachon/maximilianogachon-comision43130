const carrito = []

const Prendas = [
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

const TablaProductos = document.querySelector("tbody#tabla-productos")
const InputBuscar = document.querySelector("#input-buscar")
const Mensaje = document.querySelector(".mensajes")

function CrearTablaProducto(prenda) {
    `<tr>
    <td class="codigo-producto">${producto.codigo}</td>
    <td class="nombre-producto">${producto.nombre}</td>
    <td class="precio-producto">$ ${producto.precio}</td>
    <td id="${producto.codigo}" class="button"><button class="button-carrito">Añadir a carrito</button></td>
</tr>`
}

function CargarPrendas(array) {
    TablaProductos.innerHTML = ""
    if (array.lengt > 0) {
        array.forEach((prenda) => {
            TablaProductos.innerHTML += CrearTablaProducto(prenda)
        })
    } else {
        Mensaje.textContent = "no hay prendas para cargar"
    }
}

InputBuscar.addEventListener("search", () => {
    if (InputBuscar.value.trim() !== "") {
        let resultado = Prendas.filter((prenda) => producto.nombre.toLowerCase().includes(InputBuscar.value.trim().toLowerCase()))
    console.table("resultado")
}
    
})


/*
CargarPrendas(Prendas)

function BuscarPrenda(codigo) {
    let resultado = Prendas.find((prenda) => prenda.codigo === parseInt(codigo))
    return resultado
}


function Comprar() {
    let codigo = prompt("ingresar el codigo de la prenda")
    let PrendaElegida = BuscarPrenda(codigo)
    if (PrendaElegida !== undefined) {
        carrito.push(PrendaElegida)
        alert((PrendaElegida.nombre) + " se agrego al carrito.")
        let respuesta = confirm("¿deseas agregar otra prenda?")
        if (respuesta === true) {
            Comprar()
        } else {
            console.table(carrito)
            console.log("gracias por su compra")
        }
    } else {
        alert("Muchas gracias, vuelva pronto")
    }
} */