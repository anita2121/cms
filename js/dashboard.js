// Cek Login

if(localStorage.getItem("login")!="true"){

    window.location.href="login.html";

}

// Dummy Data

const recipes=[

{
title:"Chicken Pasta",
category:"Dinner",
time:"30 Min",
image:"https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400"
},

{
title:"Healthy Salad",
category:"Healthy",
time:"15 Min",
image:"https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400"
},

{
title:"Chocolate Cake",
category:"Dessert",
time:"45 Min",
image:"https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400"
}

];

const table=document.getElementById("recipeTable");

recipes.forEach(recipe=>{

table.innerHTML+=`

<tr>

<td>

<img src="${recipe.image}">

</td>

<td>${recipe.title}</td>

<td>${recipe.category}</td>

<td>${recipe.time}</td>

<td>

<button class="edit">Edit</button>

<button class="delete">Delete</button>

</td>

</tr>

`;

});

// Logout

document.getElementById("logout").onclick=()=>{

localStorage.removeItem("login");

window.location.href="login.html";

}
