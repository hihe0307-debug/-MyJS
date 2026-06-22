// Ẩn / hiện nội dung

const btnToggle = document.getElementById("btnToggle");

const content = document.getElementById("content");


btnToggle.addEventListener("click", function(){

  content.classList.toggle("hidden");

});




// Kiểm tra form

const contactForm = document.getElementById("contactForm");

const nameInput = document.getElementById("name");

const emailInput = document.getElementById("email");

const message = document.getElementById("message");



contactForm.addEventListener("submit", function(event){


  // chặn load lại trang

  event.preventDefault();



  const name = nameInput.value.trim();

  const email = emailInput.value.trim();



  if(name === "" || email === ""){


    message.textContent = 
    "Vui lòng nhập đầy đủ thông tin";


    message.style.color = "red";


  } else {


    message.textContent = 
    "Gửi thành công. Xin chào " + name;


    message.style.color = "green";


  }


});
