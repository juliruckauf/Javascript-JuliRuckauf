let nombreIngresado=""
let apellidoIngresado=""
let direccionIngresada= ""
let nombre= ""

function pedirNombre(){
    nombreIngresado=prompt("Ingrese su nombre")
}

function pedirApellido(){
    apellidoIngresado=prompt("Ingrese su apellido")
}

function pedirDireccion(){
    direccionIngresada= prompt("Ingrese su direccion")
}

pedirNombre()
    alert(`Hola ${nombreIngresado}`)

let edad1= parseInt(prompt("Ingrese su edad"))
let edad2=18

if (edad1<edad2){
    alert("No puede ingresar al sitio. Es menor de edad")
}
else {
    let bebida= prompt("Ingrese la bebida que desea comprar")
    alert(`Usted va a comprar ${bebida}. Lo redireccionaremos al sitio de pago.`)
    
    alert("A continuación le pediremos los datos para su facturación")

    pedirNombre()

    pedirApellido()

    pedirDireccion()

    alert (`La facturación será realizada a nombre de ${nombreIngresado} ${apellidoIngresado} con dirección en ${direccionIngresada}.`)
}







