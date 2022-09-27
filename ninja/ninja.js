class Ninja {
    constructor(nombre){
        this.nombre = nombre;
        this.salud = 100;
        this.velocidad = 3;
        this.fuerza = 3;
    }
    sayName(){
        console.log(`mi nombre es ${this.nombre}`);
    }
    showStats(){
        console.log("Stats");
        console.log(`salud: ${this.salud}`);
        console.log(`velocidad: ${this.velocidad}`);
        console.log(`fuerza: ${this.fuerza}`);
    }
    drinkSake(){
        this.salud += 10;
        console.log(`${this.nombre} has dirnk sake, recover +10`)
    }
}

class Sensei extends Ninja{
    constructor(nombre){
        super(nombre)
        this.salud = 200;
        this.velocidad = 10;
        this.fuerza = 10;
        this.sabiduria = 10;
    }
    speakWisdom(){
        super.drinkSake()
        console.log(`Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses.`)
    }

}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();

const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();
