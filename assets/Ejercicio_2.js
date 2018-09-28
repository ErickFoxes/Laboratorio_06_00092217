let suma = function(arrg){
    let i=0;
    for(let x of arrg){
        i=i+x;
    }
    console.log('La suma de los elementos del arreglo es :'+i+' Su promedio es :'+(i/arrg.length));
}