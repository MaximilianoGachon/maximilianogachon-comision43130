const carrito = []

const Prendas = [
{ nombre: "camisa blanca", codigo: 1, precio: 5000 },
{ nombre: "camisa azul", codigo: 2, precio: 4500 },
{ nombre: "remera mangas corta", codigo: 3, precio: 2000 },
{ nombre: "remera mangas largas", codigo: 4, precio: 2200 },
{ nombre: "pantalon corto", codigo: 5, precio: 2500 },
{ nombre: "pantalon largo", codigo: 6, precio: 3500 },
{ nombre: "vestido de fiesta", codigo: 7, precio: 7900 },
{ nombre: "traje de gala", codigo: 8, precio: 9000 },
{ nombre: "buzo canguro", codigo: 9, precio: 7500 },
{ nombre: "campera rustica", codigo: 10, precio: 8000 },

]

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
}