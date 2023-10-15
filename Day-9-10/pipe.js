class Pipe{
    constructor(){
        this.position = {
            x: canvas.width,
            y: Math.random() * (0 - -150) + -150,
        };
        this.size = {
            width: 50,
            height: 300,
        };
        this.velocity = {
            x: -1,
            y: 0,
        };
        this.gap = 150;
        // this.upPipe = new Image();
        // this.upPipe.src = "./images/";
        // this.downPipe = new Image();
        // this.downPipe.src = "./images/";
    }
    draw(){
        c.beginPath();
        c.fillStyle = "red";
        // c.drawImage(
        //     this.upPipe,
        //     this.position.x, 
        //     this.position.y,
        //     this.size.width, 
        //     this.size.height
        // );
        c.fillRect(
            this.position.x, 
            this.position.y,
            this.size.width, 
            this.size.height
        );
    }
    drawPipeBelow(){
        c.beginPath();
        c.fillStyle = "red";
        // c.drawImage(
        //     this.upPipe,
        //     this.position.x, 
        //     this.position.y,
        //     this.size.width, 
        //     this.size.height
        // );
        c.fillRect(
            this.position.x, 
            this.position.y + this.size.height + this.gap,
            this.size.width, 
            this.size.height
        );
    }
    collision(){
        //upper pipe collision
        if(
            this.position.x + this.size.width >= bird.position.x && 
            this.position.x <= this.size.width + bird.position.x - bird.size.width / 2 && 
            this.position.y + this.size.height >= bird.position.y && 
            this.position.y <= this.size.height + bird.position.y  
        ){
            bird.isDead = true;
        }

        // lower pipe collision
        if(
            this.position.x + this.size.width >= bird.position.x && 
            this.position.x <= this.size.width + bird.position.x - bird.size.width / 2 && 
            this.position.y + this.size.height + this.gap + this.size.height >= bird.position.y && 
            this.position.y <= this.size.height + bird.position.y  
        ){
            bird.isDead = true;
        }
    }

    move(){
        if(this.position.x + this.size.width <= 0){
            this.position.x = canvas.width;
            this.position.y = Math.random() * (0 - -150) + -150;
        }
        this.position.x += this.velocity.x;
    }

    update(isDead){
        this.draw();
        this.drawPipeBelow();
        if(!isDead){
            this.move();
        }
        this.collision();

    }
}