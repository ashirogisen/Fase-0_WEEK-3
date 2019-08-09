function pasanganTerbesar(num) {
    // you can only write your code here!
  var string_num = num.toString();
  var x = string_num.length;
  var arr_num = [];
  var max = 0;
  
  for(var i = 0; i < x-1; i++) {
    arr_num.push(Number(string_num[i] + string_num[i+1]));
    if (max < arr_num[i]) {
      max = arr_num[i];
    }
  }
  return max
}
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99