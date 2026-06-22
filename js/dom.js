const title = document.getElementById("title");
const btnChange = document.getElementById("btnChange");

btnChange.addEventListener("click", function(){

  // đổi title thành "Học DOM thật vui!"
  title.textContent = "Học DOM thật vui!";

  // đổi màu chữ
  title.style.color = "green";

  // đổi màu nền
  title.style.backgroundColor = "lightyellow";

});
