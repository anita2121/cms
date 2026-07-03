// ===============================
// DAILY DELISH REGISTER
// ===============================

const form = document.getElementById("registerForm");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const password = document.getElementById("password").value;

    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Cek email sudah terdaftar
    const exist = users.find(user => user.email === email);

    if (exist) {

        alert("Email sudah digunakan!");

        return;

    }

    // Buat user baru
    const newUser = {

        id: Date.now(),

        name: name,

        email: email,

        password: password

    };

    users.push(newUser);

    localStorage.setItem("users", JSON.stringify(users));

    alert("Register berhasil!");

    window.location.href = "login.html";

});
