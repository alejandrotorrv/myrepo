
var socket = io();
console.log('segunda linea en el frontend!!!');
let button=document.getElementById('dropBomb');
button.addEventListener("click", function(){
    let x=document.getElementById('x');
    let y=document.getElementById('y');

    socket.emit('dropbomb', {x:parseInt(x.value), y:parseInt(y.value)});

    
    // console.log('drop bomb!!!');
    // let xhr = new XMLHttpRequest();
    // xhr.open('POST', `/battleship/dropbomb/${x.value}/${y.value}`, true);
    // xhr.send();
    // xhr.onload = function() {
    //     if(xhr.status === 200) {
    //         console.log('finished.', xhr.responseText)
    //     }
    // }
    
});
socket.on('wasHit', function(wasHit){
    console.log('wasHit', wasHit);
});

// let resetButton = document.getElementById("reset");
// resetButton.addEventListener("click", function(){
//     var xhr = new XMLHttpRequest();
//     xhr.open("POST", "/battleship/reset", true);
//     xhr.send();
//     xhr.onload = function() {
//         if (xhr.status === 200) {
//             console.log("finished", xhr.responseText)
//         }
//     }
// })