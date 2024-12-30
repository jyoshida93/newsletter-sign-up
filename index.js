const emailField = document.getElementById("email-field");
const toolTip = document.getElementById("tool-tip");
const signUpPage = document.getElementById("sign-up-page");
const successPage = document.getElementById("success-page");
const submitButton = document.getElementById("submit-button");
const dismissButton = document.getElementById("dismiss-button");
const emailSpan = document.getElementById("email-insert");

submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    if (emailField.validity.valid) {
        emailField.classList.remove("form__input--invalid");
        toolTip.classList.remove("form__error-tool-tip--visible");
        togglePage(event);
        emailField.value = "";
    } else {
        console.log("error")
        emailField.classList.add("form__input--invalid");
        toolTip.classList.add("form__error-tool-tip--visible");
    }
})

dismissButton.addEventListener('click', (event) => {
    togglePage(event);
})

function togglePage(event) {
    event.preventDefault();
    updateEmail(emailField.value);
    signUpPage.classList.toggle("sign-up--flex");
    signUpPage.classList.toggle("sign-up--invisible");
    successPage.classList.toggle("success-page--invisible");
}

function updateEmail(email) {
    emailSpan.textContent = email;
}

