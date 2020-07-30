//Crea una función que recibe 4 parámetros, cada uno con un número, y devuelva como
//valor la media de todos ellos. Haz tres pruebas con distintos números para comprobar que
//funciona correctamente y muestra el resultado en la consola.

var a=0;
var b=0;
var c=0;
var d=0;
var calcularmedia=0;
a=parseInt(prompt('Digite un número a'));
b=parseInt(prompt('Digite un número b'));
c=parseInt(prompt('Digite un número c'));
d=parseInt(prompt('Digite un número d'));

calcularmedia= media (a,b,c,d);
function media (nA,nB,nC,nD){
const resultado = (nA+nB+nC+nD)/4;
console.log('El resultado de la media es: ', resultado);
}
