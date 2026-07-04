// ===============================
// DAILY DELISH - RECIPE DETAIL
// ==============================

// Login Check
if (localStorage.getItem("login") !== "true") {
    location.href = "login.html";
}

// ===============================
// API
// ===============================

const API_URL = "https://cms-api-workerr.widyazef28.workers.dev";

// ===============================
// GET RECIPE ID
// ===============================

const recipeId = localStorage.getItem("detailRecipeId");

if (!recipeId) {

    alert("Resep tidak ditemukan.");

    location.href = "dashboard.html";

}

// ===============================
// LOAD RECIPE
// ===============================

async function loadRecipe() {

    try {

        const response = await fetch(`${API_URL}/recipes/${recipeId}`);

        const result = await response.json();

        if (!result.success) {

            alert(result.message);

            location.href = "dashboard.html";

            return;

        }

        const recipe = result.data;

        document.getElementById("detailImage").src =
            recipe.image || "assets/images/no-image.png";

        document.getElementById("detailTitle").innerText =
            recipe.title;

        document.getElementById("detailCategory").innerText =
            recipe.category;

        document.getElementById("detailTime").innerHTML =
            "⏱ " + recipe.time;

        document.getElementById("detailDescription").innerText =
            recipe.description;

        document.getElementById("detailIngredients").innerText =
            recipe.ingredients;

        document.getElementById("detailSteps").innerText =
            recipe.steps;

    } catch (err) {

        console.error(err);

        alert("Tidak dapat mengambil data resep.");

    }

}

loadRecipe();
