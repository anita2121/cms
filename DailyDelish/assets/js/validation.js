// ===============================
// DAILY DELISH
// validation.js
// ===============================

const recipeForm = document.getElementById("recipeForm");

if(recipeForm){

    recipeForm.addEventListener("submit", function(e){

        let title = document.getElementById("title").value.trim();
        let category = document.getElementById("category").value;
        let ingredient = document.getElementById("ingredient").value.trim();
        let step = document.getElementById("step").value.trim();

        if(title === ""){
            alert("Judul resep belum diisi!");
            e.preventDefault();
            return;
        }

        if(category === ""){
            alert("Pilih kategori!");
            e.preventDefault();
            return;
        }

        if(ingredient === ""){
            alert("Masukkan bahan-bahan!");
            e.preventDefault();
            return;
        }

        if(step === ""){
            alert("Masukkan langkah memasak!");
            e.preventDefault();
            return;
        }

    });

}
