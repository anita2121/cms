// ===============================
// DAILY DELISH
// upload.js
// ===============================

const imageInput = document.getElementById("recipeImage");
const preview = document.getElementById("previewImage");

if(imageInput){

    imageInput.addEventListener("change", function(){

        const file = this.files[0];

        if(file){

            const reader = new FileReader();

            reader.onload = function(e){

                preview.src = e.target.result;
                preview.style.display = "block";

            }

            reader.readAsDataURL(file);

        }

    });

}
