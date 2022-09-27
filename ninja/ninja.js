class Ninja {
    constructor(nombre,salud){
        this.nombre = nombre;
        this.salud = salud;
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
const ninja1 = new Ninja("Hyabusa",100);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();
