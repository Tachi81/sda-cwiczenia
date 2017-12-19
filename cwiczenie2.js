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

function sprawdzenieTypu(tablicaPlikow) {
    for (let i = 0; i < tablicaPlikow.length; i++) {
        const fileName = tablicaPlikow[i];
        const singleFile = tablicaPlikow[i].split(".");
        fileType = singleFile[singleFile.length - 1];

        switch (fileType) {
            case 'jpg':
            case 'png':
            case 'psd': console.log(fileName, ' to obraz');
                break;

            case 'doc':
            case 'txt':
            case 'xls':
            case 'pdf': console.log(fileName, ' to dokument');
                break;

            case 'exe':
            case 'bat': console.log(fileName, ' to aplikacja');
                break;
        }
    }
}



sprawdzenieTypu(files);
//var types = ...



//
// var files = ["obrazek.jpg", "avatar.png", "cv.pdf", "finanse.xls", "a.jpg.exe"];
// // var types = 
// files.forEach( element => {
//     showType(element);
//  });

// function showType(fileName) {
//     var result;
//     var type = getType(fileName);
//     switch (type) {
//         case "jpg":
//         case "png":
//         case "psd":
//             result = "obraz";
//             break;
//         case "doc":
//         case "txt":
//         case "xls":
//         case "pdf":
//             result = "dokument";
//             break;
//         case "exe":
//         case "bat":
//             result = "aplikacja";
//             break;
//     }
//     console.log (fileName, "jest typu", result);

//     function getType(fileName) {
//         var array = fileName.split(".");
//         return array[array.length - 1];
//     }
// }
