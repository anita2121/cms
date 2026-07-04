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

const API_URL = "https://cms-api-workerrr.widyazef28.workers.dev";

// ===============================
// LOGOUT
// ===============================

document.getElementById("logout").addEventListener("click", () => {

    localStorage.removeItem("login");

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

        const response = await fetch(`${API_URL}/recipes`);

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

        alert("Gagal mengambil data resep");

    }

}

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

            <td>
                ${recipe.category}
            </td>

            <td>
                ${recipe.time}
            </td>

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

function viewRecipe(id){

    localStorage.setItem("detailRecipeId", id);

    location.href = "recipe-detail.html";

}

// ===============================
// EDIT
// ===============================

function editRecipe(id){

    localStorage.setItem("editRecipeId", id);

    location.href = "edit-recipe.html";

}

// ===============================
// DELETE
// ===============================

async function deleteRecipe(id){

    if(!confirm("Yakin ingin menghapus resep ini?")) return;

    try {

        const response = await fetch(`${API_URL}/recipes/${id}`, {

            method: "DELETE"

        });

        const result = await response.json();

        if(result.success){

            alert("Resep berhasil dihapus");

            loadRecipes();

        }else{

            alert(result.message);

        }

    } catch(err){

        console.error(err);

        alert("Gagal menghapus resep");

    }

}

// ===============================
// SEARCH
// ===============================

function searchRecipe(keyword){

    const result = recipes.filter(recipe =>

        recipe.title.toLowerCase().includes(keyword.toLowerCase())

    );

    renderTable(result);

}

// ===============================
// STATS
// ===============================

function updateStats(){

    const cards = document.querySelectorAll(".stat-card h3");

    if(cards.length >= 3){

        cards[0].textContent = recipes.length;

        cards[1].textContent = recipes.length;

        cards[2].textContent = 0;

    }

}

// ===============================
// START
// ===============================

loadRecipes();
