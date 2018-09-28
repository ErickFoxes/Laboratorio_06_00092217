let promedio_incerteza = function(arrg){
    let i=0;
    let o=0;
    let promedio=0;
    let incerteza = 0;
    for(let x of arrg){
        i=i+x;
    }
    promedio= i/arrg.length;
    for(let y of arrg){
        o=o+(Math.pow(y-promedio),2);
    }
    incerteza= Math.sqrt(((1/(arrg.length-1))*o));
    console.log('El promedio es: '+promedio+' la incerteza es: '+incerteza);
}