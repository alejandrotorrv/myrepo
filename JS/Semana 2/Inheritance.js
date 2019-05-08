class Fruit {
    constructor(name, color, calories){
        this.name = name;
        this.color = color;
        this.calories = calories;
    }
    info(){
        return `this ${this.color} ${this.name} contains ${this.calories}`;
    }
}

class Smoothie extends Fruit{
    constructor(name, color, calories, size, hasMilk){
        super(name, color, calories);

        this.size = size;
        this.hasMilk = hasMilk;
    }
    countCalories() {
        let totalCals = this.calories;
        if ( this.size === "large") {
            totalCald = 3*Number.parseInt(this.calories);
        } else if (this.size === "medium") {
            totalCals = 2 * this.calories;
        } 
        return totalCals;
    }
}

const banana = new Smoothie("banana", "yellow", 120, "medium", true);
console.log(banana);
console.log(banana.countCalories());