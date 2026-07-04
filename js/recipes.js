// ===============================
// DAILY DELISH - RECIPES
// ===============================

const API_URL = "https://cms-api-workerr.widyazef28.workers.dev";

// ===============================
// ELEMENT
// ===============================

const recipeList = document.getElementById("recipe-list");
const searchInput = document.getElementById("searchRecipe");
const filterButtons = document.querySelectorAll(".filter-category button");

let recipes = [];
let currentRecipes = [];

// ===============================
// LOAD RECIPES
// ===============================

async function loadRecipes() {

    try {

        const response = await fetch(`${API_URL}/recipes`);

        const result = await response.json();

        if (!result.success) {

            recipeList.innerHTML = `
                <h2 style="text-align:center;width:100%;padding:50px;">
                    Gagal mengambil data resep.
                </h2>
            `;

            return;

        }

        recipes = result.data;
        currentRecipes = [...recipes];

        filterFromURL();

        renderRecipes(currentRecipes);

    } catch (err) {

        console.error(err);

        recipeList.innerHTML = `
            <h2 style="text-align:center;width:100%;padding:50px;">
                Terjadi kesalahan.
            </h2>
        `;

    }

}

// ===============================
// RENDER
// ===============================

function renderRecipes(data) {

    recipeList.innerHTML = "";

    if (data.length === 0) {

        recipeList.innerHTML = `
            <h2 style="text-align:center;width:100%;padding:50px;">
                No recipes found.
            </h2>
        `;

        return;

    }

    data.forEach(recipe => {

        recipeList.innerHTML += `

        <div class="recipe-card">

            <img
                src="${recipe.image || 'assets/images/no-image.png'}"
                alt="${recipe.title}">

            <div class="recipe-content">

                <h3>${recipe.title}</h3>

                <p><strong>Category:</strong> ${recipe.category}</p>

                <p><strong>Time:</strong> ${recipe.time} Minutes</p>

                <button
                    class="primary"
                    onclick="viewRecipe(${recipe.id})">

                    View Recipe

                </button>

            </div>

        </div>

        `;

    });

}

// ===============================
// VIEW RECIPE
// ===============================

function viewRecipe(id) {

    localStorage.setItem("detailRecipeId", id);

    location.href = "recipe-detail.html";

}

// ===============================
// FILTER FROM URL
// ===============================

function filterFromURL() {

    const params = new URLSearchParams(window.location.search);

    const selectedCategory = params.get("category");

    if (!selectedCategory) return;

    currentRecipes = recipes.filter(recipe =>
        recipe.category.toLowerCase() ===
        selectedCategory.toLowerCase()
    );

    filterButtons.forEach(button => {

        if (
            button.dataset.category &&
            button.dataset.category.toLowerCase() ===
            selectedCategory.toLowerCase()
        ) {

            button.classList.add("active");

        } else {

            button.classList.remove("active");

        }

    });

}

// ===============================
// SEARCH
// ===============================

if (searchInput) {

    searchInput.addEventListener("keyup", function () {

        const keyword = this.value.toLowerCase();

        const result = currentRecipes.filter(recipe =>

            recipe.title.toLowerCase().includes(keyword)

        );

        renderRecipes(result);

    });

}

// ===============================
// FILTER BUTTON
// ===============================

filterButtons.forEach(button => {

    button.addEventListener("click", function () {

        filterButtons.forEach(btn =>
            btn.classList.remove("active")
        );

        this.classList.add("active");

        const category = this.dataset.category;

        if (category === "All") {

            currentRecipes = [...recipes];

        } else {

            currentRecipes = recipes.filter(recipe =>
                recipe.category === category
            );

        }

        if (searchInput) {

            searchInput.value = "";

        }

        renderRecipes(currentRecipes);

    });

});

// ===============================
// START
// ===============================

loadRecipes();
