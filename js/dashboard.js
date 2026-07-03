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
// LOGOUT
// ===============================

document.getElementById("logout").addEventListener("click", () => {

    localStorage.removeItem("login");

    location.href = "login.html";

});

// ===============================
// DATA
// ===============================

let recipes = JSON.parse(localStorage.getItem("recipes")) || [];

const table = document.getElementById("recipeTable");

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

renderTable();

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

function deleteRecipe(id){

    if(!confirm("Yakin ingin menghapus resep ini?")) return;

    recipes = recipes.filter(recipe => recipe.id !== id);

    localStorage.setItem("recipes", JSON.stringify(recipes));

    renderTable();

    updateStats();

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

updateStats();
