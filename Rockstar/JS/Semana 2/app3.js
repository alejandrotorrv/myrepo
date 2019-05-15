const organPrototype = {
    condition: function(){
        return `Hello, I'm a ${this.isHealthy ? "healthy":"sick"} ${this.organName} of the "${this.organSystem}" system`;
    },
    getSick: function(disease){
        this.disease = disease;
        this.isHealthy = false;
    },
    getCured: function (){
        liver.organName = "liver";
        liver.organSystem = "digestive";
        liver.isHealthy = true;
    }
};

const liver = Object.create(organPrototype);
liver.organName = "liver";
liver.organSystem = "digestive";
liver.isHealthy = true;

 console.log(liver);
 console.log(liver.condition());

const heart = Object.create(organPrototype, {
    organName: {value: "heart"},
    organSystem: {value: "cardiovascular"},
    isHealthy:{value:true}
});

console.log(heart);
console.log(heart.condition());