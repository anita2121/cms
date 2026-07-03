// ===============================
// DAILY DELISH - ADD RECIPE
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

// Form
const form = document.getElementById("recipeForm");

// Upload Image
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

// Submit Form
form.addEventListener("submit", (e) => {

    e.preventDefault();

    const recipe = {

        id: Date.now(),

        title: document.getElementById("title").value,

        category: document.getElementById("category").value,

        time: document.getElementById("time").value,

        image: imageData,

        description: document.getElementById("description").value,

        ingredients: document.getElementById("ingredients").value,

        steps: document.getElementById("steps").value

    };

    const recipes = JSON.parse(localStorage.getItem("recipes")) || [];

    recipes.push(recipe);

    localStorage.setItem("recipes", JSON.stringify(recipes));

    alert("Resep berhasil ditambahkan!");

    location.href = "dashboard.html";

});
