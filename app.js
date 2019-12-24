const canvas = document.querySelector("#my-canvas");
const ctx = canvas.getContext("2d");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const init = () => {
    
    // Stars
    for (let i = 0; i < 300; i++) {

        let x = Math.random() * window.innerWidth;
        let y = Math.random() * window.innerHeight - 180;
        let radius = Math.random() * 1.4;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2, false);
        ctx.fillStyle = "white";
        ctx.fill();
    }
    
    /*ctx.beginPath();
    ctx.arc(window.innerWidth / 2, window.innerHeight + 2620, window.innerWidth * 2, 0, Math.PI * 2, false);
    ctx.fillStyle = "#000000";
    ctx.fill();*/

    // Ground
    ctx.fillStyle = "rgb(0, 0, 0)";
    ctx.fillRect(0, window.innerHeight - 120, window.innerWidth, 120);

    // House 
    ctx.fillStyle = "rgb(0, 0, 0)";
    ctx.fillRect(window.innerWidth - 300, window.innerHeight - 160, 100, 60);

    ctx.beginPath();
    ctx.moveTo(window.innerWidth - 300, window.innerHeight - 160);
    ctx.lineTo(window.innerWidth - 280, window.innerHeight - 200);
    ctx.lineTo(window.innerWidth - 220, window.innerHeight - 200);
    ctx.lineTo(window.innerWidth - 200, window.innerHeight - 160);
    ctx.lineTo(window.innerWidth - 300, window.innerHeight - 160);
    ctx.strokeStyle = "rgb(0, 0, 0)";
    ctx.stroke();
    ctx.fillStyle = "rgb(0, 0, 0)";
    ctx.fill();  
    ctx.closePath();
}

init();

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    init();
});

const drawWin = () => {
    ctx.fillStyle = "rgb(247, 232, 94)";
    ctx.fillRect(window.innerWidth - 280, window.innerHeight - 155, 20, 20);
    ctx.fillStyle = "rgb(0, 0, 0)";
    ctx.fillRect(window.innerWidth - 272, window.innerHeight - 155, 4, 20);
    ctx.fillStyle = "rgb(0, 0, 0)";
    ctx.fillRect(window.innerWidth - 280, window.innerHeight - 147, 20, 4);

    ctx.fillStyle = "rgb(247, 232, 94)";
    ctx.fillRect(window.innerWidth - 240, window.innerHeight - 155, 20, 20);
    ctx.fillStyle = "rgb(0, 0, 0)";
    ctx.fillRect(window.innerWidth - 232, window.innerHeight - 155, 4, 20);
    ctx.fillStyle = "rgb(0, 0, 0)";
    ctx.fillRect(window.innerWidth - 240, window.innerHeight - 147, 20, 4);
}

drawWin();