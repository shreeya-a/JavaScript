class Bird{
    constructor(){
        this.position = {
            x: canvas.width / 2, 
            y: 0,
        }
        this.velocity = {
            x: 0, 
            y: 1,
        }
        this.size = {
            width: 50, 
            height: 50,
        }
        this.acceleration = 0.2;
        this.isDead = false;
        this.image = new Image();
        this.image.src = "./images/bird.png";
        
    }
    draw(){
        c.beginPath();
        c.fillStyle = "red";
        c.drawImage(
            this.image,
            this.position.x - this.size.width / 2,
            this.position.y,
            this.size.width,
            this.size.height
        );
        // c.fillRect(
        //     this.position.x - this.size.width / 2,
        //     this.position.y,
        //     this.size.width,
        //     this.size.height
        // );
    }

    move(){
        this.velocity.y += this.acceleration; 
        this.position.y += this.velocity.y;
    }
    jump(){
        this.velocity.y = -5;
    }
    update(){
        this.draw();
        if(!this.isDead){
            this.move();
            this.borderCollision();
        }
    }
    borderCollision(){
        if(this.position.y + this.size.height >= canvas.height){
            this.position.y = canvas.height - this.size.height;
            this.isDead = true;
        }
    }
}