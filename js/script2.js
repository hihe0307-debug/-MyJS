const title = document.getElementById('title');

const btnChange = document.getElementById('btnChange');

const btnToggle = document.getElementById('btnToggle');

const desc = document.getElementById('desc');

const contactForm = document.getElementById('contactForm');

const fullName = document.getElementById('fullName');

const message = document.getElementById('message');



// Đổi nội dung DOM

btnChange.addEventListener('click', function(){

  title.textContent = 'Học DOM thật vui!';

  title.style.color = '#16a34a';

});



// Ẩn hiện nội dung

btnToggle.addEventListener('click', function(){

  desc.classList.toggle('hidden');

});



// Kiểm tra form

contactForm.addEventListener('submit', function(event){

  event.preventDefault();


  const value = fullName.value.trim();


  if(value === ''){

    message.textContent = 'Vui lòng nhập họ tên';

    message.style.color = '#ef4444';


  } else {


    message.textContent = 'Chào ' + value + '! Dữ liệu hợp lệ.';

    message.style.color = '#16a34a';

  }

});
