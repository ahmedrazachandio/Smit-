// SIR SOLUTION :
// function findLngPrefix(arr) {
//     var itemToCheck = arr[0];
//     var commenLngPrefix = "";
//     var strExtract;
//     for (var j = 0; j < itemToCheck.length; j++) {
//         for (var i = 0; i < itemToCheck.length; i++) {
//             var isFoundInAll = true;
//             // console.log(itemToCheck.slice(i, i + 1 + j));
//             strExtract = itemToCheck.slice(i, i + 1 + j);
//             for (var k = 0; k < arr.length; k++) {
//                 // console.log(strExtract + " found in " + arr[k] + " " + arr[k].includes(strExtract));
//                 if (arr[k].includes(strExtract) === false) {
//                     isFoundInAll = false;
//                     break;
//                 }
//             }
//             if (isFoundInAll && commenLngPrefix.length < strExtract.length) {
//                 commenLngPrefix = strExtract;
//             }
//         }
//     }


//     console.log(commenLngPrefix)

// }

// findLngPrefix(["flower", "flow", "flight"]);
// findLngPrefix(['javascript', 'java', 'javacode']);
// findLngPrefix(['aklama', 'akram', 'akbar']);
// findLngPrefix(["dog", "racecar", "car"]);




//  MY SOLUTION :

function findLngPrefix(arr) {
    var itemToChk = arr[0];
    var commanlngPrefix = ""
    for (var j = 0; j < itemToChk.length; j++) {
        var isFoundInAll = true;
        for (var i = 0; i < itemToChk.length; i++) {
            ;
            // console.log(itemToChk.slice(i, i + j + 1)); 
            var strextract = itemToChk.slice(i, i + j + 1);
            for (var k = 0; k < arr.length; k++) {
                if (arr[k].includes(strextract) === false) {
                    isFoundInAll = false;
                    break;
                }
                // console.log(arr[k].includes(strextract))
            }
            if (isFoundInAll && commanlngPrefix.length < strextract.length) {
                commanlngPrefix = strextract;
            }
        }
    }
    console.log(commanlngPrefix);
}

findLngPrefix(["flower", "flow", "flight"]);
findLngPrefix(["java", "javacode", "javascript"]);
findLngPrefix(["akbar", "akram", "ali"]);
findLngPrefix(["mangoes", "man", "manchester"]);
findLngPrefix(["dog", "racecar", "car"]);












var str = "my name is osama anwar "

str = str.replace("osama","Usama");
console.log(str);
