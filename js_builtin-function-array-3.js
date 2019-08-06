var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];

var nama = input[01];

function dataHandling2(arr) {
    arr.splice(1, 2, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung");
    arr.splice(4, 1, "Pria", "SMA Internasional Metro");
    
    console.log(arr);
    console.log();

    var tgl_lahir = arr[3];
    var split_tgl_lahir = tgl_lahir.split("/");
    var split_bulan = split_tgl_lahir[1];
    
    switch(split_bulan){
        case '01':
            split_bulan = "Januari";
            break;
        case '02':
            split_bulan = "Februari";
            break;
        case '03':
            split_bulan = "Maret";
            break;
        case '04':
            split_bulan = "April";
            break;
        case '05':
            split_bulan = "Mei";
            break;
        case '06':
            split_bulan = "Juni";
            break;
        case '07':
            split_bulan = "Juli";
            break;
        case '08':
            split_bulan = "Agustus";
            break;
        case '09':
            split_bulan = "September";
            break;
        case '10':
            split_bulan = "Oktober";
            break;
        case '11':
            split_bulan = "November";
            break;
        case '12':
            split_bulan = "Desember";
            break;
        default:
            split_bulan = "error";
    }
    //Print Mei
    console.log(split_bulan); 
    console.log();
    
    //Print Descending
    var sort_split_tgl_lahir = split_tgl_lahir.sort(function(a, b){return b-a});;
    console.log(sort_split_tgl_lahir); 
    console.log();

    //Print Tanggal yang sudah di join pake '-'
    var split_tgl_lahir = tgl_lahir.split("/");
    console.log(split_tgl_lahir.join('-')); 
    console.log();

    //Print Nama yang dibatasi 15 karakter
    var irisan = arr.slice(1,2);
    var join_nama = (irisan.join(' '));
    if(join_nama.length > 15) {
        console.log(join_nama.substring(0, 15));
    }
    console.log();
}

// function desc(arr) {
//     for (var i = 0; i<arr.length; i++){
//         for (var j = i+1; j<arr.length; j++){
//             if(arr[i] < arr[j]) {
//             var temp = arr[i];
//             arr[i] = arr[j];
//             arr[j] = temp;
//             }
//         }
//         console.log(arr[i]);
//     }
// }

dataHandling2(input);







