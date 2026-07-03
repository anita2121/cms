// ===============================
// DAILY DELISH
// search.js
// ===============================

const search = document.getElementById("searchRecipe");

if(search){

    search.addEventListener("keyup", function(){

        let keyword = this.value.toLowerCase();

        let cards = document.querySelectorAll(".recipe-card");

        cards.forEach(card=>{

            let title = card.querySelector("h3").textContent.toLowerCase();

            if(title.includes(keyword)){
                card.style.display="block";
            }else{
                card.style.display="none";
            }

        });

    });

}
