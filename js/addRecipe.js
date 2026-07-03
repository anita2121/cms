// Login Check

if(localStorage.getItem("login")!="true"){

location.href="login.html";

}

// Logout

document.getElementById("logout").onclick=()=>{

localStorage.removeItem("login");

location.href="login.html";

};

// Submit

const form=document.getElementById("recipeForm");

form.addEventListener("submit",(e)=>{

e.preventDefault();

const recipe={

id:Date.now(),

title:title.value,

category:category.value,

time:time.value,

image:image.value,

description:description.value,

ingredients:ingredients.value,

steps:steps.value

};

const recipes=JSON.parse(localStorage.getItem("recipes"))||[];

recipes.push(recipe);

localStorage.setItem("recipes",JSON.stringify(recipes));

alert("Resep berhasil ditambahkan!");

location.href="dashboard.html";

});
