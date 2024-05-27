let box = document.querySelector(".box");
let height = document.querySelector(".height");
let width = document.querySelector(".width");


height.addEventListener("blur" , (e) => {
     box.style.height = e.target.value;

})
width.addEventListener("blur" , (e) => {
     box.style.height = e.target.value;

})