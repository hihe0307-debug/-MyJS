
// CLICK
const btnClick = document.getElementById("btnClick");
const clickResult = document.getElementById("clickResult");

btnClick.addEventListener("click", function(){

  clickResult.textContent = "Bạn vừa bấm nút!";

});



// CHANGE
const colorSelect = document.getElementById("colorSelect");
const colorResult = document.getElementById("colorResult");

colorSelect.addEventListener("change", function(){

  colorResult.textContent = 
  "Bạn chọn màu: " + colorSelect.value;

});



// KEYUP
const nameInput = document.getElementById("nameInput");
const preview = document.getElementById("preview");

nameInput.addEventListener("keyup", function(){

  preview.textContent = 
  "Xin chào: " + nameInput.value;

});



// SUBMIT
const myForm = document.getElementById("myForm");
const formResult = document.getElementById("formResult");

myForm.addEventListener("submit", function(event){

  event.preventDefault();

  formResult.textContent = "Form đã được xử lý bằng JavaScript";

});
