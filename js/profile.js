// ===============================
// DAILY DELISH PROFILE
// ===============================

// ===============================
// LOGIN CHECK
// ===============================
if (localStorage.getItem("login") !== "true") {
    location.href = "login.html";
}

// ===============================
// API
// ===============================
const API_URL = "https://cms-api-workerr.widyazef28.workers.dev";

// ===============================
// USER
// ===============================
const currentUser = JSON.parse(
    localStorage.getItem("currentUser")
);

if (!currentUser) {

    alert("User tidak ditemukan.");

    location.href = "login.html";

}

// ===============================
// ELEMENT
// ===============================
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmInput = document.getElementById("confirmPassword");

const photoInput = document.getElementById("photo");
const previewPhoto = document.getElementById("previewPhoto");

const saveBtn = document.getElementById("saveProfile");
const deleteBtn = document.getElementById("deleteAccount");

// ===============================
// LOAD DATA
// ===============================
nameInput.value = currentUser.name || "";
emailInput.value = currentUser.email || "";

if (currentUser.photo) {

    previewPhoto.src = currentUser.photo;

}
// ===============================
// PHOTO PREVIEW
// ===============================
let photoBase64 = currentUser.photo || "";

photoInput.addEventListener("change", function () {

    const file = this.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = function (e) {

        photoBase64 = e.target.result;

        previewPhoto.src = photoBase64;

    };

    reader.readAsDataURL(file);

});

// ===============================
// SAVE PROFILE
// ===============================
saveBtn.addEventListener("click", async function () {

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value;
    const confirm = confirmInput.value;

    if (!name || !email) {

        alert("Nama dan email wajib diisi.");

        return;

    }

    if (password !== confirm) {

        alert("Konfirmasi password tidak cocok.");

        return;

    }

    try {

        const response = await fetch(`${API_URL}/profile`, {

            method: "PUT",

            headers: {

                "Content-Type": "application/json"

            },

            body: JSON.stringify({

                id: currentUser.id,
                name,
                email,
                password,
                photo: photoBase64

            })

        });

        const result = await response.json();

        if (!result.success) {

            alert(result.message);

            return;

        }

        currentUser.name = name;
        currentUser.email = email;
        currentUser.photo = photoBase64;

        localStorage.setItem(
            "currentUser",
            JSON.stringify(currentUser)
        );

        alert("Profil berhasil diperbarui.");

    } catch (err) {

        console.error(err);

        alert("Gagal memperbarui profil.");

    }

});

// ===============================
// DELETE ACCOUNT
// ===============================
deleteBtn.addEventListener("click", async function () {

    if (!confirm("Yakin ingin menghapus akun?")) return;

    try {

        const response = await fetch(`${API_URL}/users/${currentUser.id}`, {

            method: "DELETE"

        });

        const result = await response.json();

        if (!result.success) {

            alert(result.message);

            return;

        }

        localStorage.removeItem("login");
        localStorage.removeItem("currentUser");

        alert("Akun berhasil dihapus.");

        location.href = "register.html";

    } catch (err) {

        console.error(err);

        alert("Gagal menghapus akun.");

    }

});
