# Nota
El siguiente repositorio incluye los desafíos vistos en el curso: Lógica de programación: explorar funciones y listas. 

# Desafíos #1
Archivos base: https://github.com/alura-es-cursos/js-curso-2/tree/main

1. Cambia el contenido de la etiqueta h1 con document.querySelector y asigna el siguiente texto: "Hora del Desafío".
2. Crea una función que muestre en la consola el mensaje "El botón fue clicado" siempre que se presione el botón "Console".
3. Crea una función que se ejecute cuando se haga clic en el botón "prompt", preguntando el nombre de una ciudad de Brasil. Luego, muestra una alerta con el mensaje concatenando la respuesta con el texto: "Estuve en {ciudad} y me acordé de ti".
4. Crea una función que muestre una alerta con el mensaje: "Yo amo JS" siempre que se presione el botón "Alerta".
5. Al hacer clic en el botón "suma", pide 2 números y muestra el resultado de la suma en una alerta.

# Desafíos #2

1. Crear una función que muestre "¡Hola, mundo!" en la consola.
```javascript
function texto() {
  console.log("¡Hola, mundo!");
}

texto();
```
2. Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.
```javascript
function mostrarNombre(nombre) {
  console.log(`¡Hola, ${nombre}!`);
}

mostrarNombre("Monica");
```
3. Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
```javascript
function calcularDoble(numero) {
  return numero * 2;
}

let resultadoDoble = calcularDoble(7);
console.log(resultadoDoble);
```
4. Crear una función que reciba tres números como parámetros y devuelva su promedio.
```javascript
function calcularPromedio(a, b, c) {
  return (a + b + c) / 3;
}

let promedio = calcularPromedio(8, 12, 11);
console.log(promedio);
```
5. Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
```javascript
function encontrarMayor(a, b) {
  return a > b ? a : b;
}

let numeroMayor = encontrarMayor(3, 6);
console.log(numeroMayor);
```
6. Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.
```javascript
function cuadrado(numero) {
  return numero * numero;
}

let resultado = cuadrado(6);
console.log(resultado);
```
# Desafíos #3

1. Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.
```javascript
function calcularIMC(altura, peso) {
  let imc = peso / (altura * altura);
  return imc;
}

let resultado = calcularIMC(1.68,67);
console.log(resultado);
```
2. Crea una función que calcule el valor del factorial de un número pasado como parámetro.
```javascript
function calcularFactorial(numero) {
  if (numero === 0 || numero === 1) {
    return 1;
  } else {
    return numero * calcularFactorial(numero - 1);
  }
}
let numero = 8;
let resultado = calcularFactorial(numero);
console.log(`El factorial de ${numero} es ${resultado}`);
```
3. Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.
```javascript
function convertirDolaresAPesos(dolares, tasaDeCambio) {
  let pesosColombianos = dolares * tasaDeCambio;
  return pesosColombianos;
}

let dolares = 100; 
let tasaDeCambio = 3800; 
let resultado = convertirDolaresAPesos(dolares, tasaDeCambio);
console.log(`${dolares} dólares equivalen a ${resultado} pesos colombianos.`);
```
4. Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros.
```javascript
function calcularAreaYPerimetro(altura, anchura) {
  let area = altura * anchura;
  let perimetro = 2 * (altura + anchura);
  console.log(`El área de la sala es: ${area}.`);
  console.log(`El perímetro de la sala es: ${perimetro}.`);
}

let altura = 5;
let anchura = 10; 
calcularAreaYPerimetro(altura, anchura);
```
5. Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.
```javascript
function calcularAreaYPerimetroCircular(radio) {
  const pi = 3.14;
  let area = pi * radio * radio;
  let perimetro = 2 * pi * radio;
  
  console.log(`El área de la sala circular es: ${area}.`);
  console.log(`El perímetro de la sala circular es: ${perimetro}.`);
}

let radio = 5; 
calcularAreaYPerimetroCircular(radio);
```
6. Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.
```javascript
function mostrarTablaDeMultiplicar(numero) {
  for (var i = 1; i <= 10; i++) {
    var resultado = numero * i;
    console.log(numero + " x " + i + " = " + resultado);
  }
}

let numero = 9;
mostrarTablaDeMultiplicar(numero);
```

# Desafíos #4

1. Crea una lista vacía llamada "listaGenerica".
```javascript
let listaGenerica = [];
```
2. Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
```javascript
let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];
```
3. Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
```javascript
lenguagesDeProgramacion.push('Java', 'Ruby', 'GoLang');
```
4. Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.
```javascript
function mostrarLenguages() {
  for (let i = 0; i < lenguagesDeProgramacion.length; i++) {
    console.log(lenguagesDeProgramacion[i]);
  }
}

mostrarLenguages();
```
5. Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.
```javascript
function mostrarLenguagesInverso() {
  for (let i = lenguagesDeProgramacion.length - 1; i >= 0; i--) {
    console.log(lenguagesDeProgramacion[i]);
  }
}

mostrarLenguagesInverso();
```
6. Crea una función que calcule el promedio de los elementos en una lista de números.
```javascript
function calcularPromedio(lista) {
  let suma = 0;
  for (let i = 0; i < lista.length; i++) {
    suma += lista[i];
  }
  return suma / lista.length;
}

let numeros = [10, 20, 30, 40, 50, 60, 80];
let media = calcularPromedio(numeros);
console.log('Promedio:', media);
```
7. Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
```javascript
function encontrarMayorMenor(lista) {
  let mayor = lista[0];
  let menor = lista[0];

  for (let i = 1; i < lista.length; i++) {
    if (lista[i] > mayor) {
      mayor = lista[i];
    }
    if (lista[i] < menor) {
      menor = lista[i];
    }
  }

  console.log('Mayor:', mayor);
  console.log('Menor:', menor);
}

let numeros = [15, 8, 25, 5, 12];
encontrarMayorMenor(numeros);
```
8. Crea una función que devuelva la suma de todos los elementos en una lista.
```javascript
function calcularSuma(lista) {
  let suma = 0;
  for (let i = 0; i < lista.length; i++) {
    suma += lista[i];
  }
  return suma;
}

let numeros = [15, 8, 25, 5, 12];
let suma = calcularSuma(numeros);
console.log('Suma:', suma);
```
9. Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.
```javascript
function encontrarPosicion(lista, elemento) {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] === elemento) {
      return i; 
    }
  }
  return -1; 
}


let lista = [10, 20, 30, 40, 50];
let elemento = 30;
let posicion = encontrarPosicion(lista, elemento);
console.log(`El elemento ${elemento} se encuentra en la posición: ${posicion}`); 
elemento = 60;
posicion = encontrarPosicion(lista, elemento);
console.log(`El elemento ${elemento} se encuentra en la posición: ${posicion}`);
```
10. Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.
```javascript
function sumarListas(lista1, lista2) {
  if (lista1.length !== lista2.length) {
    throw new Error("Las listas deben tener el mismo tamaño");
  }
  
  let resultado = [];
  for (let i = 0; i < lista1.length; i++) {
    resultado.push(lista1[i] + lista2[i]);
  }
  
  return resultado;
}

let lista1 = [1, 2, 3, 4, 5];
let lista2 = [10, 20, 30, 40, 50];

let resultado = sumarListas(lista1, lista2);
console.log(`La lista resultante es: ${resultado}`);
```
11. Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.
```javascript
function cuadradoDeNumeros(lista) {
  let resultado = [];
  for (let i = 0; i < lista.length; i++) {
    resultado.push(lista[i] * lista[i]);
  }
  return resultado;
}

let lista = [1, 2, 3, 4, 5];
let resultado = cuadradoDeNumeros(lista);
console.log(`La lista de los cuadrados es: ${resultado}`);
```
