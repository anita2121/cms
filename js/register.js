// ===============================
// DAILY DELISH REGISTER
// ===============================

const form = document.getElementById("registerForm");

form.addEventListener("submit", async function (e) {

    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    try {

        const response = await fetch("https://cms-api-worker.widyazef28.workers.dev/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,
                email,
                password
            })
        });

        const result = await response.json();

        if (result.success) {

            alert("Register berhasil!");

            window.location.href = "login.html";

        } else {

            alert(result.message);

        }

    } catch (error) {

        console.error(error);

        alert("Gagal terhubung ke server.");

    }

});
