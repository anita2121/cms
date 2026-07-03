// ===============================
// DAILY DELISH AUTH
// ===============================

const form = document.getElementById("loginForm");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const email = document.getElementById("email").value.trim();

    const password = document.getElementById("password").value;

    // Ambil semua user yang sudah register
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Cari user yang cocok
    const user = users.find(u =>
        u.email === email &&
        u.password === password
    );

    if (!user) {

        alert("Email atau password salah!");

        return;

    }

    // Simpan status login
    localStorage.setItem("login", "true");

    // Simpan user yang sedang login
    localStorage.setItem("currentUser", JSON.stringify(user));

    alert("Login berhasil!");

    window.location.href = "dashboard.html";

});
