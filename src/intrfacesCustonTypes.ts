type MeuObjeto =  {
    x:number;
    y:number;
};
//se nao passar todos os elementos do objeto da pau 
const meuobjeto:MeuObjeto={
    x:10,
    y:20,
}
//quando tipou pontoA e PontoB herdaram propriedades do objeto
function calcularDistancia(pontoA:MeuObjeto,pontoB:MeuObjeto):number{
    const dx = pontoB.x - pontoA.x
    const dy = pontoB.y - pontoA.y
    const resultado = Math.sqrt(dx**2 + dy**2);
    return resultado;
}

console.log(calcularDistancia(meuobjeto, {x:5, y:15}));