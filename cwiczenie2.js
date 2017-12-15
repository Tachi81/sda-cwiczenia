/*
 * jakiego typu jest plik stwórz pomocniczą tablice z typami
 * i napisz metodę która wyświetla typ pliku na podstawie rozszerzenia
 * 
 * np. piesek.jpg -> obraz
 * 
 * rozszerzenia          - typy
 * 
 * jpg, png, psd         - obraz
 * doc, txt, xls, pdf    - dokument
 * exe, bat              - aplikacje
 */

var files = ["obrazek.jpg", "avatar.png", "cv.pdf", "finanse.xls", 'a.jpg.exe'];

function sprawdzenieTypu(tablicaPlikow){
  var tablicaTypow= tablicaPlikow.split(".");
  tablicaTypow.forEach(element => {

     if (element[tablicaPlikow.split(".").length-1]==("jpg"||"png"||"psd")) {
         console.log('obraz')
     };      
  });
  console.log(tablicaTypow);
}

sprawdzenieTypu(files);
//var types = ...
