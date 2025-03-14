const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
const shortBtn = document.getElementById("shortBtn");


btn.addEventListener('click', navToggle);
shortBtn.addEventListener('click', msgToggle);

function navToggle() {
    btn.classList.toggle("open");
    menu.classList.toggle("flex");
    menu.classList.toggle("hidden");

}

function msgToggle() {
    const msg = document.getElementById("msg");
    console.log(msg);
    msg.classList.toggle("block");
    msg.classList.toggle("hidden");
}