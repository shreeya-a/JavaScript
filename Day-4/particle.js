/*

const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");

class Particle{
    constructor(){
        this.x = Math.random() * (500-100)+100;
        this.y = Math.random() * (500-100)+100;
        this.r = 20;
    } 

    draw(){
        c.beginPath();
        c.arc(this.x, this.y, r, 0, Math.PI*2);
        c.fill();
    }

    move(){
        this.x += Math.random() * (1 - -1) + -1 ;
        this.y += Math.random() * (1 - -1) + -1 ;

    }
}

new particleObj = new Particle();
new particleObj2 = new Particle();
new particleObj3 = new Particle();

function animate(){
    c.clearRect (0,0,500,500);
    particleObj.draw();
    particleObj.move();
    particleObj2.draw();
    particleObj2.move();
    particleObj3.draw();
    particleObj3.move();
    requestAnimationFrame(animate);
}
animate();

*/

const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");
let totalParticleNumber = 50;

class Particle {
  constructor() {
    this.x = Math.random() * (490 - 10) + 10;
    this.y = Math.random() * (490 - 10) + 10;
    this.r = Math.random() * (30 - 10) + 10;
  }

  draw() {
    c.beginPath();
    c.fillStyle = "blue";
    c.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    c.fill();
  }

  move() {
    this.x += Math.random() * (1 - -1) + -1;
    this.y += Math.random() * (1 - -1) + -1;
  }
}

const particleArr = [];
for (let i = 0; i < totalParticleNumber; i++) {
  const obj = new Particle();
  particleArr.push(obj);
}
console.log(particleArr);

// game loop
function animate() {
  c.clearRect(0, 0, 500, 500);

  for (let i = 0; i < totalParticleNumber; i++) {
    particleArr[i].draw();
    particleArr[i].move();
  }

  requestAnimationFrame(animate);
}

animate();