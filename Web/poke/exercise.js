const pokemon={
    name:"mewtwo",
    health: 100,
    dps: 99999999,
    level:1,
    isAngry: false,
    megaEvolution: false,
    getEvolved(){
        this.megaEvolution=true;
    },
    getAngry(){
        this.isAngry=true;
    },
    attack(target){
        target.health-=this.dps;
    },
    levelUp(){
        this.level++;
    }
};

const pokeball={
    someoneInside:false,
    who:undefined,
    total:100,
    catch(target){
        this.someoneInside=true;
        this.who=target;
        total--;
    },
    free(){
        this.someoneInside=false;
        this.who=undefined;
        total++;
    }
}

