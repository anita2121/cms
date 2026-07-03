const form = document.getElementById("loginForm");

form.addEventListener("submit", (e) => {

    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if(email === "admin@dailydelish.com" && password === "123456"){

        localStorage.setItem("login","true");

        window.location.href = "dashboard.html";

    }else{

        alert("Email atau password salah.");

    }

});
