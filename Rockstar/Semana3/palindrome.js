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

isPalindrome('RodrigoogirdoR') // true
isPalindrome('Rodrigo') // false
isPalindrome('Lamina animal'); // true

// "a|n|a".length / 2 = parseInt(1.5) = 1
// "ab||ba".length / 2 = parseInt(2) = 2

function isPalindrome (arg) { // "Lamina animal"
    // var en_medio = parseInt((word.length / 2)) - 1; // 5
    let num=0;
    let x = arg.toLowerCase().split("");
    for (let i = 0; i < x.length; i++) { // i = 0
        if(x[i]==x.reverse()[i])
            num++;
        console.log(num)
        // 
    }
    if(num===x.length){
        console.log(true);
        return true;
    }

    console.log(false);
    return false;
}
