

let exit
let monto
let dias
let tipo
let intereses

function validarTipo(tipo) {
    if(isNaN(tipo)||tipo<1||tipo>3){
        alert("Ingrese un numero valido")
        return false
    }
    else{
        return true
    }
}

function validarMonto(monto){
    if(isNaN(monto)||monto<1){
        alert ("Ingrese un monto valido")
        return false
    }
    else{
        return true
    }
}

function validarDias (dias){
    if(isNaN(dias)||dias<30||dias>365){
        alert("Ingrese una cantidad valida")
        return false
    }
    else{
        return true
    }
}


function clasico (monto,dias){
    return monto*(46/365*dias)/100
}

function precancelable(monto,dias){
    if(dias<=60){
        return monto*(13.5/365*dias)/100
    }
    else if(dias>=60&&dias<90){
        return monto*(15/365*dias)/100
    }
    else if(dias>=90&&dias<120){
        return monto*(16.5/365*dias)/100
    }
    else if(dias>=120&&dias<150){
        return monto*(18/365*dias)/100
    }
    else if(dias>=150&&dias<180){
        return monto*(19.5/365*dias)/100
    }
    else if(dias>=180){
        return monto*(20.25/365*dias)/100
    }
}

function dolares(monto,dias){
    if(dias<90){
        return monto*(0.1/365*dias)/100
    }
    else{
        return monto*(0.15/365*dias)/100
    }
}

function resultado(intereses,monto){
    console.log("intereses ganados = ", intereses.toFixed(2), "monto total", (monto+intereses).toFixed(2))
}

do{ 
    tipo = parseInt(prompt("Seleccione tipo de plazo fijo 1- Clasico en pesos 2- Precancelable en pesos 3- Plazo fijo en Dolares"))

    if(validarTipo(tipo)==true){
        exit = true
    }
    else{
        exit = false
    }

} while(exit==false)

do{
    monto = parseFloat(prompt("Ingrese un monto"))

    if(validarMonto(monto)==true){
        exit = true
    }
    else{
        exit = false
    }
} while(exit==false)

do {
    dias = parseInt(prompt("Ingrese cantidad de dias (minimo 30 maximo 365)"))
    if(validarDias(dias)==true){
        exit = true
    }
    else{
        exit = false
    }
} while(exit==false)

switch(tipo){
    case 1:
        intereses = clasico(monto,dias)
        resultado(intereses,monto)
        break
    case 2:
        intereses = precancelable (monto,dias)
        resultado(intereses,monto)
        break
    case 3:
        intereses = dolares (monto,dias)
        resultado(intereses,monto)
        break
}







