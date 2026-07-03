// ===============================
// DAILY DELISH
// main.js
// ===============================

const recipeList = document.getElementById("recipe-list");

// API nanti
const API_URL = "http://localhost:8787/api/recipes";

// Dummy Data
const recipes = [
{
id:1,
title:"Creamy Chicken Pasta",
category:"Dinner",
time:"30 Menit",
image:"https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=700",
description:"Pasta creamy dengan ayam panggang dan saus spesial."
},
{
id:2,
title:"Pancake Berry",
category:"Breakfast",
time:"20 Menit",
image:"https://images.unsplash.com/photo-1525351484163-7529414344d8?w=700",
description:"Pancake lembut dengan topping buah berry segar."
},
{
id:3,
title:"Healthy Salad",
category:"Healthy",
time:"15 Menit",
image:"https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=700",
description:"Salad sayuran segar dengan dressing homemade."
},
{
id:4,
title:"Chocolate Cake",
category:"Dessert",
time:"45 Menit",
image:"https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=700",
description:"Chocolate cake lembut dengan topping coklat premium."
}
];

// Menampilkan Card
function renderRecipes(data){

recipeList.innerHTML="";

data.forEach(recipe=>{

recipeList.innerHTML += `

<div class="recipe-card">

<img src="${recipe.image}" alt="${recipe.title}">

<div class="recipe-content">

<h3>${recipe.title}</h3>

<p>${recipe.description}</p>

<div class="recipe-footer">

<span>${recipe.category}</span>

<strong>${recipe.time}</strong>

</div>

</div>

</div>

`;

});

}

renderRecipes(recipes);

// ===============================
// SEARCH (Nanti)
// ===============================

function searchRecipe(keyword){

const result = recipes.filter(recipe=>

recipe.title.toLowerCase().includes(keyword.toLowerCase())

);

renderRecipes(result);

}

// ===============================
// API CLOUDLFARE (Nanti)
// ===============================

async function loadRecipes(){

try{

const response = await fetch(API_URL);

if(!response.ok){

throw new Error("Gagal mengambil data.");

}

const data = await response.json();

renderRecipes(data);

}catch(error){

console.log(error);

}

}

// Nanti tinggal aktifkan
// loadRecipes();

// ===============================
// Navbar Shadow
// ===============================

window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

if(window.scrollY>20){

header.style.boxShadow="0 10px 25px rgba(0,0,0,.08)";

}else{

header.style.boxShadow="none";

}

});

// ===============================
// Smooth Animation
// ===============================

const cards=document.querySelectorAll(".recipe-card");

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-10px)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0px)";

});

});
