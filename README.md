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
