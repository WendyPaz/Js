var a=0;
var b=0.21;
var sumatotal=0;

a=parseInt(prompt('Digite un valor'));

sumatotal = iva (a,b);
function iva (nA,nB){
    const riva = (nA*nB);
    console.log ('El  precio sin iva es: ', nA);
    console.log('El valor del iva es: ',riva);
    console.log('El valor total es: ', riva+nA);
}
