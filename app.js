// esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
} 

// solo un registro en consola para nosotros.
console.log(sum(7,3))

// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)

// one euro is:
 let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

function fromEuroToDollar(valor){
    let resul = valor * 1.2;
    return resul;
}

console.log(fromEuroToDollar(3.5));

function fromDollarToYen(valor){
    let resul = valor * (fromEuroToDollar(valor))*127.9;
    return Math.trunc(resul);
}  

console.log(fromDollarToYen(3.5));


function fromYenToPound(valor){
    let resul = valor * (fromDollarToYen(valor))*0.8;
    return resul;
} 

console.log(fromYenToPound(3.5));

module.exports = { sum, fromDollarToYen, fromEuroToDollar, fromYenToPound };