/*let regForm = document.forms;
let button = document.getElementById("button");

const username = document.getElementById("name");
const mail = document.getElementById("email");
const age = document.getElementById("age");
const sex = document.querySelectorAll('input[name="sex"]');
const profession = document.getElementById("profession");
const password = document.getElementById("password");
const rePassword = document.getElementById("repassword");
const agree = document.forms.regFormm.elements.checkbox;*/

let errors = [];
function checkValidity(input) {
    let validity = input.validity;
    console.log(validity);
    if (validity.valueMissing) { errors.push('Поле ' + input.placeholder + ' не заполнено'); }
    if (validity.patternMismatch) { errors.push('Неверный формат заполнения'); }
    if (validity.rangeOverflow) { let max = getAttributeValue(input, 'max');
    errors.push('Максимальное значение поля не может быть больше чем ' + max);}
    //console.log(max);
    if (validity.rangeUnderflow) { let min = getAttributeValue(input, 'min');
    errors.push('Минимальное значение поля не может быть меньше чем ' + min);}
    //console.log(min);
};

function checkAll() {
    form.addEventListener('submit', function (evt) {
        evt.preventDefault();});
    errors = [];
    let inputs = document.querySelectorAll("input");
    for (let input of inputs) {
        checkValidity(input);
    }

    console.log(errors);
    document.getElementById('error').innerHTML = errors.join(', <br>');
};