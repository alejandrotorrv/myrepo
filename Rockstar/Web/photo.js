class monito {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
    attack(target){
        target.b-=this.a;
    }
}

let main=new monito(100, 100);
let second=new monito(100, 100);

console.log(main, second);