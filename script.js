let button = document.getElementById("button");
//Задаем переменные
const username = document.getElementById("name");
let userError = document.getElementById("name-error");
const mail = document.getElementById("email");
let mailError = document.getElementById("emailerror");
const age = document.getElementById("age");
let mailAge = document.getElementById("age-error");
const sex = document.querySelectorAll('input[name="sex"]');
const profession = document.getElementById("profession");
const password = document.getElementById("password");
let passwordError = document.getElementById("password-error");
const rePassword = document.getElementById("repassword");
let repasswordError = document.getElementById("repassword-error");
const agree = document.getElementById("agree");
let agreeError = document.getElementById("agree-error");
//Функция валидации
username.addEventListener("input", function () {
    if (username.validity.patternMismatch ){
        userError.textContent = "Неверный формат заполнения имени";
        username.classList.add('error');
    } else{
        userError.textContent = "";
        username.classList.remove('error');
    }
});
mail.addEventListener("input", function () {
    if (mail.validity.typeMismatch){
        mailError.textContent = "Неверный формат заполнения e-mail";
        mail.classList.add('error');
    } else{
        mailError.textContent = "";
        mail.classList.remove('error');
    }
});
age.addEventListener("input", function () {
    if (age.validity.rangeOverflow){
        mailAge.textContent = "Значение превосходит допустимый возраст";
        age.classList.add('error');
    } else{
        mailAge.textContent = "";
        age.classList.remove('error');
    }
});
age.addEventListener("input", function () {
    if (age.validity.rangeUnderflow){
        mailAge.textContent = "Значение меньше допустимого возраста";
        age.classList.add('error');
    } else{
        age.classList.remove('error');
    }
});
password.addEventListener("input", function () {
    if (password.validity.patternMismatch ){
        passwordError.textContent = "Пароль должен быть не менее 8 символов длиной и содержать как минимум одну заглавную букву, одну строчную букву, одну цифру и хотя бы один специальный символ из набора !@#$%^&*()";
        password.classList.add('error');
    } else{
        passwordError.textContent = "";
        password.classList.remove('error');
    }
});
rePassword.addEventListener("input", function () {
    if (password.value === rePassword.value ){
        repasswordError.textContent = "";
        rePassword.classList.remove('error');
    } else{
        repasswordError.textContent = "Нет совпадения с паролем. Проверьте правильность написания";
        rePassword.classList.add('error');
    }
});
function checkAll() {
    form.addEventListener('submit', function (evt) {
        evt.preventDefault();});
    agreement =  document.getElementById("agreement");
    if (agree.checked){
        agreeError.textContent = "";
        agreement.classList.remove('error');
    } else {
        agreeError.textContent = "Необходимо согласие";
        agreement.classList.add('error');
    }
};