class Dog{
    constructor( name, bread, dob){
        this.name = name;
        this.bread = bread;
        this.dob = new Date(dob);
    }
}
const benjie = new Dog("benjie", "yorkie", "01/Jan/2011");
console.log(benjie);

class Person{
    constructor( firstName, lastName, dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }
    greeting(){
        return `Hello there ${this.firstName} ${this.lastName}`;
    }
    calculateAge() {
        const diff = Date.now() - this.dob.getTime();
        const epoch = new Date(diff);
        return Math.abs( epoch.getUTCFullYear() - 1970);
    }
    static yearsInBetween(date1, date2){
        const initialDate = new Date(date1);
        const endDate = new Date(date2);

        const diff = endDate.getTime() - initialDate.getTime();
        const epoch = new Date(diff);
        return Math.abs( epoch.getUTCFullYear() - 1970);
    }
}
// const alan = new Person("Alan", "Villarreal", "01/oct/1980");
// console.log(alan);
// console.log(alan.calculateAge());

console.log(Person.yearsInBetween('01/01/1920', '01/01/1974'));