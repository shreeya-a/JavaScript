const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");

class Box{
    constructor(){
        this.position = {
            x: 100,
            y: 100,
        }
        this.size = {
            width: 50,
            height: 50,
        }
        this.velocity = {
            x: 1,
            y: 5,
        }
        // earth's acceleration due to gravity = 9.8 m/s
        // render 60 FPS
        // this.acceleration = 9.8 / 60;
        this.acceleration = 0.1;
      
    }
    draw(){
        c.beginPath();
        c.rect(this.position.x, this.position.y, this.size.width, this.size.height);
        c.fill();
    }
    move(){
        this.velocity.y = this.velocity.y + this.acceleration;
        this.position.y = this.position.y + this.velocity.y;
    }

    borderCollision(){
        if(this.position.y + this.size.height >= canvas.height){
            this.position.y = canvas.height - this.size.height;
            this.velocity.y *= -0.8;
        }
    }
    update(){
        this.draw();
        this.move();
        this.borderCollision();
    }
}

const boxObj = new Box();

function animate(){
    c.clearRect(0, 0, canvas.width, canvas.height);
    boxObj.update();
    window.requestAnimationFrame(animate);
}

animate();