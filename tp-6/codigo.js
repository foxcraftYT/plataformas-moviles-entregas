// Numeros

// ejemplo: suma(2,3) retorna 5
const suma = (n1,n2)=>n1 + n2;
console.log("suma(2,3): ", suma(2,3));

// ejemplo: elevarAlCubo(3) retorna 27
const elevarAlCubo = (n)=> n*n*n; 
console.log("elevarAlCubo(3): ", elevarAlCubo(3));

// ejemplo: restoDivisionEntera(3,2) retorna 1
const restoDivisionEntera =(n1,n2)=>n1%n2;
console.log("restoDivisionEntera(3,2): ", restoDivisionEntera(3,2))

// ejemplo: numeroPi() retorna 3,14...
const numeroPi = ()=> Math.PI;
console.log("numeroPi(): ", numeroPi());

// ejemplo: numeroRandom() retorna 0,123...
const numeroRandom=()=>Math.random();
console.log("numeroRandom(): ", numeroRandom());

// ejemplo: mejorNumeroRandom(1,6) retorna 3
const mejorNumeroRandom =(max,min)=>Math.floor(Math.random() * (max - min) + min);
console.log("mejorNumeroRandom(1,6): ", mejorNumeroRandom(1,6))
// Cadenas de Caracteres

// ejemplo: transformarMayuscula("Plataformas Móviles") retorna "PLATAFORMAS MÓVILES"
const transformarMayuscula =(palabra)=>palabra.toUpperCase();
console.log("transformarMayuscula(\"Plataformas Móviles\"): ", transformarMayuscula("Plataformas Móviles"))

// ejemplo: primeraLetra("Plataformas") retorna "P"
const primeraLetra =(palabra)=>palabra[0];
console.log("primeraLetra(\"Plataformas\"): ", primeraLetra("Plataformas"))

// ejemplo: ultimaLetra("Plataformas") retorna "s"
const ultimaLetra = (palabra)=> palabra[palabra.length-1];
console.log("ultimaLetra(\"Plataformas\"): ", ultimaLetra("Plataformas"))

// ejemplo: primeraLetraMayuscula("plataformas") retorna "Plataformas"
const primeraLetraMayuscula =(palabra)=>palabra[0].toUpperCase();
console.log("primeraLetraMayuscula(\"plataformas\"): ", primeraLetraMayuscula("plataformas"))

// ejemplo: palabraAListaDeLetras("hola") retorna ['h', 'o', 'l', 'a'];
const palabraAListaDeLetras = (palabra)=> [...palabra];
console.log("palabraAListaDeLetras(\"hola\"): ", palabraAListaDeLetras("hola"))

// ejemplo: listadoDeLetrasAPalabra(["h", "o", "l", "a"]) retorna "hola";
const listadoDeLetrasAPalabra =(letras)=>letras.join('');
console.log("listadoDeLetrasAPalabra([\"h\", \"o\", \"l\", \"a\"]): ", listadoDeLetrasAPalabra(["h", "o", "l", "a"]))

// ejemplo: palabraInvertida("hola") retorna "aloh";
const palabraInvertida =(palabra)=>[...palabra].reverse().join('');
console.log("palabraInvertida(\"hola\"): ", palabraInvertida("hola"))