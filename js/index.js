
function planPagos() {
    console.log('Mostrar plan de pagos')
    for (let i = 2; i <= 12; i++) {
        console.log( i + ' cuotas sin interés.')
    }
}

function mostrarCatalogo(catalogo) {
    switch (catalogo) {
        case "1":
            console.warn("Remeras: azules, rojas, amarillas, verdes")
            break;
        case "2":
            console.warn("largos, cortos")
            break;
        case "3":
            console.warn("con capucha, sin capucha")
            break;
        case "4":
            console.warn("abrigadas, simples")
            break;
        case "5":
            console.warn("cintos, bolsos")
            break;

        default:
            console.warn("por favor, seleccione un numero")
            break;
    }
}

function preciosPorPrenda(precio) {
    switch (precio) {
        case "1":
            console.warn("Remeras: $2000")
            break;
        case "2":
            console.warn("Largos: $5000 Cortos:$3000")
            break;
        case "3":
            console.warn("Con capucha: $4500 Sin Capucha: $3500")
            break;
        case "4":
            console.warn("Abrigadas: $7000 Simples: $5000")
            break;
        case "5":
            console.warn("Cintos: $2500 Bolsos: $6000")
            break;

        default:
            console.warn("por favor, seleccione un numero")
            break;
    }
}


function mostrarPrendas() {
    let respuesta = confirm('mostrar prendas')
    if (respuesta === true) {
        let catalogo = prompt('Ingresa un numero segun la prenda a ver:')
        mostrarCatalogo(catalogo)
    } else {
        console.warn('muchas gracias, vuelve pronto!')
    }
}

function mostrarPrecios() {
    let respuesta = confirm("Mostrar Precios")
    if (respuesta === true) {
        let precio = prompt("ingrese un numero según la prenda a ver:")
        preciosPorPrenda(precio)
        planPagos()
    } else {
        console.warn("muchas gracias, vuelva pronto!")
    }
}