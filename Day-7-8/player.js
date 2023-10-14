class Player{
    constructor(){
        //init
        this.position = {
            x: canvas.width / 2.8,
            y: canvas.height - 100,
        };
        this.velocity = {
            x: 0,
            y: 0,
        };
        this.size = 60;
        this.image = new Image();
        this.image.src = "./images/plane.png";
        this.isAlive = true;
    }


    draw(){
        c.beginPath();
        c.fillStyle = "red";
        // c.fillRect(this.position.x, this.position.y, this.size, this.size);
        c.drawImage(this.image, this.position.x, this.position.y, this.size, this.size);

    }   
    move(){
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
    }

    update(){
        this.draw();   
        if(this.isAlive){
            this.move();
        } 
    }

}