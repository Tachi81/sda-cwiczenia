var slowa = ["sos", "test", "zaraz", "dwa", "oko"];
function sprawdzOdwracalnosc(tablicaSlow) {
    tablicaSlow.forEach((element) => {
        var check = element.split("");
        console.log(check);
        if (check.reverse().join("") ==element) {
            console.log(element, 'jest odwracalny');
        } else {
            console.log(element, ' jest nieodwracalny');
        }
    });
}
sprawdzOdwracalnosc(slowa);
var word = ["sos", "test", "zaraz", "dwa", "oko"];

word.forEach( element => {
   console.log(element, checkPalindroms(element));
});

function checkPalindroms(slowo) {
   return slowo === slowo.split("").reverse().join("");
}
