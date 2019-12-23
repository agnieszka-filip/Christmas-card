const canvas = document.querySelector("#my-canvas");
const ctx = canvas.getContext("2d");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

for (let i = 0; i < 300; i++) {

    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight - 180;
    let radius = Math.random() * 1.4;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, false);
    ctx.fillStyle = "white";
    ctx.fill();
}

ctx.beginPath();
ctx.arc(window.innerWidth / 2, window.innerHeight + 2620, window.innerWidth * 2, 0, Math.PI * 2, false);
ctx.fillStyle = "#000000";
ctx.fill();

const house = document.querySelector("#house");
house.style.top = window.innerHeight - 125 + "px";

