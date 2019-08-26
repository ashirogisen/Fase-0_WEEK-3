function hitungJumlahKata(kalimat) {
    // you can only write your code here!
    var arr_kalimat = []
    var x = ''
    
    for (var i = 0; i < kalimat.length; i++) {
        if (kalimat[i] === ' ') {
            arr_kalimat.push(x)
            x = ''
        } else {
            x = x + kalimat[i]
        }
    }
    arr_kalimat.push(x)

    var arr_kalimat_freeSpace = []
    for (var i = 0; i< arr_kalimat.length; i++) {
        if (arr_kalimat[i] !== '') {
            arr_kalimat_freeSpace.push(arr_kalimat[i])
        }
    }

    // console.log(arr_kalimat_freeSpace);
    return arr_kalimat_freeSpace.length
    
  }
  
  // TEST CASES
  console.log(hitungJumlahKata('I have a dream')); // 4
//   console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
//   console.log(hitungJumlahKata('A song to sing')); // 4
//   console.log(hitungJumlahKata('I')); // 1
//   console.log(hitungJumlahKata('I believe I can code')); // 5