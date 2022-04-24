const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASS = "hidden";
const USERNAME_KEY = "userName";

const paintGreeting = (userName) => {
    greeting.innerText = `Welcome! ${userName}`;
    greeting.classList.remove(HIDDEN_CLASS);
}

const savedUserName = localStorage.getItem(USERNAME_KEY);

if(savedUserName === null) {
    loginForm.classList.remove(HIDDEN_CLASS);
    loginForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const userName = loginInput.value;
        loginForm.classList.add(HIDDEN_CLASS);

        localStorage.setItem(USERNAME_KEY, userName);

        paintGreeting(userName);
    });
} else {
    paintGreeting(savedUserName);
}