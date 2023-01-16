// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = 'Hello';

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 5;

// Crea una variable booleana:
const nuevoBool = false;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
  return str; //ok
  
}

function suma(x, y) {
  suma = x + y; // ok
  return suma;
}

function resta(x, y) {
  resta = x -  y; //ok
  return resta;
  
}

function multiplica(x, y) {
  multiplica = x * y; //ok
  return multiplica;
  
}

function divide(x, y) {
  divide = x / y; //ok
  return divide;
  
}

function sonIguales(x, y) {
  if (x === y){ //ok
    return true;
  }
  else{
    return false;
  }
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:
  
}

function tienenMismaLongitud(str1, str2) {

  if (str1.length === str2.length){ //ok
    return true;
  }
  else{
    return false;
  }
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
  
}

function menosQueNoventa(num) {

  if ( num < 90) { //ok
    return true;
  }
  else{
    return false;
  }
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
  
}

function mayorQueCincuenta(num) {

  if (num > 50){ //ok
    return true;
  }
  else{
    return false;
  }
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
  
}

function obtenerResto(x, y) {
 return obtenerResto = x % y;//ok
  // Obten el resto de la división de "x" entre "y"
  // Tu código:
  
}

function esPar(num) {
     if ((num % 2)==0) { //ok
      return true;
     }
     else{
      return false;
     }
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:
  
}

function esImpar(num) {
  if ((num % 2) != 0){// ok
    return true;
  }
  else{
    return false;
  }
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
  
}

function elevarAlCuadrado(num) {
  resultado = Math.pow (num, 2);//ok
  return resultado;
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
  
}

function elevarAlCubo(num) {
  eleve = Math.pow (num, 3);//ok
  return eleve;
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
  
}

function elevar(num, exponent) {
  resultado2 = Math.pow (num, exponent);//ok
  return resultado2;
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
  
}

function redondearNumero(num) {
  redondear = Math.round (num); //ok
  return redondear;
  // Redondea "num" al entero más próximo y devuélvelo
  // Tu código:
  
}

function redondearHaciaArriba(num) {
  redondear2 = Math.ceil (num); //ok
  return redondear2;
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  // Tu código:
  
}

function numeroRandom() {
  return Math.random(1); //ok
  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()
  
}

function esPositivo(numero) {
  if (numero === 0){ //ok
    return false;
  }
  else if (numero <0 ){
    return "Es negativo";
  }
  else
  {
    return "Es positivo";
  }
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false
  
}

function agregarSimboloExclamacion(str) {
return str+'!'; ///ok
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
}

function combinarNombres(nombre, apellido) {
  var resultado3 =nombre+' '+ apellido; // ok 
  return resultado3;
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Henry" -> "Soy Henry"
  // Tu código:
  
}

function obtenerSaludo(nombre) {
  var resu1= "Martin";
  var resu2= "!";
  var resu3= "Hola";
  var final = resu3+' '+nombre+resu2;
  return final;
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
  
}

function obtenerAreaRectangulo(alto, ancho) {
  return area = ancho * alto; /// ok
  // Retornar el area de un rectángulo teniendo su altura y ancho
  // Tu código:
  
}


function retornarPerimetro(lado){
  return peri = lado * 4 // ok
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí
  
}


function areaDelTriangulo(base, altura){
  return areat = base * altura / 2; ///ok
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí

}


function deEuroAdolar(euro){
  let resultado = euro * 1.2; //ok
    return resultado;
  //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
  //como parámetro un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí
  
}


function esVocal(letra){
  if (letra.length > 1) { //ok
    return "Dato incorrecto";
  } else if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra ===  'u') {
    return "Es vocal";
  } else {
    return "Dato incorrecto";
  }
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  // Si no es vocal, tambien debe devolver "Dato incorrecto".
  //Escribe tu código aquí
  
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
};
