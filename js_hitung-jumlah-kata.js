function hitungJumlahKata(kalimat) {
    // you can only write your code here!
    var x = kalimat.length;
    var banyak_kata = 1;
    for(var i = 0; i < x; i++){
        if (kalimat[i] === ' ') {
            banyak_kata++
        }
    }
    return banyak_kata;
  }
  
  // TEST CASES
  console.log(hitungJumlahKata('I have a dream')); // 4
  console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
  console.log(hitungJumlahKata('A song to sing')); // 4
  console.log(hitungJumlahKata('I')); // 1
  console.log(hitungJumlahKata('I believe I can code')); // 5