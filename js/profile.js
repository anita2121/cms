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
