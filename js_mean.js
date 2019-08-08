function cariMean(arr) {
    // you can only write your code here!
    var x = arr.length;
    var jumlah = 0;
    
    for(i = 0; i < x; i++) {
        jumlah = jumlah + arr[i];
    }
    var mean = jumlah / x;
    meanx = Math.ceil(mean);

    return meanx
  }
  
  // TEST CASES
  console.log(cariMean([1, 2, 3, 4, 5])); // 3
  console.log(cariMean([3, 5, 7, 5, 3])); // 5
  console.log(cariMean([6, 5, 4, 7, 3])); // 5
  console.log(cariMean([1, 3, 3])); // 2
  console.log(cariMean([7, 7, 7, 7, 7])); // 7