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

function angkaPalindrome(num) {
    while(num > 0) {
        num = num + 1;
        if (palindrome(num.toString()) === true) {
            return num
        }
        else {
            num = num + 1;
        }
    }
}



// TEST CASES
console.log(angkaPalindrome(8)); // 9
// console.log(angkaPalindrome(10)); // 11
// console.log(angkaPalindrome(117)); // 121
// console.log(angkaPalindrome(175)); // 181
// console.log(angkaPalindrome(1000)); // 1001