
const h2 = document.querySelector("#toDoContainer h2");

function showClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    h2.innerText = `${hours}:${minutes}:${seconds}`;
}

showClock();
setInterval(showClock, 1000);
