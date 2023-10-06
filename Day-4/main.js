/*
class Animal{   //class
    constructor(){
        this.x = 20;
        this.y = 30;
        this.color = "red";
    }
    draw(){
        console.log("draw");
    }
} 
const object = new Animal(); //object
object.draw();

*/
/*
const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");

let x = Math.random() * (400 - 0) + 0;
let y = Math.random() * (400 - 0) + 0;
let r = Math.random() * (100 - 10) + 10;

// game loop
function animate() {
  c.clearRect(0, 0, 500, 500);

  // your code here!
  c.beginPath();
  c.arc(x, y, r, 0, Math.PI * 2);
  c.fill();

  x += Math.random() * (1 - -1) + -1;
  y += Math.random() * (1 - -1) + -1;

  window.requestAnimationFrame(animate);
}

animate();
*/
//particle ko directons i.e value keeps changing so use variable
/*
let x=100;
let y = 100;
let r=20;
*/

const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");

let x = Math.random() * (500-0)+0; // 0-400
let y = Math.random() * (500-0)+0;
let r = Math.random() * (100-10)+10;   // 5-20
/*
let randomNum = Math.random();  // range 0-1
let randomNumber1 = Math.random() * (max - min) + min;  // range max to min
let randomNumber = Math.random() * (500 - 100) + 100;  // range 400 -100
*/

//game loop
function animate(){
    c.clearRect(0,0,500,500);

    //particle
    c.beginPath();
    // c.arc(x,y,r,0,360);
    c.arc(x,y,r,0,Math.PI*2);
    c.fill();
    
    x += Math.random() * (1- -1)+-1;
    y += Math.random() * (1- -1)+-1;
    window.requestAnimationFrame(animate);
}
animate();

