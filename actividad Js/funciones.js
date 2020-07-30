var a=0;
var b=0;
var calcularmultiplicacion=0;

a=parseInt(prompt('Digite un número a'));
b=parseInt(prompt('Digite un número b'));

calcularmultiplicacion = multiplicacion (a,b);

function multiplicacion (nA, nB) {
    const resultado = nA*nB;
    console.log('El resultado de la multiplicaión es: ', resultado);
}