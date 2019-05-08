const ask = ()=>{
    let money = prompt("How much money do you have in your bank account");
    let random = Math.floor(Math.random()*500);
    if(!isNaN(money)){
        if(money>1000000){
            console.log(`I´m rich! I have $${money}`);
        }else if(money>=random){
            console.log(`I'm not rich but I have $${money}`);
        }else if(money<random){
            console.log(`I'm poor, I only have $${money}`);
        }
        console.log(`"The threshold is $${random}`);
    }else{
        console.log("Is not a number");
    }
    return money;
}
ask();