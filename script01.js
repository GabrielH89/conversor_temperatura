const calcular = document.getElementById("converter");
calcular.addEventListener("click", converter)

function converter() {
    let valor = document.getElementById("valor").value;
    let temperatura1 = document.querySelector("#firstOption").value;
    let temperatura2 = document.querySelector("#secondOption").value;
    if(temperatura1 == "Celsius" && temperatura2 == "Celsius"){
        document.getElementById("resultado").textContent = valor + " Celsius";
    }else if(temperatura1 == "Fahrenheit" && temperatura2 == "Fahrenheit"){
        document.getElementById("resultado").textContent = valor + " Fahrenheit";
    }else if(temperatura1 == "Kelvin" && temperatura2 == "Kelvin"){
        document.getElementById("resultado").textContent = valor + " Kelvin";
    }else if(temperatura1 == "Celsius" && temperatura2 == "Fahrenheit"){
        let resultadoFah = 9 * valor / 5 + 32;
        document.getElementById("resultado").textContent = resultadoFah.toFixed(2) + " ° Fahrenheit";
    }else if(temperatura1 == "Celsius" && temperatura2 == "Kelvin"){
        let resultadoKel = (273 + valor);
        document.getElementById("resultado").textContent = resultadoKel.toFixed(2) + " ° Kelvin";
    }else if(temperatura1 == "Fahrenheit" && temperatura2 == "Celsius"){
        let resultadoCel = 5 * (valor - 32) / 9;
        document.getElementById("resultado").textContent = resultadoCel.toFixed(2) + " ° Celsius";
    }else if(temperatura1 == "Fahrenheit" && temperatura2 == "Kelvin"){
        let resultadoKel = (valor - 32) * 5/9 + 273.15; 
        document.getElementById("resultado").innerHTML = resultadoKel.toFixed(2) + " ° Kelvin";
    }else if(temperatura1 == "Kelvin" && temperatura2 == "Celsius"){
        let resultadoKel = valor - 273;
        document.getElementById("resultado").textContent = resultadoKel.toFixed(2) + " ° Celsius";        
    }else if(temperatura1 == "Kelvin" && temperatura2 == "Fahrenheit"){
        let resultadoFah = (valor - 273.15) * 9/5 + 32;
        document.getElementById("resultado").textContent = resultadoFah.toFixed(2)  + " ° Fahrenheit";
    }
}





















