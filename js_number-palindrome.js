function palindrome(kata) {
    // you can only write your code here!
    var x = '';
    var str_kata = kata.toString();
    console.log(kata);
    
    for(var i = str_kata.length-1; i >= 0; i--) {
        x = x + str_kata[i];
    }

    if (str_kata === x) {
        return true
    } else {
        return false
    }
}
   

function angkaPalindrome(num) {
    num = num+1;
    while(num > 0) {
        if (palindrome(num.toString()) === true) {
            return num
        }
        else {
            num = num + 1;
        }
    }
}

// TEST CASES
console.log(palindrome(121));
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001