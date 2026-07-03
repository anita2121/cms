// Ambil ID

const recipeId = Number(localStorage.getItem("detailRecipeId"));

const recipes = JSON.parse(localStorage.getItem("recipes")) || [];

const recipe = recipes.find(r => r.id === recipeId);

if(!recipe){

alert("Resep tidak ditemukan.");

location.href="index.html";

}

document.getElementById("detailImage").src = recipe.image;

document.getElementById("detailTitle").innerText = recipe.title;

document.getElementById("detailCategory").innerText = recipe.category;

document.getElementById("detailTime").innerHTML = "⏱ "+recipe.time;

document.getElementById("detailDescription").innerText = recipe.description;

document.getElementById("detailIngredients").innerText = recipe.ingredients;

document.getElementById("detailSteps").innerText = recipe.steps;
