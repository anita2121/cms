// ===============================
// DAILY DELISH - EDIT RECIPE
// ===============================

// Login Check
if (localStorage.getItem("login") !== "true") {
    location.href = "login.html";
}

// Logout
document.getElementById("logout").addEventListener("click", () => {
    localStorage.removeItem("login");
    location.href = "login.html";
});

// Ambil ID resep yang akan diedit
const recipeId = Number(localStorage.getItem("editRecipeId"));

let recipes = JSON.parse(localStorage.getItem("recipes")) || [];

const recipe = recipes.find(item => item.id === recipeId);

if (!recipe) {
    alert("Resep tidak ditemukan!");
    location.href = "dashboard.html";
}

// Ambil elemen form
const form = document.getElementById("recipeForm");

// Isi data ke form
document.getElementById("title").value = recipe.title;
document.getElementById("category").value = recipe.category;
document.getElementById("time").value = recipe.time;
document.getElementById("description").value = recipe.description;
document.getElementById("ingredients").value = recipe.ingredients;
document.getElementById("steps").value = recipe.steps;

// Preview gambar
const preview = document.getElementById("preview");
const imageInput = document.getElementById("image");

let imageData = recipe.image;

// Tampilkan gambar lama
preview.src = recipe.image || "assets/images/no-image.png";

// Jika user memilih gambar baru
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

// Update resep
form.addEventListener("submit", function (e) {

    e.preventDefault();

    recipe.title = document.getElementById("title").value;

    recipe.category = document.getElementById("category").value;

    recipe.time = document.getElementById("time").value;

    recipe.image = imageData;

    recipe.description = document.getElementById("description").value;

    recipe.ingredients = document.getElementById("ingredients").value;

    recipe.steps = document.getElementById("steps").value;

    localStorage.setItem("recipes", JSON.stringify(recipes));

    localStorage.removeItem("editRecipeId");

    alert("Resep berhasil diperbarui!");

    location.href = "dashboard.html";

});
