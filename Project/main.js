const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");

class Circle{
    constructor(radius,color){
        this.x = 730;
        this.y = 365;
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

// const circle = new Circle(200,"black");
// const circle1 = new Circle(0,"blue");

function animate(){
    // c.clearRect(0,0,canvas.widht,canvas.height);

    circle.update();
    circle1.update();

    window.requestAnimationFrame(animate);

}

animate();
