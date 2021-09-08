// importar la función sum del archivo app.js
 const { sum } = require('./app.js'); 

// comienza tu primera prueba
 test('adds 11 + 9 to equal 20', () => {
    //dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(11, 9);

    // esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(20);
}); 

test("One euro should be 1.206 dollars", function(){
    // importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})
 
test("One dollars should be 1.880 yen", function(){
    // importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromDollarToYen(3.5)).toBe(1880); //1 euro son 1.2 dolares, entonces 3.5 dolares deberian ser = (3.5 * 127.9)
}) 

test("One yen should be 5264 pound", function(){
    // importo la funcion desde app.js
    const { fromYenToPound } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromYenToPound(3.5)).toBe(5264); //1 euro son 1.2 dolares, entonces 3.5 dolares deberian ser = (3.5 * 127.9)
}) 