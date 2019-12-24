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
    
    // Ground
    ctx.fillStyle = "rgb(0, 0, 0)";
    ctx.fillRect(0, window.innerHeight - 120, window.innerWidth, 120);

    // House 
    const house = {
        x : window.innerWidth - 300,
        y : window.innerHeight - 160,
        width : 100,
        height : 60
    }

    ctx.fillStyle = "rgb(0, 0, 0)";
    ctx.fillRect(house.x, house.y, house.width, house.height);

    ctx.beginPath();
    ctx.moveTo(house.x, window.innerHeight - 160);
    ctx.lineTo(window.innerWidth - 280, window.innerHeight - 200);
    ctx.lineTo(window.innerWidth - 220, window.innerHeight - 200);
    ctx.lineTo(window.innerWidth - 200, house.y);
    ctx.lineTo(house.x, house.y);
    ctx.strokeStyle = "rgb(0, 0, 0)";
    ctx.stroke();
    ctx.fillStyle = "rgb(0, 0, 0)";
    ctx.fill();  
    ctx.closePath();

    // House interactivity
    window.addEventListener("click", (e) => {
    
        
    if (e.offsetX > house.x
        && e.offsetX < house.x + house.width
        && e.offsetY > house.y
        && e.offsetY < house.y + house.height) {
            drawWin();
        }
    });
    
}

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

init();

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    init();
});

