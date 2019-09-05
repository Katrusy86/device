var popup = document.querySelector(".modal-login");
var login = popup.querySelector("[name=login]");
var email = popup.querySelector("[name=email]");

var formIsInvalid = false;

function getErrorBlock(target) {
    return target;
}

function showError(elem, message) {
    const blockError = getErrorBlock(elem);

    formIsInvalid = true;

    blockError.classList.add("invalid");
}

function resetError(elem) {
    const blockError = getErrorBlock(elem);

    blockError.classList.remove("invalid");
}

function showModalError() {
    popup.classList.remove("modal-error");
    popup.classList.add("modal-error");
}

form.addEventListener("submit", function(evt) {
    var elements = form.elements;

    formIsInvalid = false;

    
    resetError(elements.name);
    if(!elements.name.value) {
        showError(elements.name, 'Значение не может быть пустым');
        showModalError();
    } else if(elements.name.value.length <= 3) {
        showError(elements.name, 'Длина не может быть менее 3 символов');
        showModalError();
    }

    resetError(elements.email);
    if(!elements.email.value) {
        showError(elements.email, 'Значение не может быть пустым');
        showModalError();
    } else if(elements.email.value.length <= 3) {
        showError(elements.email, 'Длина не может быть менее 3 символов');
        showModalError();
    } else if (!/^\S+@\S+\.\S+$/.test(elements.email.value)) {
        showError(elements.email, 'Не верный email');
        showModalError();
    }

    if (formIsInvalid) {
        evt.preventDefault();
    } else {
        evt.preventDefault();
        if(isStorageSupport) {
            localStorage.setItem("login", login.value);
        }
    }
});
