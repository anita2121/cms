// ===============================
// DAILY DELISH - EDIT RECIPE
// ==============================

// LOGIN CHECK
if (localStorage.getItem("login") !== "true") {
    location.href = "login.html";
}

// API
const API_URL = "https://cms-api-workerr.widyazef28.workers.dev";

// LOGOUT
document.getElementById("logout").addEventListener("click", () => {
    localStorage.removeItem("login");
    location.href = "login.html";
});

// GET RECIPE ID
const recipeId = localStorage.getItem("editRecipeId");

console.log("Recipe ID:", recipeId);

if (!recipeId) {
    alert("Resep tidak ditemukan!");
    location.href = "dashboard.html";
}

// ELEMENT
const form = document.getElementById("recipeForm");
const preview = document.getElementById("preview");
const imageInput = document.getElementById("image");

let imageData = "";

// LOAD RECIPE
async function loadRecipe() {

    try {

    const response = await fetch(`${API_URL}/recipes/${recipeId}`);

    const result = await response.json();

    console.log(result); // opsional, untuk melihat hasil di Console

            alert(result.message);

            location.href = "dashboard.html";

            return;

        }

        const recipe = result.data;

        document.getElementById("title").value = recipe.title;
        document.getElementById("category").value = recipe.category;
        document.getElementById("time").value = recipe.time;
        document.getElementById("description").value = recipe.description;
        document.getElementById("ingredients").value = recipe.ingredients;
        document.getElementById("steps").value = recipe.steps;

        imageData = recipe.image;

        preview.src = recipe.image || "assets/images/no-image.png";

    } catch (err) {

        console.error(err);

        alert("Gagal mengambil data resep");

    }

}
loadRecipe();

// CHANGE IMAGE
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

// UPDATE
form.addEventListener("submit", async function (e) {

    e.preventDefault();

    const data = {
        title: document.getElementById("title").value.trim(),
        category: document.getElementById("category").value,
        time: document.getElementById("time").value,
        image: imageData,
        description: document.getElementById("description").value.trim(),
        ingredients: document.getElementById("ingredients").value.trim(),
        steps: document.getElementById("steps").value.trim()
    };

    try {

        const response = await fetch(`${API_URL}/recipes/${recipeId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();

        if (result.success) {
            alert("Resep berhasil diperbarui!");
            localStorage.removeItem("editRecipeId");
            location.href = "dashboard.html";
        } else {
            alert(result.message);
        }

    } catch (err) {
        console.error(err);
        alert("Gagal memperbarui resep");
    }

});
