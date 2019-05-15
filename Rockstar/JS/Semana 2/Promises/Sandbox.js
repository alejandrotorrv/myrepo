document.getElementById("getText").addEventListener("click", getText);
function getText(){
    fetch("textData.txt")
        .then( function(response) {
            return response.text();
        })
        //chained promise
        .then(function(data){
            console.log(data);
            document.getElementById("output").innerHTML=`
            <b>Fetch Text: [</b>.<i>${data}</i><b>]</b>`
        })
        .catch(function(response){});
}

document.getElementById("getJson").addEventListener("click",getJson);
function getJson(){
    fetch("JSONdata.json")
    .then(function(response) {
        return response.json();
    })
    .then( function(data) {
        let output = "";
        data.forEach(function (person) {
            output += `<li>${person.name} works for ${person.company}</li>`;
        });
        document.getElementById("output").innerHTML = output;
    })
}

document.getElementById("GetAPI").addEventListener("click", getAPI);
let x;
let mySymbol="ETH";
function getAPI() {
    fetch("https://api.coinmarketcap.com/v2/ticker/")
        .then(function(response){
            return response.json();
        })
        .then(function(coin){
            console.log(coin.data);
            for(x in coin.data){
                let search=coin.data[x].symbol
                if(search===mySymbol){
                    console.log(search);
                    return x;
                };
            }
        })
        .then(function(num){
            fetch("https://api.coinmarketcap.com/v2/ticker/"+num+"/")
                .then(function(response){
                    return response.json();
                })
                .then(function (coin) {
                    let output = `
                        <li> ID: ${coin.data.id} : ${coin.data.symbol}
                        ${coin.data.name} Rank ${coin.data.rank}</li>
                        <li> Coin Value (USD) $${coin.data.quotes.USD.price}</li>
                        <li> Percentage of change in: 1Hr: ${
                            coin.data.quotes.USD.percent_change_1h}
                            % / 24 Hrs: ${coin.data.quotes.USD.percent_change_24h}%
                    `;
                    document.getElementById("output").innerHTML = output;
                })
            })
}


//https://coinmarketcap.com/api/