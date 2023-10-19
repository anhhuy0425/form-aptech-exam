const userName = document.querySelector("#fullname");
const userEmail = document.querySelector("#email");
const userBirthDate = document.querySelector("#birthday");
const userAge = document.querySelector("#age");
const userCar = document.querySelector("#car");
const userForm = document.querySelector("form");
const userGender = ["Female","Male"];
let gender = document.getElementById("gender")
for (const item of userGender) {
    let option = document.createElement("option");
    option.value = item;
    option.text = item;
    gender.add(option);
}
function showError(input, message){
    let parent = input.parentElement;
    let span = parent.querySelector("span");
    parent.classList.add("error");
    parent.classList.add("tracking-in-contract");
    span.innerText = message;
}

function showSuccess(input){
    let parent = input.parentElement;
    let span = parent.querySelector("span");
    parent.classList.remove("error");
}

function checkEmptyError(listInput) {
    let isEmptyError = false; 
    listInput.forEach(input => {
        input.value = input.value.trim()
        if(!input.value){
            isEmptyError = true;
            showError(input,"Vui lòng nhập dữ liệu, không được để trống");
        }else{
            showError(input, "");
        }
    });
    return isEmptyError;
}

function checkEmailError(input) {
    const regexEmail = /^\S+@\S+\.\S+$/;
    input.value = input.value.trim();
    let isEmailError = !regexEmail.test(input.value);
    if(regexEmail.test(input.value)) {
        showError(input, "");
    }else {
        showError(input, "Email không đúng định dạng, lưu ý phải có (ex: .com, .vn, ...) đằng sau");
    }
    return isEmailError;
}

function checkLengthError(input, min, max) {
    input.value = input.value.trim();
    let inputLength = input.value.length;
    console.log(inputLength);
    if(inputLength < min) {
        showError(input,`Phải có ít nhất ${min} ký tự`);
    } else {
        showError(input,"");
    }
    if(inputLength > max) {
        showError(input,`Không được vượt ${max} ký tự`);
    }
    return false;
}

function checkAgeError(input) {
    input.value = input.value.trim();
    let inputAge = input.value;
    let age = isFinite(inputAge);
    console.log(age)
    if(!age || inputAge < 0) {
        showError(input,`Tuổi phải là số và lớn hơn 0`);
    }else {
        showError(input,"");
    }
    return false;
}

form.addEventListener("submit", function(e) {
    e.preventDefault();
    let isEmptyError = checkEmptyError([userName, userEmail, userBirthDate, userAge, userCar]);
    let isAgeError = checkAgeError(userAge);
    let isUserLengthError = checkLengthError(userName, 3, 50);
    let isNoteLengthError = checkLengthError(userCar, 10, 100);
    let isEmailError = checkEmailError(userEmail);
});
