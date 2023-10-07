const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");

class Circle{
    constructor(color){
        this.x = Math.random() * (1300 - 200) + 200;
        this.y = Math.random() * (650 - 200) + 200;
        this.radius = Math.random() * (150 - 50) + 50;
        // this.x = 50;
        // this.y = 50;
        // this.radius = 50;
        this.color =color || "blue";
        this.x_speed = 10;
        this.y_speed = 10;

    }
    draw(){
        c.beginPath();
        c.fillStyle = this.color;
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        c.fill();
    }
    move(){
        this.x = this.x + this.x_speed;
        this.y = this.y + this.y_speed;
    }
    checkColllision(){
        // collision on right
        if(this.x + this.radius > canvas.width){
            this.x_speed = -10;
        }
        //collision on left
        else if(this.x < this.radius){
            this.x_speed = 10;
        }
        //collision on bottom
        if(this.y + this.radius > canvas.height){
            this.y_speed = -10;
        }
        //collision on top
        else if(this.y < this.radius){
            this.y_speed = 10;
        }
    }
    update(){
        this.draw();
        this.move();
        this.checkColllision();
    }
}

const circle = new Circle();
const circle1 = new Circle("red");
const circle2 = new Circle("black");
const circle3 = new Circle("orange");
const circle4 = new Circle("green");
//game loop
function animate(){
    c.clearRect(0,0,canvas.width, canvas.height);
    
    circle.update();
    circle1.update();
    circle2.update();
    circle3.update();
    circle4.update();
    window.requestAnimationFrame(animate);
}

animate();