// if

var hargaBelanja = 80000;

if(hargaBelanja > 1000){
    document.getElementById("if").innerHTML="kamu hebat";
} 

// if else =>jika ada suatu kondisi
var umurPengunjung = 17;

if(umurPengunjung>=18){
    document.getElementById("ifelse").innerHTML="Anda bisa naik";
}else{
    document.getElementById("ifelse").innerHTML="anda tidak bisa naik";
}

// if else if => jika ada dua kondisi
var maksimumBerat = 60;
if(maksimumBerat<=60){
    document.getElementById("ifelseif").innerHTML="anda bisa masuk";
}else if("maksimumBerat>=60"){
    document.getElementById("ifelseif").innerHTML="anda masih bisa masuk";
}else if("maksumumBerat=60"){
    document.getElementById("ifelseif").innerHTML="silahkan masuk";
}else{
    documen.getElementById("ifelseif").innerHTML="anda tidak bisa masuk"
}

// Swich Case => jika ada lebih dari dua kondisi
var tinggiPengunjung=prompt("masukkan tinggi badan anda");
var games;
switch (tinggiPengunjung){
    case tinggiPengunjung >= 150:
        games = "boleh masuk wahana ekstrim"
    document.getElementById("sc").innerHTML= games;
    break;

    case tinggiPengunjung = 140:
        games = "boleh masuk wahana sedikit ekstrim"
    document.getElementById("sc").innerHTML= games;
    break;

    case tinggiPengunjung <= 140:
        games = "boleh masuk tidak boleh masuk wahana ekstrim"
    document.getElementById("sc").innerHTML= games;
    break;

    default:
        games="terimaksih sudah mematuhi peraturan ";
        document.getElementById("sc").innerHTML=games;
        
}
// percabangan nested=>percabangan bersarang atau didalam percabangan ada lagi percabangan
 
var user={
    nama: "zahra",
    email: "zahra@gmail.com",
    password: "zahra",
    role: "admin"

};

function masuk (){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    console.log(email);
    if(user.email == email){
        if(user.password == password){
            if(user.role == "admin"){
                alert("anda berhasil masuk " + user.nama);
        
            }
        }else{
            alert("g bisa masuk weee");
        }
    }else{
        alert("bukan orangnya yaaa")
    }
}

// percabangan ternary => konsep lain dari if else, juga punya dua kondisi, benar atau salah
var tanya = prompt("apakah kamu perempuan?");

var jawaban = (tanya ()== "iya") ? "benar" : "salah";
document.getElementById("ternary").innerHTML = jawaban;

