/* ===================================
   DAILY DELISH
   main.js
=================================== */

// ==============================
// DEFAULT DATA
// ==============================

const defaultRecipes = [

{
    id:1,
    title:"Creamy Chicken Pasta",
    category:"Dinner",
    time:"30 Min",
    rating:"4.9",
    author:"Amanda",
    image:"https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=900",
    avatar:"https://i.pravatar.cc/150?img=15",
    description:"Creamy pasta dengan ayam panggang dan saus spesial.",
    ingredients:"-",
    steps:"-"
},

{
    id:2,
    title:"Berry Pancake",
    category:"Breakfast",
    time:"20 Min",
    rating:"4.8",
    author:"Michael",
    image:"https://images.unsplash.com/photo-1525351484163-7529414344d8?w=900",
    avatar:"https://i.pravatar.cc/150?img=10",
    description:"Pancake lembut dengan topping strawberry.",
    ingredients:"-",
    steps:"-"
},

{
    id:3,
    title:"Healthy Salad",
    category:"Healthy",
    time:"15 Min",
    rating:"5.0",
    author:"Sarah",
    image:"https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=900",
    avatar:"https://i.pravatar.cc/150?img=5",
    description:"Salad sehat dengan sayuran segar.",
    ingredients:"-",
    steps:"-"
},

{
    id:4,
    title:"Chocolate Cake",
    category:"Dessert",
    time:"50 Min",
    rating:"4.7",
    author:"Kevin",
    image:"https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=900",
    avatar:"https://i.pravatar.cc/150?img=8",
    description:"Chocolate cake lembut favorit keluarga.",
    ingredients:"-",
    steps:"-"
}

];

// ==============================
// LOAD DATA
// ==============================

const localRecipes = JSON.parse(localStorage.getItem("recipes")) || [];

const recipes = [...defaultRecipes, ...localRecipes];

const recipeContainer = document.getElementById("recipe-list");

// ==============================
// DISPLAY
// ==============================

function displayRecipes(data){

    recipeContainer.innerHTML = "";

    data.forEach(recipe=>{

        recipeContainer.innerHTML += `

        <div class="recipe-card">

            <div class="recipe-image">

                <img src="${recipe.image}" alt="${recipe.title}">

                <div class="favorite">🤍</div>

                <div class="category-badge">

                    ${recipe.category}

                </div>

            </div>

            <div class="recipe-content">

                <h3>${recipe.title}</h3>

                <p>${recipe.description}</p>

                <div class="recipe-info">

                    <span>⏱ ${recipe.time}</span>

                    <span class="rating">

                        ⭐ ${recipe.rating || "5.0"}

                    </span>

                </div>

                <div class="author">

                    <div class="author-left">

                        <img src="${recipe.avatar || "https://i.pravatar.cc/150"}">

                        <div>

                            <h4>${recipe.author || "Daily Delish User"}</h4>

                            <small>Recipe Creator</small>

                        </div>

                    </div>

                    <button
                        class="primary"
                        onclick="viewRecipe(${recipe.id})">

                        View

                    </button>

                </div>

            </div>

        </div>

        `;

    });

}

displayRecipes(recipes);

// ==============================
// VIEW DETAIL
// ==============================

function viewRecipe(id){

    localStorage.setItem("detailRecipeId", id);

    window.location.href = "recipe-detail.html";

}

// ==============================
// FAVORITE
// ==============================

document.addEventListener("click",(e)=>{

    if(e.target.classList.contains("favorite")){

        e.target.innerHTML =
            e.target.innerHTML === "🤍"
            ? "❤️"
            : "🤍";

    }

});

// ==============================
// SEARCH
// ==============================

function searchRecipe(keyword){

    const result = recipes.filter(recipe=>{

        return recipe.title
            .toLowerCase()
            .includes(keyword.toLowerCase());

    });

    displayRecipes(result);

}

// ==============================
// CATEGORY
// ==============================

const categoryCards = document.querySelectorAll(".category-card");

categoryCards.forEach(card=>{

    card.addEventListener("click",()=>{

        const category = card.querySelector("h3").innerText;

        const result = recipes.filter(recipe=>{

            return recipe.category === category;

        });

        displayRecipes(result);

    });

});

// ==============================
// SHOW ALL
// ==============================

function showAll(){

    displayRecipes(recipes);

}

// ==============================
// HEADER EFFECT
// ==============================

window.addEventListener("scroll",()=>{

    const header=document.querySelector("header");

    if(window.scrollY>40){

        header.style.background="#fff";

        header.style.boxShadow="0 8px 25px rgba(0,0,0,.08)";

    }

    else{

        header.style.background="#fff";

        header.style.boxShadow="none";

    }

});
