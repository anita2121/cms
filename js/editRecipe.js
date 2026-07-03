// ===============================
// EDIT RECIPE
// ===============================

// Cek Login
if (localStorage.getItem("login") !== "true") {
    window.location.href = "login.html";
}

// Logout
const logoutBtn = document.getElementById("logout");

if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
        localStorage.removeItem("login");
        window.location.href = "login.html";
    });
}

// Ambil ID resep yang dipilih
const recipeId = Number(localStorage.getItem("editRecipeId"));

let recipes = JSON.parse(localStorage.getItem("recipes")) || [];

const recipe = recipes.find(item => item.id === recipeId);

if (!recipe) {
    alert("Resep tidak ditemukan.");
    window.location.href = "dashboard.html";
}

// Ambil Form
const form = document.getElementById("recipeForm");

// Isi Form
document.getElementById("title").value = recipe.title;
document.getElementById("category").value = recipe.category;
document.getElementById("time").value = recipe.time;
document.getElementById("image").value = recipe.image;
document.getElementById("description").value = recipe.description;
document.getElementById("ingredients").value = recipe.ingredients;
document.getElementById("steps").value = recipe.steps;

// Update Data
form.addEventListener("submit", function(e){

    e.preventDefault();

    recipe.title = document.getElementById("title").value;
    recipe.category = document.getElementById("category").value;
    recipe.time = document.getElementById("time").value;
    recipe.image = document.getElementById("image").value;
    recipe.description = document.getElementById("description").value;
    recipe.ingredients = document.getElementById("ingredients").value;
    recipe.steps = document.getElementById("steps").value;

    localStorage.setItem("recipes", JSON.stringify(recipes));

    localStorage.removeItem("editRecipeId");

    alert("Resep berhasil diperbarui!");

    window.location.href = "dashboard.html";

});
