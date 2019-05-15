//Condition to fulfill promise
let goalAchived = confirm('Did you get the grades?');

//promise
let willIgetMyNewCar = new Promise(function(resolve, reject) {
    if (goalAchived) {
        car = {
            brand: "ferrari",
            year: "2018",
            model: "488 GTB",
            color: "red"
        };
        resolve(car);
    } else {
        let reason = new Error("At least you get a bike");
        reject(reason);
    }
});

let askParents = function() {
    willIgetMyNewCar
        .then(function(newCar) {
            document.body.innerHTML = `
                <li>${newCar.brand}</li>
                <li>${newCar.color}</li>
                <li>${newCar.model}</li>
                `;
        })
        .catch(function(message){
            document.body.innerHTML = `Sorry: ${message}`;
        });
}
askParents();