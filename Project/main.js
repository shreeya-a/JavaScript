const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");

class Circle{
    constructor(radius,color){
        this.x = canvas.width / 2;
        this.y = canvas.height /2;
        this.radius = radius || 10;
        this.color = color;
    }
    draw(){
        c.beginPath();
        c.fillStyle = this.color;
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        c.fill();
    }
    grow(){
        this.radius = this.radius + 10;
    }
    update(){
        this.draw();
        this.grow();
    }
}

let circle = new Circle(200,"black");
let circle1 = new Circle(100,"blue");
// const circle3 = new Circle(100,"black");
// const circle2 = new Circle(50,"blue");
// const circle4 = new Circle(40,"blue");
// const circle5 = new Circle(10,"black");

function animate(){
    // c.clearRect(0,0,canvas.widht,canvas.height);


    circle.update();
    circle1.update();
  

    // circle3.update();
    // circle2.update();
    // circle4.update();
    // circle5.update();

    window.requestAnimationFrame(animate);

}

animate();