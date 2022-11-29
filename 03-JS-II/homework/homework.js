// No cambies los nombres de las funciones.

function obtenerMayor(x, y) {
  if (Number.isInteger(x / y)) // ok
  if (x > y) return x;
  if (x < y) return y;
  if (x === y) return x || y;
  // "x" e "y" son números enteros (int).
  // Devuelve el número más grande
  // Si son iguales, devuelve cualquiera de los dos
  // Tu código:
}

function mayoriaDeEdad(edad) {
  if (edad >= 18) // ok
  {
    return 'Allowed';
  }
  else
  {
    return 'Not allowed'
  }
  //Determinar si la persona según su edad puede ingresar a un evento.
  //Si tiene 18 años ó más, devolver --> "Allowed"
  //Si es menor, devolver --> "Not allowed"
}
  
function conection(status) {
  if (status === 1) return 'Online'; // ok
  if (status === 2) {
    return 'Away';
  }
  return 'Offline';
  //Recibimos un estado de conexión de un usuario representado por un valor numérico. 
  //Cuando el estado es igual a 1, el usuario está "Online"
  //Cuando el estado es igual a 2, el usuario está "Away"
  //De lo contrario, presumimos que el usuario está "Offline"
  //Devolver el estado de conexión de usuario en cada uno de los casos.
}

function saludo(idioma) { // ok
switch (idioma)
{
  case 'aleman':
    return 'Guten Tag!';

  case 'mandarin':
    return 'Ni Hao!';

  case 'ingles':
    return 'Hello!';

  case 'undefined':
    return 'Hola!';

  default:
    return 'Hola!';
}
  // Devuelve un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!"
  // Si "idioma" es "mandarin", devuelve "Ni Hao!"
  // Si "idioma" es "ingles", devuelve "Hello!"
  // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
  // Tu código:
}

function colors(color) {
  switch (color){ // ok
    case 'blue':
      return 'This is blue';

    case 'red':
      return 'This is red';

    case 'green':
      return 'This is green';

    case 'orange':
      return 'This is orange';

    default:
      return 'Color not found';
  }
  //La función recibe un color. Devolver el string correspondiente:
  //En caso que el color recibido sea "blue", devuleve --> "This is blue"
  //En caso que el color recibido sea "red", devuleve --> "This is red"
  //En caso que el color recibido sea "green", devuleve --> "This is green"
  //En caso que el color recibido sea "orange", devuleve --> "This is orange"
  //Caso default: devuelve --> "Color not found"
  //Usar el statement Switch.
}

function esDiezOCinco(numero) {
  if (numero === 10 || numero ===5) // ok
  {
    return true;
  }
  else{
    return false;
  }
  // Devuelve "true" si "numero" es 10 o 5
  // De lo contrario, devuelve "false"
  // Tu código:
}

function estaEnRango(numero) {
  if (numero > 20 && numero < 50) // ok
  {
    return true;
  }
  else{
    return false;
  }
  // Devuelve "true" si "numero" es menor que 50 y mayor que 20
  // De lo contrario, devuelve "false"
  // Tu código:
}

function esEntero(numero) {
  var numeroa = Math.floor(numero); // ok

  if (numero === numeroa)
  {
    return true;
  }
  return false;

  // Devuelve "true" si "numero" es un entero (int/integer)
  // Ejemplo: 0.8 -> false
  // Ejemplo: 1 -> true
  // Ejemplo: -10 -> true
  // De lo contrario, devuelve "false"
  // Pista: Puedes resolver esto usando `Math.floor`
  // Tu código:
}

function fizzBuzz(numero) {
  if (numero % 3 === 0 && numero % 5 === 0) return 'fizzbuzz'// ok
  if (numero % 3 === 0 ) return 'fizz';
  if (numero % 5 === 0 ){
    return 'buzz';
  }
  return numero;
  }
  // Si "numero" es divisible entre 3, devuelve "fizz"
  // Si "numero" es divisible entre 5, devuelve "buzz"
  // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
  // De lo contrario, devuelve el numero

function operadoresLogicos(num1, num2, num3) {
  if (num1 === 0 || num2 === 0 || num3 === 0) return 'Error' // ok
  if (num1 < 0 || num2 < 0 || num3 < 0) return 'Hay negativos';
  if (num1 > num2 && num1 > num3) return 'Número 1 es mayor y positivo';
  if (num3 > num1 && num3 > num2 ){
    num3++;
    return num3;
  }
  return false;
  //La función recibe tres números distintos. 
  //Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
  //Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
  //Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
  //0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
  //Si no se cumplen ninguna de las condiciones anteriores, retornar false. 
}

function esPrimo(numero) {
   if (numero === 0 || numero === 1) return false // ok
   if (numero === 2)
   {
    return true;
   }
   else
   {
    for (var i = 2; i < numero; i++)
      {
        if ((numero % i) === 0) return false
      }
      return true;
   }
  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primos
}

function esVerdadero(valor){
  if (valor === true)// ok
  {
    return 'Soy verdadero';
  }
  else 
  {
    return 'Soy falso';
  }
  }
  //Escribe una función que reciba un valor booleano y retorne “Soy verdadero” 
  //si su valor es true y “Soy falso” si su valor es false.
  //Escribe tu código aquí

function tablaDelSeis(){
var tabla=[];
var num= 0;
  for (i = 0; i < 11; i++)
{
  let num= i*6;
  tabla.push (num)
}
return tabla;
  //return tabla;
  //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
  //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
  //Escribe tu código aquí   
  
}

function tieneTresDigitos(numero){
  if ((""+numero).length ===3) // ok
  {
    return true;
  }
  else{
    return false;
  }
  //Leer un número entero y retornar true si tiene 3 dígitos. Caso contrario, retorna false.
  //Escribe tu código aquí
  
}

function doWhile(numero) {
  let i = 0; // ok
  do{
    numero = numero + 5;
    i++;
  }while (i<8);
  return numero;
  
  }
  //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
  //Retornar el valor final.
  //Usar el bucle do ... while.


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  obtenerMayor,
  mayoriaDeEdad,
  conection,
  saludo,
  colors,
  esDiezOCinco,
  estaEnRango,
  esEntero,
  fizzBuzz,
  operadoresLogicos,
  esPrimo,
  esVerdadero,
  tablaDelSeis,
  tieneTresDigitos,
  doWhile
};
