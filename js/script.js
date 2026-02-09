const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const button = document.getElementById("sender");
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
button.addEventListener("click", function () {
  let valid = true;
  nameError.textContent = "";
  emailError.textContent = "";
  if (nameInput.value.trim().length < 3) {
    nameError.textContent = "Введите имя больше трех символов";
    valid = false;
  }
  if (!emailInput.value.includes("@")) {
    emailError.textContent = "Некорректно ввели электронную почту";
    valid = false;
  }
  if (valid) {
    window.location.href = "./pages/aboutus.html";
  }
});
