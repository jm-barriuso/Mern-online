class Card {
    constructor(name,cost){
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card{
    constructor(name,cost,power,res){
        super(name,cost);
        this.power = power;
        this.res = res;
    }
    attack( target ){
        target.res-= this.power;
    }
}

class Effect extends Card{
    constructor(name,cost,text,stat,magnitud){
        super(name,cost);
        this.text = text;
        this.stat =stat;
        this.magnitud = magnitud;
    }
    play(target){
        if( target instanceof Unit){
            if (this.stat === "res"){
                target.res+= this.magnitud;
            }else if(this.stat === "power"){
                target.power+= this.magnitud;
            }
        }else{
            throw new Error("Target must be a unit!")
        }
    }
}

const rechazoDePromesaNoManejado = new Effect("Rechazo de promesa no manejado",1,"reducir la resistencia del objetivo en 2","res",-2);
const programacionEnPAreja = new Effect("Programación en pareja",3,"aumentar el poder del objetivo en 2","power",+2);
const ninjaCinturonRojo = new Unit("Ninja Cinturon Rojo",3,3,4);
const ninjaCinturonNegro = new Unit("Ninja Cinturon Negro",4,5,4);
const algoritmoDificil = new Effect("Algoritmo Difícil",2,"aumentar la resistencia del objetivo en 3","res",+3);
const unitsCards = [];
const effectCards =[];
console.log("turno 1");
console.log(`El jugador 1 convoca a "Ninja Cinturón Rojo"`);
unitsCards.push(ninjaCinturonRojo);
console.table(unitsCards);
console.log(`El jugador 1 juega "Algoritmo duro" en "Ninja Cinturón Rojo"`);
effectCards.push(algoritmoDificil);
algoritmoDificil.play(ninjaCinturonRojo);
console.table(effectCards);
console.table(unitsCards);
console.log("turno 2");
console.log(`El jugador 2 convoca a "Ninja Cinturón Negro"`);
unitsCards.push(ninjaCinturonNegro);
console.table(unitsCards);
console.log(`El jugador 2 juega "Rechazo de promesa no controlada" en "Ninja Cinturón Rojo"`);
effectCards.push(rechazoDePromesaNoManejado);
rechazoDePromesaNoManejado.play(ninjaCinturonRojo);
console.table(effectCards);
console.table(unitsCards);
console.log("turno 3");
console.log(`El jugador 1 juega "Programación en pareja" en "Ninja Cinturón Rojo"`);
effectCards.push(programacionEnPAreja);
programacionEnPAreja.play(ninjaCinturonRojo);
console.table(effectCards);
console.table(unitsCards);
console.log(`El jugador 1 tiene el ataque "Ninja Cinturón Rojo" "Ninja Cinturón Negro"`);







