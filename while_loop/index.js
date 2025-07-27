let loggedIn = false;
let username;
let password;

do{
    username = window.prompt("masukkin username");
    password = window.prompt("masukkin password");

    if(username === "Miaw" || password === "Bjir"){
        loggedIn = true;
        console.log(`hai ${username}`)
    }else{
        console.log(`masih salah`)
    }
}while(!loggedIn)

