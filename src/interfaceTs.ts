interface Carro{
marca:string;
modelo:string;
ano:number;
metodoDarPartida:()=>void;
}

const meuCarro:Carro ={
    marca:"Ford",
    modelo:"Mustang",
    ano:2020,
    metodoDarPartida:()=>{
        console.log("Vroooom!");
    },
}

function dirigir(meucarro:Carro):void{
    console.log(`Dirigindo ${meuCarro.marca} - ${meuCarro.modelo}`);
    meuCarro.metodoDarPartida();
}


dirigir(meuCarro);