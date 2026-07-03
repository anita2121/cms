// ===============================
// DAILY DELISH - RECIPES
// ===============================

const recipes = [

{
    id:1,
    title:"Classic Pancake",
    category:"Breakfast",
    time:"20 Minutes",
    image:"assets/images/breakfast.jpg"
},

{
    id:2,
    title:"Creamy Pasta",
    category:"Lunch",
    time:"30 Minutes",
    image:"assets/images/lunch.jpg"
},

{
    id:3,
    title:"Chocolate Cake",
    category:"Dessert",
    time:"50 Minutes",
    image:"assets/images/dessert.jpg"
},

{
    id:4,
    title:"Fresh Salad",
    category:"Healthy",
    time:"15 Minutes",
    image:"assets/images/healthy.jpg"
},

{
    id:5,
    title:"Orange Juice",
    category:"Drinks",
    time:"10 Minutes",
    image:"assets/images/drinks.jpg"
},

{
    id:6,
    title:"Grilled Chicken",
    category:"Dinner",
    time:"40 Minutes",
    image:"assets/images/dinner.jpg"
}

];

// ===============================
// ELEMENT
// ===============================

const recipeList = document.getElementById("recipe-list");
const searchInput = document.getElementById("searchRecipe");
const filterButtons = document.querySelectorAll(".filter-category button");

// ===============================
// RENDER
// ===============================

function renderRecipes(data){

    recipeList.innerHTML = "";

    if(data.length === 0){

        recipeList.innerHTML = `
            <h2 style="text-align:center;width:100%;padding:50px;">
                No recipes found.
            </h2>
        `;

        return;
    }

    data.forEach(recipe=>{

        recipeList.innerHTML += `

        <div class="recipe-card">

            <img src="${recipe.image}" alt="${recipe.title}">

            <div class="recipe-content">

                <h3>${recipe.title}</h3>

                <p><strong>Category:</strong> ${recipe.category}</p>

                <p><strong>Time:</strong> ${recipe.time}</p>

                <a href="recipe-detail.html?id=${recipe.id}" class="primary">
                    View Recipe
                </a>

            </div>

        </div>

        `;

    });

}

// ===============================
// FILTER DARI URL
// ===============================

const params = new URLSearchParams(window.location.search);

const selectedCategory = params.get("category");

let currentRecipes = recipes;

if(selectedCategory){

    currentRecipes = recipes.filter(recipe =>
        recipe.category.toLowerCase() === selectedCategory.toLowerCase()
    );

}

renderRecipes(currentRecipes);

// ===============================
// SEARCH
// ===============================

if(searchInput){

    searchInput.addEventListener("keyup",function(){

        const keyword = this.value.toLowerCase();

        const result = currentRecipes.filter(recipe=>

            recipe.title.toLowerCase().includes(keyword)

        );

        renderRecipes(result);

    });

}

// ===============================
// BUTTON FILTER
// ===============================

filterButtons.forEach(button=>{

    button.addEventListener("click",function(){

        filterButtons.forEach(btn=>btn.classList.remove("active"));

        this.classList.add("active");

        const category = this.textContent.trim();

        if(category==="All"){

            currentRecipes = recipes;

        }else{

            currentRecipes = recipes.filter(recipe=>

                recipe.category===category

            );

        }

        if(searchInput){

            searchInput.value="";

        }

        renderRecipes(currentRecipes);

    });

});
