const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");

let number = 0;
let scale = 10;
let i = 9;

function drawFlower(){

        let angle = number * i;
        let radius = scale * Math.sqrt(number);
        let positionX = radius * Math.sin(angle) + canvas.width/2;
        let positionY = radius * Math.cos(angle) + canvas.height/2;

        c.fillStyle = "black";
        c.strokeStyle = "blue";
        c.lineWidth = 3;
        c.beginPath();
        c.arc(positionX, positionY, 20, 0, Math.PI * 2);
        c.closePath();
        c.fill();
        c.stroke();

        number ++;
    }


function animate(){
    drawFlower();
    if(number > 1000) return;
    requestAnimationFrame(animate);
}

canvas.addEventListener("click", () => {
    c.clearRect(0,0, canvas.width, canvas.height);
    number = 0;
    i = Math.random() * (15 - 1) + 1;
    animate();   

   }); 


animate();


// const canvas = document.getElementById("canvas");
// const c = canvas.getContext("2d");
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;


// let number = 0;
// let scale = 10;

// class Flower{
//     constructor() {
//         this.angle = number * 1;
//         this.radius = scale * Math.sqrt(number);
//         this.positionX = this.radius * Math.sin(angle) + canvas.width/2;
//         this.positionY = this.radius * Math.cos(angle) + canvas.height/2;
//     }
//     draw(){
//         c.fillStyle = "red";
//         c.strokeStyle = "blue";
//         c.lineWidth = 5;
//         c.beginPath();
//         c.arc(this.positionX, this.positionY, 20, 0, Math.PI * 2);
//         c.closePath();
//         c.fill();
//         c.stroke();

//         number ++;
//     }
// }
// const  flower = new Flower();

// function animate(){
//     flower.draw();
//     requestAnimationFrame(animate);
// }

// animate();

