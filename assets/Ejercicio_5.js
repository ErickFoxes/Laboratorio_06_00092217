let identificador_tipo_elementos = function(arrg,tipo_dato){
    let aux = [];
    for(let x of arrg){
        if(typeof x == tipo_dato){
            aux.push(x);
        }
    }
    console.log(aux);
}