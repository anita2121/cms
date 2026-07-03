// ===============================
// DAILY DELISH DASHBOARD
// ===============================

// Cek Login
if (localStorage.getItem("login") !== "true") {
    window.location.href = "login.html";
}

// Logout
document.getElementById("logout").addEventListener("click", () => {
    localStorage.removeItem("login");
    window.location.href = "login.html";
});

// Ambil data resep
let recipes = JSON.parse(localStorage.getItem("recipes")) || [];

// Element
const table = document.getElementById("recipeTable");

// Render Table
function renderTable() {

    table.innerHTML = "";

    if (recipes.length === 0) {

        table.innerHTML = `
        <tr>
            <td colspan="5" style="text-align:center;padding:30px;">
                Belum ada resep.
            </td>
        </tr>
        `;

        return;
    }

    recipes.forEach((recipe, index) => {

        table.innerHTML += `
        <tr>

            <td>
                <img src="${recipe.image}" alt="">
            </td>

            <td>${recipe.title}</td>

            <td>${recipe.category}</td>

            <td>${recipe.time}</td>

            <td>

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

renderTable();

// ===============================
// DELETE
// ===============================

function deleteRecipe(id){

    if(!confirm("Hapus resep ini?")) return;

    recipes = recipes.filter(recipe => recipe.id !== id);

    localStorage.setItem("recipes", JSON.stringify(recipes));

    renderTable();

    updateStats();

}

// ===============================
// EDIT
// ===============================

function editRecipe(id){

    localStorage.setItem("editRecipeId", id);

    window.location.href = "edit-recipe.html";

}

// ===============================
// STATISTIK
// ===============================

function updateStats(){

    const cards = document.querySelectorAll(".stat-card h3");

    cards[0].innerText = recipes.length;

    cards[1].innerText = recipes.length;

    cards[2].innerText = 0;

}

updateStats();
