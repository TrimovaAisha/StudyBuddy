document.addEventListener('DOMContentLoaded', () => {
    function validateNameEmail(nameInput, emailInput, nameError, emailError) {
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
        return valid;
    }
    function toggleTheme() {
        document.body.classList.toggle('dark-theme');
    }
    function filterCourses(category, courses) {
        for (let i = 0; i < courses.length; i++) {
            if (category === "all" || courses[i].classList.contains(category)) {
                courses[i].style.display = "block";
            } else {
                courses[i].style.display = "none";
            }
        }
    }
    const buttonMain = document.getElementById("sender");
    const nameInputMain = document.getElementById("name");
    const emailInputMain = document.getElementById("email");
    const nameErrorMain = document.getElementById("nameError");
    const emailErrorMain = document.getElementById("emailError");
    if (buttonMain && nameInputMain && emailInputMain && nameErrorMain && emailErrorMain) {
        buttonMain.addEventListener("click", () => {
            if (validateNameEmail(
                nameInputMain,
                emailInputMain,
                nameErrorMain,
                emailErrorMain
            )) {
                window.location.href = "./pages/aboutus.html";
            }
        });
    }
    const themeBtn = document.getElementById('color');
    if (themeBtn) {
        themeBtn.addEventListener('click', toggleTheme);
    }
    const btnFooter = document.getElementById('btnFooter');
    const descFooter = document.getElementById('desc');
    const nameInputFooter = document.getElementById('nameFooter');
    const emailInputFooter = document.getElementById('emailFooter');
    const nameErrorFooter = document.getElementById('nameError');
    const emailErrorFooter = document.getElementById('emailError');
    if (btnFooter && descFooter && nameInputFooter && emailInputFooter && nameErrorFooter && emailErrorFooter) {
        btnFooter.addEventListener('click', () => {
            if (!validateNameEmail(
                nameInputFooter,
                emailInputFooter,
                nameErrorFooter,
                emailErrorFooter
            )) return;
            descFooter.textContent = 'Вы отправили заявку!';
            nameInputFooter.value = '';
            emailInputFooter.value = '';
        });
    }
    const btnAll = document.getElementById("btnAll");
    const btnProg = document.getElementById("btnProg");
    const btnDesign = document.getElementById("btnDesign");
    const courses = document.querySelectorAll(".course-card");
    if (btnAll && btnProg && btnDesign && courses.length > 0) {
        btnAll.addEventListener("click", () => filterCourses("all", courses));
        btnProg.addEventListener("click", () => filterCourses("programming", courses));
        btnDesign.addEventListener("click", () => filterCourses("design", courses));
    }
    const buyButtons = document.querySelectorAll(".buy-btn");
    const resultText = document.getElementById("resultText");
    if (buyButtons.length > 0 && resultText) {
        for (let i = 0; i < buyButtons.length; i++) {
            buyButtons[i].addEventListener("click", () => {
                resultText.textContent = "Вы успешно записались на курс!";
            });
        }
    }
    const sendReviewBtn = document.getElementById("sendReview");
    const reviewResult = document.getElementById("reviewResult");
    if (sendReviewBtn && reviewResult) {
        sendReviewBtn.addEventListener("click", () => {
            const radios = document.querySelectorAll('input[name="like"]');
            const checkboxes = document.querySelectorAll(".course-check");
            let liked = "";
            let selectedCourses = [];
            for (let i = 0; i < radios.length; i++) {
                if (radios[i].checked) {
                    liked = radios[i].value;
                }
            }
            for (let i = 0; i < checkboxes.length; i++) {
                if (checkboxes[i].checked) {
                    selectedCourses.push(checkboxes[i].value);
                }
            }
            if (liked === "") {
                reviewResult.textContent = "Пожалуйста, выберите вариант ответа.";
                return;
            }
            reviewResult.textContent =
                "Спасибо за отзыв! Вы выбрали: " +
                (liked === "yes" ? "Да" : "Нет") +
                ". Курсы: " +
                (selectedCourses.length > 0 ? selectedCourses.join(", ") : "не выбраны");
        });
    }
});
