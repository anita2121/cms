// ===============================
// DAILY DELISH DASHBOARD
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
// CURRENT USER
// ===============================
const currentUser = JSON.parse(localStorage.getItem("currentUser"));

// ===============================
// LOGOUT
// ===============================
document.getElementById("logout").addEventListener("click", (e) => {

    e.preventDefault();

    if (!confirm("Yakin ingin logout?")) return;

    localStorage.removeItem("login");
    localStorage.removeItem("currentUser");

    location.href = "login.html";

});

// ===============================
// DATA
// ===============================
let recipes = [];

const table = document.getElementById("recipeTable");

// ===============================
// LOAD RECIPES
// ===============================
async function loadRecipes() {

    try {

        const response = await fetch(
            `${API_URL}/recipes?user_id=${currentUser.id}`
        );

        const result = await response.json();

        if (result.success) {

            recipes = result.data;

            renderTable();

            updateStats();

        } else {

            alert(result.message);

        }

    } catch (err) {

        console.error(err);

        alert("Gagal mengambil data resep.");

    }

}

loadRecipes();

// ===============================
// RENDER TABLE
// ===============================
function renderTable(data = recipes) {

    table.innerHTML = "";

    if (data.length === 0) {

        table.innerHTML = `
        <tr>
            <td colspan="5" style="text-align:center;padding:30px;">
                Belum ada resep.
            </td>
        </tr>
        `;

        return;

    }

    data.forEach(recipe => {

        table.innerHTML += `
        <tr>

            <td>
                <img
                    src="${recipe.image || 'assets/images/no-image.png'}"
                    alt="${recipe.title}">
            </td>

            <td>
                <strong>${recipe.title}</strong>
            </td>

            <td>${recipe.category}</td>

            <td>${recipe.time}</td>

            <td>

                <button
                    class="primary"
                    onclick="viewRecipe(${recipe.id})">

                    View

                </button>

                <button
                    class="edit"
                    onclick="editRecipe(${recipe.id})">

                    Edit

                </button>

                <button
                    class="delete"
                    onclick="deleteRecipe(${recipe.id})">

                    Delete

                </button>

            </td>

        </tr>
        `;

    });

}

// ===============================
// VIEW
// ===============================
function viewRecipe(id) {

    localStorage.setItem("detailRecipeId", id);

    location.href = "recipe-detail.html";

}

// ===============================
// EDIT
// ===============================
function editRecipe(id) {

    localStorage.setItem("editRecipeId", id);

    location.href = "edit-recipe.html";

}

// ===============================
// DELETE
// ===============================
async function deleteRecipe(id) {

    if (!confirm("Yakin ingin menghapus resep ini?")) return;

    try {

        const response = await fetch(`${API_URL}/recipes/${id}`, {

            method: "DELETE"

        });

        const result = await response.json();

        if (result.success) {

            alert("Resep berhasil dihapus.");

            loadRecipes();

        } else {

            alert(result.message);

        }

    } catch (err) {

        console.error(err);

        alert("Gagal menghapus resep.");

    }

}

// ===============================
// SEARCH
// ===============================
function searchRecipe(keyword) {

    const result = recipes.filter(recipe =>

        recipe.title.toLowerCase().includes(keyword.toLowerCase())

    );

    renderTable(result);

}

// ===============================
// STATS
// ===============================
function updateStats() {

    const cards = document.querySelectorAll(".stat-card h3");

    if (cards.length < 3) return;

    cards[0].textContent = recipes.length;

    const categories = [...new Set(recipes.map(recipe => recipe.category))];

    cards[1].textContent = categories.length;

    let total = 0;

    recipes.forEach(recipe => {

        const number = parseInt(recipe.time);

        if (!isNaN(number)) {

            total += number;

        }

    });

    cards[2].textContent =
        recipes.length > 0
            ? Math.round(total / recipes.length) + " Min"
            : "0 Min";

}

// ===============================
// PROFILE
// ===============================
if (currentUser) {

    document.getElementById("welcomeText").innerHTML =
        `Welcome Back, ${currentUser.name} 👋`;

    document.getElementById("profileName").textContent =
        currentUser.name;

    if (currentUser.photo) {

        document.getElementById("profileAvatar").src =
            currentUser.photo;

    }

}

// ===============================
// PROFILE DROPDOWN
// ===============================
function toggleProfileMenu() {

    document
        .getElementById("profileDropdown")
        .classList.toggle("show");

}

window.addEventListener("click", function (e) {

    if (!e.target.closest(".profile-menu")) {

        document
            .getElementById("profileDropdown")
            .classList.remove("show");

    }

});

// ===============================
// MOBILE SIDEBAR
// ===============================

function toggleSidebar() {

    document.querySelector(".sidebar").classList.add("show");
    document.querySelector(".overlay").classList.add("show");

    if (window.innerWidth <= 768) {
        document.querySelector(".menu-btn").style.display = "none";
    }

}

function closeSidebar() {

    document.querySelector(".sidebar").classList.remove("show");
    document.querySelector(".overlay").classList.remove("show");

    if (window.innerWidth <= 768) {
        document.querySelector(".menu-btn").style.display = "flex";
    }

}

document.querySelectorAll(".sidebar li").forEach(item => {

    item.addEventListener("click", () => {

        if (window.innerWidth <= 768) {
            closeSidebar();
        }

    });

});
