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
    ctx.moveTo(house.x, house.y);
    ctx.lineTo(house.x + 20, house.y - 40);
    ctx.lineTo(house.x + 80, house.y - 40);
    ctx.lineTo(house.x + 100, house.y);
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
    
    // Tree

    ctx.beginPath();
    ctx.moveTo(house.x - 85, house.y + 40);
    ctx.lineTo(house.x - 85, house.y + 25);
    ctx.lineTo(house.x - 117, house.y + 25);
    ctx.lineTo(house.x - 95, house.y);
    ctx.lineTo(house.x - 112, house.y);
    ctx.lineTo(house.x - 90, house.y - 25);
    ctx.lineTo(house.x - 105, house.y - 25);
    ctx.lineTo(house.x - 75, house.y - 60);
    ctx.lineTo(house.x - 50, house.y - 25);
    ctx.lineTo(house.x - 65, house.y - 25);
    ctx.lineTo(house.x - 43, house.y);
    ctx.lineTo(house.x - 65, house.y);
    ctx.lineTo(house.x - 40, house.y + 25);
    ctx.lineTo(house.x - 73, house.y + 25);
    ctx.lineTo(house.x - 73, house.y + 40);
    ctx.lineTo(house.x - 88, house.y + 40);
    ctx.strokeStyle = "rgb(0, 0, 0)";
    ctx.stroke();
    ctx.fillStyle = "rgb(0, 0, 0)";
    ctx.fill(); 
    ctx.closePath();
    
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

const tree = {
    x : window.innerWidth - 300,
    y : window.innerHeight - 160
}

const drawLights = () => {

    
    ctx.beginPath();
    ctx.arc(tree.x - 82, tree.y - 45, 3, 0, Math.PI * 2, false);
    ctx.fillStyle = "rgb(62, 201, 2)";
    ctx.fill();

    ctx.beginPath();
    ctx.arc(tree.x - 75, tree.y - 35, 3, 0, Math.PI * 2, false);
    ctx.fillStyle = "rgb(201, 2, 2)";
    ctx.fill();

    ctx.beginPath();
    ctx.arc(tree.x - 68, tree.y - 22, 3, 0, Math.PI * 2, false);
    ctx.fillStyle = "rgb(62, 201, 2)";
    ctx.fill();

    ctx.beginPath();
    ctx.arc(tree.x - 78, tree.y - 15, 3, 0, Math.PI * 2, false);
    ctx.fillStyle = "rgb(201, 2, 2)";
    ctx.fill();

    ctx.beginPath();
    ctx.arc(tree.x - 88, tree.y - 5, 3, 0, Math.PI * 2, false);
    ctx.fillStyle = "rgb(62, 201, 2)";
    ctx.fill();

    ctx.beginPath();
    ctx.arc(tree.x - 97, tree.y + 5, 3, 0, Math.PI * 2, false);
    ctx.fillStyle = "rgb(201, 2, 2)";
    ctx.fill();

    ctx.beginPath();
    ctx.arc(tree.x - 80, tree.y + 10, 3, 0, Math.PI * 2, false);
    ctx.fillStyle = "rgb(62, 201, 2)";
    ctx.fill();

    ctx.beginPath();
    ctx.arc(tree.x - 65, tree.y + 15, 3, 0, Math.PI * 2, false);
    ctx.fillStyle = "rgb(201, 2, 2)";
    ctx.fill();
}

 // Tree interactivity
 window.addEventListener("click", (e) => {
    
        
    if (e.offsetX > tree.x - 117
        && e.offsetX < tree.x - 40
        && e.offsetY > tree.y - 60
        && e.offsetY < tree.y + 25) {
            drawLights();

            if (window.innerWidth > 900) {
                ctx.font = "5em Roboto";
                ctx.shadowColor ="rgb(255, 255, 255)";
                ctx.shadowBlur = 4;
                ctx.fillText("Merry Christmas!", window.innerWidth - (window.innerWidth - 200), window.innerHeight / 2);
                ctx.shadowBlur = 0;
            } else if (window.innerWidth > 600 || window.innerHeight < 400) {
                ctx.font = "3em Roboto";
                ctx.shadowColor ="rgb(255, 255, 255)";
                ctx.shadowBlur = 4;
                ctx.fillText("Merry Christmas!", window.innerWidth - (window.innerWidth - 100), (window.innerHeight / 2) - 100);
                ctx.shadowBlur = 0;
            } else if (window.innerWidth > 500) {
                ctx.font = "3em Roboto";
                ctx.shadowColor ="rgb(255, 255, 255)";
                ctx.shadowBlur = 4;
                ctx.fillText("Merry Christmas!", window.innerWidth - (window.innerWidth - 100), (window.innerHeight / 2) - 100);
                ctx.shadowBlur = 0;
            } else if (window.innerWidth < 500) {
                ctx.font = "3em Roboto";
                ctx.shadowColor ="rgb(255, 255, 255)";
                ctx.shadowBlur = 4;
                ctx.fillText("Merry Christmas!", window.innerWidth - (window.innerWidth - 40), (window.innerHeight / 2) - 100);
                ctx.shadowBlur = 0;
            }

            
        }
    });



