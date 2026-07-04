const API_URL = "https://cms-api-worker.xxx.workers.dev";

// ==============================
// ELEMENT
// ==============================

const recipeContainer = document.getElementById("recipe-list");

// ==============================
// FETCH FROM API
// ==============================

async function fetchRecipes() {

    try {

        const response = await fetch(${API_URL}/recipes);
        const data = await response.json();

        displayRecipes(data);

    } catch (error) {

        console.log("API error, fallback local data");

        loadLocalFallback();

    }
}

// ==============================
// FALLBACK (OPTIONAL)
// ==============================

function loadLocalFallback() {

    const localRecipes = JSON.parse(localStorage.getItem("recipes")) || [];

    displayRecipes(localRecipes);
}

// ==============================
// DISPLAY
// ==============================

function displayRecipes(data) {

    recipeContainer.innerHTML = "";

    data.forEach(recipe => {

        recipeContainer.innerHTML += `
        <div class="recipe-card">

            <div class="recipe-image">
                <img src="${recipe.image}" alt="${recipe.title}">
                <div class="favorite">🤍</div>
                <div class="category-badge">${recipe.category}</div>
            </div>

            <div class="recipe-content">

                <h3>${recipe.title}</h3>
                <p>${recipe.description}</p>

                <div class="recipe-info">
                    <span>⏱️ ${recipe.time}</span>
                    <span class="rating">⭐ ${recipe.rating || "5.0"}</span>
                </div>

                <div class="author">
                    <div class="author-left">
                        <img src="${recipe.avatar || "https://i.pravatar.cc/150"}">
                        <div>
                            <h4>${recipe.author || "Daily Delish User"}</h4>
                            <small>Recipe Creator</small>
                        </div>
                    </div>

                    <button class="primary" onclick="viewRecipe(${recipe.id})">
                        View
                    </button>

                </div>

            </div>
        </div>
        `;
    });
}

// ==============================
// VIEW DETAIL
// ==============================

function viewRecipe(id) {
    localStorage.setItem("detailRecipeId", id);
    window.location.href = "recipe-detail.html";
}

// ==============================
// FAVORITE
// ==============================

document.addEventListener("click", (e) => {
    if (e.target.classList.contains("favorite")) {
        e.target.innerHTML =
            e.target.innerHTML === "🤍" ? "❤️" : "🤍";
    }
});

// ==============================
// SEARCH
// ==============================

function searchRecipe(keyword) {

    const cards = document.querySelectorAll(".recipe-card");

    cards.forEach(card => {

        const title = card.querySelector("h3").innerText.toLowerCase();

        if (title.includes(keyword.toLowerCase())) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

// ==============================
// CATEGORY FILTER
// ==============================

const categoryCards = document.querySelectorAll(".category-card");

categoryCards.forEach(card => {

    card.addEventListener("click", () => {

        const category = card.querySelector("h3").innerText;

        const allCards = document.querySelectorAll(".recipe-card");

        allCards.forEach(cardEl => {

            const badge = cardEl.querySelector(".category-badge").innerText;

            cardEl.style.display =
                badge === category ? "block" : "none";
        });
    });
});

// ==============================
// SHOW ALL
// ==============================

function showAll() {
    fetchRecipes();
}

// ==============================
// INIT
// ==============================

fetchRecipes();

const newsletterForm = document.getElementById("newsletterForm");

if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const email = document.getElementById("newsletterEmail").value.trim();

        localStorage.setItem("registerEmail", email);

        location.href = "register.html";
    });
}
