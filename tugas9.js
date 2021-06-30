function tampilkanObjek(Objek){
    Objek.nama = "Romual";
    Objek.umur = 21;

    for(let item in Objek){
        console.log(Objek[item]);
    }
}

var Peserta = {
    nama : "Romual Naibaho",
    umur : "20 Tahun",
    status : "Mahasiswa Aktif",
    skills : ['html','css', 'javascript', 'php']
}

tampilkanObjek(Peserta);