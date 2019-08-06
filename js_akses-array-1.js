//input "hello world!"
//output "!dlrow olleh"

function balikString(arr) {
    var x = '';
    for(var i = arr.length-1; i >= 0; i--) {
        x = x + arr[i];
    }
    return x;
}

console.log(balikString('Hello World!'));
