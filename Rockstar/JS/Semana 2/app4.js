//button handler
document.getElementById("button").addEventListener("click",loadData);

function loadData(){
    //objetos xhr
    const xhr = new XMLHttpRequest();

    //open method 
    xhr.open("GET", "app4.txt", true);

    //validate no errors in http and use the received data
    xhr.onload = function(){
        if(this.status === 200) {
            console.log(this.responseText);
        }
    }
    xhr.onreadystatechange = function() {
        console.log("READY STATE", xhr.readyState);
        if(this.status === 200 && this.readyState === 4){
            document.getElementById("output").innerHTML = `<h1> ${this.responseText} </h1>`;
        }
    }

    //for spinners/loaders
    xhr.onprogress = function() {
        console.log("ready state", xhr.readyState);
    }

    //error
    xhr.onerror = function() {
        console.log("request error...");
    }
    
    xhr.send();
}