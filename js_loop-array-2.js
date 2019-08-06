var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]

function dataHandling(arr) {
    var x = '';
    var identity = ['Nomor ID:   ' , 'Nama Lengkap:   ', 'TTL:   ','Hobi:   '];
    var a = arr.length;
    var b = identity.length;

    for(var i = 0; i < a; i++){
        for(var j = 0; j < b; j++){
            if (j === 2) {
                arr[i][j] = arr[i][j] + ' ' + arr[i][j+1]
            }
            else if (j === 3) {
                arr[i][j] = arr[i][j+1]
            }
            x = arr[i][j];      
            if (arr[i][j] === arr[i][0] ) {
                console.log('Nomor ID: ' + x);  
            }
            else if (arr[i][j] === arr[i][1] ) {
                console.log('Nama Lengkap: ' + x);
            }  
            else if (arr[i][j] === arr[i][2] ) {
                console.log('TTL: ' + x);
            }  
            else if (arr[i][j] === arr[i][3] ) {
                console.log('Hobi: ' + x);
            }  
        }
        console.log();
    }
}

dataHandling(input);