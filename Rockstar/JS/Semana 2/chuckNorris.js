//api url
urlAPI = 'https://api.icndb.com/jokes/random';

//click listener
document.querySelector(".get-jokes").addEventListener("click", getJokes);

function getJokes(e){
    const number = document.querySelector("input[type=number]").value;

    if(number === ""){
        alert("No number");
        return;
    }
    const xhr= new XMLHttpRequest();

    let url = `${urlAPI}/${number}`;

    xhr.open("GET", url, true);

    xhr.onload = function() {
        if(this.status===200) {
            const response = JSON.parse(this.responseText);
            //console.log(response);

            let output = "";

            if( response.type === "success") {
                response.value.forEach(function (joke) {
                    output += `<li>${joke.joke}</li>`;
                });
            } else {
                output += `<li> Something went wrong! </li>`;
            }

            document.querySelector(".jokes").innerHTML = output;
        }
    }

    xhr.send();
    
    e.preventDefault();
}