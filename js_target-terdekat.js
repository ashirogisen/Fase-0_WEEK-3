function targetTerdekat(arr) {
    // you can only write your code here!
    var arr_x = [];
    var arr_jarak = [];
    var index_o = 0;

    for(var i = 0; i < arr.length; i++) {
      if (arr[i] === 'o') {
        index_o = i;
      } else if (arr[i] === 'x') {
        arr_x.push(i);
      }
    }
    
    for(var i = 0; i < arr_x.length; i++) {
      var difference = arr_x[i] - index_o;
      arr_jarak.push(Math.abs(difference));
    }

    var min = arr_jarak[0];
    for(var i = 0; i < arr_jarak.length; i++) {
      if (min > arr_jarak[i]) {
        min = arr_jarak[i];
      }
    }

    if (arr_x.length > 0) {
      return min;
    }

    return 0;
}
  
  //TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2