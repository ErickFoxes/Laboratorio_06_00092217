let encriptacion_murcielago = function(palabra){
    let palabra_murcielago='murcielago';
    let palabra_nueva = '';
    for(let x of palabra){
            if(x>=0 && x<=9){
                palabra_nueva=palabra_nueva+palabra_murcielago[x];
            }else{
                palabra_nueva=palabra_nueva+x;
            }
    }
    console.log(palabra_nueva);
}