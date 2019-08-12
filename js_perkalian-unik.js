
function perkalianUnik(arr) {
    // you can only write your code here!

    var arr_hasil = []
    
    for(var i = 0; i < arr.length; i++) {
        var arr_kali = [];
        for(var j = 0; j < arr.length; j++) {
            if (arr[i] !== arr[j]) {
                arr_kali.push(arr[j]);
            } else if (arr[i] === arr[j] && i !== j) {
                arr_kali.push(arr[j]);
            }
        }
        var nampung = 1;
        for(var k = 0; k < arr_kali.length; k++) {
            nampung = nampung*arr_kali[k]; 
        }

    arr_hasil.push(nampung);

    }    
    return arr_hasil;
}

  
//   // TEST CASES
  console.log(perkalianUnik([2, 4, 6])); // [24, 12, 8]
  console.log(perkalianUnik([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
  console.log(perkalianUnik([1, 4, 3, 2, 5])); // [120, 30, 40, 60, 24]
  console.log(perkalianUnik([1, 3, 3, 1])); // [9, 3, 3, 9]
  console.log(perkalianUnik([2, 1, 8, 10, 2])); // [160, 320, 40, 32, 160]