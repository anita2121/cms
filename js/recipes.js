const recipes = [

{
id:1,
title:"Classic Pancake",
category:"Breakfast",
time:"20 Minutes",
image:"assets/images/pancake.jpg"
},

{
id:2,
title:"Creamy Pasta",
category:"Lunch",
time:"30 Minutes",
image:"assets/images/pasta.jpg"
},

{
id:3,
title:"Chocolate Cake",
category:"Dessert",
time:"50 Minutes",
image:"assets/images/cake.jpg"
}

];

const recipeList=document.getElementById("recipe-list");

function renderRecipes(data){

recipeList.innerHTML="";

data.forEach(recipe=>{

recipeList.innerHTML+=`

<div class="recipe-card">

<img src="${recipe.image}" alt="${recipe.title}">

<div class="recipe-content">

<h3>${recipe.title}</h3>

<p>${recipe.category}</p>

<p>${recipe.time}</p>

<a href="recipe-detail.html" class="primary">View Recipe</a>

</div>

</div>

`;

});

}

renderRecipes(recipes);
