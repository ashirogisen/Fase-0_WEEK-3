function groupAnimals(animals) {
    // you can only write your code here!
    animals.sort()
    var answer = [];
    var x = 0;
    
    for (var i = 0; i < animals.length; i++) {
        if (answer.length === 0) {
            answer.push([animals[i]]);
            console.log(answer);
            console.log(answer[x]);
            console.log(answer[x][0][0]);
        } else {
            if (answer[x][0][0] === animals[i][0] && answer[x][0] !== animals[i]) {            
                answer[x].push(animals[i]); 
            } else {
                x++
                answer.push([animals[i]]);
            }
        }
    }
    return answer;

    // for (var i = 0; i < animals.length; i++) {
//     answer.push([animals[i]])
// }
// console.log(answer);

// for (var i = 0; i < animals.length; i++) {
//     for (var j = 0; j < answer.length; j++) {
//         if (animals[i][0] === answer[j][0][0] && animals[i] !== answer[j][0]) {
//             answer[j].push(animals[i])
//             animals[i] = ''
//         } 
//     }
// }

// console.log(answer);
    

//====
// 
// var arr_2 = ['cacing', 'ayam', 'anjing', 'babi', 'iwak'];

// for (var i = 0; i < arr.length; i++) {
//     arr_2.push([arr[i]]);
// }

// console.log(arr_2);
// console.log(arr_2[0][0]);

// for (var i = 0; i < arr.length; i++) {
//     if (arr_2[2][0][0] === arr[i][0] && arr_2[2][0] !== arr[i]) {
//         arr_2[2].push(arr[i]);
//     }
// }

// console.log(arr_2);

//====

// var answer = [];
// var answer2 = [];

// for (var i = 0; i < arr.length; i++) {
//     var countLoner = 0;
//     for (var j = 0; j < arr.length; j++) {        
//         if (arr[i][0] === arr[j][0] && arr[i] !== arr[j]) {        
//             answer.push(arr[i])
//         } else if (arr[i][0] === arr[j][0]){
//             countLoner++;
//             if(countLoner === 1) {
//                 answer2.push(arr[i])
//             }
//         }
//     }
// }

// arr = [];
// arr.push(answer);
// arr.push(answer2);

// console.log(answer);
// console.log(answer2);
// console.log(arr);

  }
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]