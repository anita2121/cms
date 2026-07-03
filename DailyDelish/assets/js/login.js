// ===============================
// DAILY DELISH
// login.js
// ===============================

// Show Password
function togglePassword(){

    const password = document.getElementById("password");

    if(password.type === "password"){
        password.type = "text";
    }else{
        password.type = "password";
    }

}

// Validasi Login
const loginForm = document.getElementById("loginForm");

if(loginForm){

    loginForm.addEventListener("submit", function(e){

        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();

        if(username === "" || password === ""){

            e.preventDefault();
            alert("Username dan Password wajib diisi!");

        }

    });

}
