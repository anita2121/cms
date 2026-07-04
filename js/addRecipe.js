// ===============================
// DAILY DELISH - ADD RECIPE
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
// LOGOUT
// ===============================

document.getElementById("logout").addEventListener("click", () => {

    localStorage.removeItem("login");

    location.href = "login.html";

});

// ===============================
// CURRENT USER
// ===============================

const currentUser = JSON.parse(localStorage.getItem("currentUser"));

if (!currentUser) {

    alert("Silakan login kembali!");

    location.href = "login.html";

}

// ===============================
// FORM
// ===============================

const form = document.getElementById("recipeForm");

// ===============================
// IMAGE
// ===============================

let imageData = "";

const imageInput = document.getElementById("image");

const preview = document.getElementById("preview");

imageInput.addEventListener("change", function () {

    const file = this.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = function (e) {

        imageData = e.target.result;

        preview.src = imageData;

    };

    reader.readAsDataURL(file);

});

// ===============================
// SUBMIT
// ===============================

form.addEventListener("submit", async function (e) {

    e.preventDefault();

    const recipe = {

        user_id: currentUser.id,

        title: document.getElementById("title").value.trim(),

        category: document.getElementById("category").value,

        time: document.getElementById("time").value.trim(),

        image: imageData,

        description: document.getElementById("description").value.trim(),

        ingredients: document.getElementById("ingredients").value.trim(),

        steps: document.getElementById("steps").value.trim()

    };

    try {

        const response = await fetch(`${API_URL}/recipes`, {

            method: "POST",

            headers: {

                "Content-Type": "application/json"

            },

            body: JSON.stringify(recipe)

        });

        const result = await response.json();

        if (result.success) {

            alert("Resep berhasil ditambahkan!");

            location.href = "dashboard.html";

        } else {

            alert(result.message);

        }

    } catch (err) {

        console.error(err);

        alert("Tidak dapat terhubung ke server");

    }

});
