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