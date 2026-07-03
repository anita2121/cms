const form = document.getElementById("registerForm");

form.addEventListener("submit",(e)=>{

e.preventDefault();

const users = JSON.parse(localStorage.getItem("users")) || [];

const user = {

id:Date.now(),

name:name.value,

email:email.value,

password:password.value

};

const exist = users.find(u=>u.email===user.email);

if(exist){

alert("Email sudah digunakan!");

return;

}

users.push(user);

localStorage.setItem("users",JSON.stringify(users));

alert("Register berhasil.");

location.href="login.html";

});
