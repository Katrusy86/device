
     
var button = document.querySelector(".button-active");
var popup = document.querySelector(".modal-login");
var close = popup.querySelector(".modal-close");
var form = popup.querySelector(".login-form");
var login = popup.querySelector("[name=login]");
var email = popup.querySelector("[name=email]");
var overflow = document.querySelector(".overflow");
var submitElement = popup.querySelector(".button-submit");

var isStorageSupport = true;
var storage = "";

try {
    storage = localStorage.getItem("login");
} catch (err){
    isStorageSupport=false;
}

button.addEventListener ("click", function (evt) {
    evt.preventDefault();
    overflow.classList.add("in");
    popup.classList.add("modal-show");
    
    if(storage){
        login.value = storage;
        email.focus();
    } else {
        login.focus();
    }
});

close.addEventListener ("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
    overflow.classList.remove("in");
});

window.addEventListener("keydown", function(evt){
    if (evt.keyCode===27){
        evt.preventDefault();

        if (popup.classList.contains("modal-show")){
            popup.classList.remove("modal-show");
            popup.classList.remove("modal-error");
            overflow.classList.remove("in");
        }
    }
});