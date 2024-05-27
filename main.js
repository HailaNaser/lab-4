let box = document.querySelector(".box");
let height = document.querySelector(".height");
let width = document.querySelector(".width");


height.addEventListener("blur" , (e) => {
     box.style.height = e.target.value;

})
width.addEventListener("blur" , (e) => {
     box.style.height = e.target.value;

})
document.querySelector(".sub").addEventListener("click" , ()=> {
     box.style.width = "30%";
     box.style.height = "40%";
}) 