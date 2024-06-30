let diccionario = ["APPLE","ANGEL","MOUSE","HOUSE","TABLE","PLACE","WHITE","BLACK","GRENN"]
let random= Math.random()*diccionario.length
random = Math.floor(random)

let palabraSecreta = diccionario[random]
let oportunidades = 6


let button = document.getElementById("guess-button");
let input = document.getElementById("guess-input")
let grid = document.getElementById("grid")
button.addEventListener("click", enter);

function enter(){
    let intento = input.value.toUpperCase()
    if (intento==palabraSecreta){terminar("GANASTE!")

    }

    let row = document.createElement("div")
    
    row.className = "row"
    console.log(row)
    for (let i in palabraSecreta){
        let letra = document.createElement("span")
        letra.className = "letter"
        letra.innerHTML = intento[i]
        
        if (intento[i]===palabraSecreta[i]){
            letra.style.backgroundColor = "green"
        } else if( palabraSecreta.includes(intento[i]) ) {
            letra.style.backgroundColor = "yellow"
        } else {
            letra.style.backgroundColor = "gray"
        }
        row.appendChild(letra)
    }
grid.appendChild(row)
oportunidades--
    if (oportunidades==0){
        
        terminar("PERDISTE!")    
}

}

function terminar(mensaje){
    input.disabled = true;
    button.disabled = true;
    let contenedor = document.getElementById("guesses")
    contenedor.innerHTML = "<h1>" + mensaje + "</h1>"
    

    
}