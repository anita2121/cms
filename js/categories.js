// ===============================
// DAILY DELISH - CATEGORIES
// ===============================

const categories = [

{
    icon:"🥞",
    name:"Breakfast",
    total:120
},

{
    icon:"🍝",
    name:"Lunch",
    total:95
},

{
    icon:"🍜",
    name:"Dinner",
    total:110
},

{
    icon:"🍰",
    name:"Dessert",
    total:80
},

{
    icon:"🥗",
    name:"Healthy",
    total:65
},

{
    icon:"☕",
    name:"Drinks",
    total:50
}

];

const list = document.getElementById("categoryList");

function render(){

    list.innerHTML = "";

    categories.forEach(category=>{

        list.innerHTML += `

        <div class="category-card"
        onclick="goCategory('${category.name}')">

            <div style="font-size:60px">

                ${category.icon}

            </div>

            <h3>

                ${category.name}

            </h3>

            <p>

                ${category.total} Recipes

            </p>

        </div>

        `;

    });

}

function goCategory(category){

    window.location.href = `recipes.html?category=${encodeURIComponent(category)}`;

}

render();
