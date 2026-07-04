// ===============================
// DAILY DELISH AUTH
// LOGIN
// ===============================

const form = document.getElementById("loginForm");

if (form) {

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

            location.href = "dashboard.html";

        } catch (err) {

            console.error(err);
            alert("Gagal login!");

        }

    });

}
// ===============================
// NAVBAR LOGIN / LOGOUT
// ===============================

document.addEventListener("DOMContentLoaded", () => {

    const isLogin = localStorage.getItem("login") === "true";

    const menu = document.querySelector(".menu");

    if (menu) {

        if (isLogin) {

            menu.innerHTML = `

                <a href="dashboard.html" class="login-btn">
                    Dashboard
                </a>

                <a href="#" id="logoutBtn" class="register-btn">
                    Logout
                </a>

            `;

        } else {

            menu.innerHTML = `

                <a href="login.html" class="login-btn">
                    Login
                </a>

                <a href="register.html" class="register-btn">
                    Register
                </a>

            `;

        }

    }

    // ===============================
    // FOOTER ACCOUNT
    // ===============================

    const accountSection = document.querySelector(".footer div:last-child");

    if (accountSection) {

        if (isLogin) {

            accountSection.innerHTML = `

                <h4>Account</h4>

                <a href="dashboard.html">
                    Dashboard
                </a>

                <a href="#" id="footerLogout">
                    Logout
                </a>

            `;

        } else {

            accountSection.innerHTML = `

                <h4>Account</h4>

                <a href="login.html">
                    Login
                </a>

                <a href="register.html">
                    Register
                </a>

            `;

        }

    }

});

// ===============================
// LOGOUT
// ===============================

document.addEventListener("click", function (e) {

    if (
        e.target.id === "logoutBtn" ||
        e.target.id === "footerLogout"
    ) {

        e.preventDefault();

        const confirmLogout = confirm("Yakin ingin logout?");

        if (!confirmLogout) return;

        localStorage.removeItem("login");
        localStorage.removeItem("currentUser");
        localStorage.removeItem("userId");
        localStorage.removeItem("userName");
        localStorage.removeItem("userEmail");
        localStorage.removeItem("editRecipeId");
        localStorage.removeItem("detailRecipeId");

        alert("Logout berhasil!");

        location.href = "index.html";

    }

});

// ===============================
// LOGIN STATUS
// ===============================

function isLogin() {
    return localStorage.getItem("login") === "true";
}

function getCurrentUser() {

    const user = localStorage.getItem("currentUser");

    return user ? JSON.parse(user) : null;

}
