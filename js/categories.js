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

const list=document.getElementById("categoryList");

function render(data){

list.innerHTML="";

data.forEach(category=>{

list.innerHTML+=`

<div class="category-card"
onclick="location.href='recipes.html?category=${category.name}'">

<div style="font-size:60px">${category.icon}</div>

<h3>${category.name}</h3>

<p>${category.total} Recipes</p>

</div>

`;

});

}

render(categories);

document
.getElementById("searchCategory")
.addEventListener("keyup",function(){

const keyword=this.value.toLowerCase();

const result=categories.filter(category=>

category.name.toLowerCase().includes(keyword)

);

render(result);

});
