
const btn = document.querySelector(".btn");
const password = document.querySelector(".password");
const result = document.querySelector(".result");
const modal = document.querySelector(".modal-window");
const modalBackground = document.querySelector(".modal-b");
const close = document.querySelector(".close");

btn.addEventListener("click", function() {
  if (password.value === 'admin') {
    result.innerText = "Добро пожаловать!";
    modal.classList.add('show');
    modal.style.background = "  radial-gradient(ellipse at center, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%), radial-gradient(ellipse at 80% 5%, #4c00ff 0%, rgb(255 40 184 / 0%) 30%), radial-gradient(ellipse at bottom left, #ff006a 0%, rgb(98 190 255 / 31%) 60%), linear-gradient(135deg, rgba(18, 46, 119, 0) 0%, rgba(18, 46, 119, 0) 75%, #395eff 100%), linear-gradient(82deg, #dff7ff 0%, #74b5ff 27%, #88b8ff 74%, #82b3ff 100%)";
  } else {
    modal.classList.add('show');
    result.innerText = "Пароль неверный!";
    modal.style.background = "rgb(220, 70, 70)";
    modal.style.color = "#000";
    modalBackground.classList.add('show');
  }

  modalBackground.classList.add('show');
  modalBackground.onclick = function() {
    modalBackground.classList.remove('show');
    modal.classList.remove('show');
    console.log("click");
  }
  close.addEventListener('click', function() {
    modalBackground.classList.remove('show');
    modal.classList.remove('show');
  })
  
});





