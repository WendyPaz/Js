var tipobox=0;
var tpocaja=0;
var padding=0;
var width=0;
var border=0;

var calcularCaja=0;
tipo= parseInt(prompt('ingresa el tipo de caja a dibujar // 0 = BORDE 1=CONTENT'));
padding = parseInt(prompt('ingresa el valor del padding'));
width = parseInt(prompt('ingresa el valor del width'));
border = parseInt(prompt('ingresa el valor del border'));

function caja (tipocaja,padding,width,border){
    if (tipocaja===0){
        console.log('El ancho del contenido es: ${width} pixeles');
    }else if (tipocaja ===1){
            console.log ("El ancho del contenido es: ${width+border+padding} pixeles");
    }else 
    console.log ('Error');
}
