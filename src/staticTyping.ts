let idade:number =27;

let nomeCompleto:string = 'Cormaren';

let isAlive:boolean = true;

let bixo ="gato"//ela passa a ser string 


function sum(a:number,b:number):number{
    const resultado =a+b;
    return resultado;
}

console.log(sum(1,2));

function letras(fullname:string):string | void{
    if(fullname){
        return `Hello,${fullname}!`
    }
}



function letrasOuNumeros(value:string|number):number{
    if(typeof value ==='string'){
        return value.length;
    }
    //se for numero ele retornara aqui
    return value;
}