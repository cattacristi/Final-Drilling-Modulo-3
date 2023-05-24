class DetalleGastos {
    constructor(nombre, precio, imagen) {
        this.nombre = nombre;
        this.precio = precio;
        this.imagen = imagen;
    }
}

let arrayGastos = []



let botonPresupuesto = document.getElementById("enviarPresupuesto");

let botonGasto = document.getElementById("enviarGasto");

let presupuesTotal = []

function agregarPresupuesto() {
    let presupuesto = document.getElementById("presupuestoInput").value 
    let total = 0
    if (presupuesto != "" && !isNaN(presupuesto)) {
        presupuesTotal.push(presupuesto)
        for (let i = 0; i < presupuesTotal.length; i++) {
            let suma = Number(presupuesTotal[i])
            total += suma 
    }
    document.getElementById("cantidadPresupuesto").innerText = total 
    saldo()


}}

botonPresupuesto.addEventListener("click", agregarPresupuesto)

function agregarGastos() {
    let gasto = document.getElementById("gastoInput").value ;
    let cantidad = document.getElementById("cantidadInput").value ;
    let imagen 
    if (
        gasto!= "" && cantidad!= "" &&!isNaN(cantidad) && cantidad > 0) {
        objetoGasto = new DetalleGastos(gasto, cantidad, imagen )
        arrayGastos.push(objetoGasto)
    console.log(arrayGastos)

}
tablaGastos()
}

botonGasto.addEventListener("click", agregarGastos)

function tablaGastos() {
    document.getElementById("tbody").innerHTML = ""
    for (let i = 0; i < arrayGastos.length; i++) {
        let precio = arrayGastos[i].precio 
        let nombre = arrayGastos[i].nombre
        let imagen = arrayGastos[i].imagen
        document.getElementById("tbody").innerHTML += `
        <tr>
            <td>${nombre}</td>
            <td>${precio}</td>
            <td><a href="#" onclick="eliminar(${i})" class="btn btn-danger btn-sm"><i class="bi bi-trash"></i></a></td>
        </tr>

        `
}
saldo()
}

function saldo() {
    let totalGastos = 0 
    let totalPresupuesto = 0
    for (let i = 0; i < presupuesTotal.length; i++) {
        let suma = Number(presupuesTotal[i])
        totalPresupuesto += suma 
}
    for (let i = 0; i < arrayGastos.length; i++) {
        let sumaGasto = Number(arrayGastos[i].precio)
        totalGastos += sumaGasto

}
    let saldo = totalPresupuesto - totalGastos
    document.getElementById("cantidadGasto").innerHTML = totalGastos
    document.getElementById("cantidadBalance").innerHTML = saldo
}

function eliminar(indice) {
    arrayGastos.splice(indice, 1)
    tablaGastos()
    saldo()
}