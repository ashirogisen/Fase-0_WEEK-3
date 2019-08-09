function palindrome(kata) {
    // you can only write your code here!
    var x = false;
    var a = '';

    for(var i = kata.length-1; i>=0; i--){
        a = a + kata[i];
    }
    
    if (kata === a) {
        x = true;
    } else {
        x = false;
    }

    return x;
  }
  
  // TEST CASES
  console.log(palindrome('katak')); // true
  console.log(palindrome('blanket')); // false
  console.log(palindrome('civic')); // true
  console.log(palindrome('kasur rusak')); // true
  console.log(palindrome('mister')); // false