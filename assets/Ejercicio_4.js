let suma_ultimo_primero = function(arrg){
    let tamanio_arreglo = arrg.length;
    let tamanio_arreglo_mitad = Math.trunc(tamanio_arreglo/2);
    if(tamanio_arreglo%2===0){
        for(let i=0;i<tamanio_arreglo_mitad;i++){
            console.log(arrg[i]+arrg[tamanio_arreglo-1-i])
        }
    }else{
        for(let i=0;i<tamanio_arreglo_mitad;i++){
            console.log(arrg[i]+arrg[tamanio_arreglo-1-i])
        }
        console.log(arrg[tamanio_arreglo_mitad ]*2);
    }
}