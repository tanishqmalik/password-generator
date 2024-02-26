// function generatepass(){
//     var length=12;
//     var chars="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+"
//     var password=""

//     for(i=0; i<length; i++){
//         var randomindex= Math.floor(Math.random * chars.length)
//         password=password+chars[randomindex]
//     }

//     document.getElementById("password").value = password
// }


// var length=12;
// var password=""


// for(i=0; i<length; i++){
//     let randomindex= Math.floor(Math.random() * mystring.length)
//     password=password+mystring.charAt(randomindex)
// }
// // console.log(mystring.charAt(randomindex))
// console.log(password)

function generatepass(){
    let mystring =  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+"
    var length=15
    var password=""

    for(i=0; i<length; i++){
        var randomindex= Math.floor(Math.random() * mystring.length)
        password=password+mystring.charAt(randomindex)
    }

    document.getElementById("password").value = password
}

// let mystring =  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+"
// var randomindex= Math.floor(Math.random()*mystring.length)
// console.log(randomindex)