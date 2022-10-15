

let nombre = "peter parker";   // string
console.log(nombre);   


nombre = "ben parker";   // string
console.log(nombre);


// entre como millas o comillas le dice que son string
nombre = "tia may";    
nombre = 'tia may';

// como hacer un tipo de dato en JS

console.log (typeof nombre);  

nombre = 123;                      //number
console.log ( typeof nombre); 


let esMarvel = true;
console.log( typeof esMarvel);  //boolean

// en js se cualquier tipo de numero lo tomara como number

let edad = 33;
console.log(typeof edad); //number

edad = 33.000;
console.log( typeof edad);  //number


// calmelcase se inicia la primera palabra en minusculas y la segunda empieza con la primera letra capitalizada 

let superPoder;
console.log( typeof superPoder); //undefined

// muchos consideran el null como un objeto 

let soyNull = null;
console.log(typeof soyNull); //objeto


let symbol1 = Symbol('a'); //Symbol
let symbol2 = Symbol('a');

console.log( typeof symbol1);


console.log(symbol1 === symbol2);  // false
