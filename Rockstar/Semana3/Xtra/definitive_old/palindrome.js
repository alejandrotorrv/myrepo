// ABBA
// acca
// MonicaacinoM
// DanielleienaD
// CarlossolraC
// CesarraseC
// MiguelleugiM
// JosueeusoJ
// LuissiuL
// RodrigoogirdoR

//isPalindrome('RodrigoogirdoR') // true
isPalindrome('Rodrigo') // false
//isPalindrome('Lamina animal'); // true

// "a|n|a".length / 2 = parseInt(1.5) = 1
// "ab||ba".length / 2 = parseInt(2) = 2

/*function isPalindrome (word) { // "Lamina animal"
    var en_medio = parseInt((word.length / 2)) - 1; // 5
    //  012345|6|789012
    // "Lamina| |animal"

 // for (var i = en_medio; i >= 0; i--) {
    for (var i = 0; i <= en_medio; i++) { // i = 0
        // 
    }
}*/

function isPalindrome (word) { // "Lamina animal"
    let [num,i]= [0,0];
    let f =x=>x.reverse();
    let div = word.split("");
    let rev=f(div);
    console.log(div);
    console.log(rev);
    for(let i=1; i<=div.length; i++){
        if(div[i]===rev[i])
            num+=1;
    }
    console.log(num);
}