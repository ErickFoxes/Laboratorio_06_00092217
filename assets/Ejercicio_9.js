let adivina = function(n){
    let arrg = [];
    for(let i=1;i<=20;i++){
        arrg.push(Math.floor(Math.random()*101));
    }
    if(arrg.includes(n)){
        console.log('Ganaste prro');
    }
    else{
        console.log('Nel we, pa la proxima');
    }
}