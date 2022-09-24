class Vehicle {
    constructor(manufacturer, model, color){
        this.miles = 0;
        this.manufacturer = manufacturer;
        this.model = model;
        this.color = color;
    }    
    dirve() {
        this.miles +=10;
    }
}

const car = new Vehicle("BMW","M5","blue");
car.drive();
console.log(car.miles);