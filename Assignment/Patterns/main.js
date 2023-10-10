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

const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;


let number = 0;
let scale = 10;

function drawFlower(){

        let angle = number * 1;
        let radius = scale * Math.sqrt(number);
        let positionX = radius * Math.sin(angle) + canvas.width/2;
        let positionY = radius * Math.cos(angle) + canvas.height/2;

        c.fillStyle = "black";
        c.strokeStyle = "blue";
        c.lineWidth = 5;
        c.beginPath();
        c.arc(positionX, positionY, 20, 0, Math.PI * 2);
        c.closePath();
        c.fill();
        c.stroke();

        number ++;
    }


function animate(){
    drawFlower();
    requestAnimationFrame(animate);
}

animate();