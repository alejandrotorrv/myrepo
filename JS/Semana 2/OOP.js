let roberto = {
    firstname:"Roberto"
}


function Person(name, bday){
    this.firstname=name;
    this.birthday = new Date(bday);
    this.calculateAge = function(){
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
}

const alan = new Person('Alan', "01/01/1990");
console.log(alan.firstname);
console.log(alan.calculateAge());