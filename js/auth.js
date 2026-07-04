// ===============================
// DAILY DELISH LOGIN
// ==============================

const form = document.getElementById("loginForm");

form.addEventListener("submit", async function (e) {

    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    try {

        const response = await fetch("https://cms-api-workerr.widyazef28.workers.dev/login", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                email,
                password
            })

        });

        const result = await response.json();

        if (!result.success) {

            alert(result.message);

            return;

        }

        // Simpan status login
localStorage.setItem("login", "true");

// Simpan data user
localStorage.setItem("currentUser", JSON.stringify(result.user));
localStorage.setItem("userId", result.user.id);
localStorage.setItem("userName", result.user.name);
localStorage.setItem("userEmail", result.user.email);

        alert("Login berhasil!");

        window.location.href = "dashboard.html";

    } catch (err) {

    console.error(err);

    alert(err.message);

    
    }

});
