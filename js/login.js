// ===============================
// DAILY DELISH LOGIN
// ===============================

const form = document.getElementById("loginForm");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const email = document.getElementById("email").value.trim();

    const password = document.getElementById("password").value;

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(u =>
        u.email === email &&
        u.password === password
    );

    if (!user) {

        alert("Email atau Password salah!");

        return;

    }

    localStorage.setItem("login", "true");

    localStorage.setItem("currentUser", JSON.stringify(user));

    alert("Login berhasil!");

    window.location.href = "dashboard.html";

});
