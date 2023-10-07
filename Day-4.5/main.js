const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");

class Box{
    constructor(x, y,color, Xspeed, Yspeed){
        this.x = x || 0;
        this.y = y || 0;
        this.width = 40;
        this.height = 40;
        this.color = color || "red";
        this.x_speed = Xspeed || 1;
        this.y_speed = Yspeed || 1;
    }
    // constructor(x, y,Xspeed, color){
    //     this.x = x || 100;
    //     this.y = y || 0;
    //     this.width = 40;
    //     this.height = 40;
    //     this.color = color || "red";
    //     this.x_speed = Xspeed || 1;
    //     this.y_speed =  1;
    // }

    draw(){
        c.beginPath();
        c.fillStyle = this.color;
        c.rect(this.x, this.y, this.width, this.height);
        c.fill();

        
    }
    move(){
       this.x = this.x + this.x_speed;
       this.y = this.y + this.y_speed;
    }

    checkCollision(){
        if(this.x + this.width > canvas.width){
            //check collision on right
           this.x_speed = -1;   //return to right
        }else if(this.x < 0){
            //check collision on left
            this.x_speed = 1;   //return to left
        }
        if(this.y + this.height > canvas.height){
            //check collision on right
           this.y_speed = -1;   //return to right
        }else if(this.y < 0){
            //check collision on left
            this.y_speed = 1;   //return to left

        }
    }

    update(){
        this.draw();
        this.move();
        this.checkCollision();
    }
}
// class Box{
//     constructor(){
//         this.x = 100;
//         this.y = 0;
//         this.width = 40;
//         this.height = 40;
//         this.color = "red";
//         this.x_speed = 1;
//         this.y_speed = 1;
//     }

//     draw(){
//         c.beginPath();
//         c.fillStyle = this.color;
//         c.rect(this.x, this.y, this.width, this.height);
//         c.fill();

        
//     }
//     move(){
//        this.x = this.x + this.x_speed;
//        this.y = this.y + this.y_speed;

    
//         // this.x += 1;
//         // this.y = this.y + 1;
//         // if(this.x + this.width > canvas.width){
//         //     this.x = 0;
//         //     this.y = 0;
//         // }else if(this.x < 0){
//         //     this.x = 100;
//         //     this.y = 0;
//         // }

//         // right to left collision detection
//         // this.x -=1;
//         // if(this.x<0){
//         //     this.x = canvas.width;
//         //     // this.x = 300;
//         // }
//     }

//     checkCollision(){
//         if(this.x + this.width > canvas.width){
//             //check collision on right
//            this.x_speed = -1;   //return to right
//         }else if(this.x < 0){
//             //check collision on left
//             this.x_speed = 1;   //return to left

//         }
//         if(this.y + this.height > canvas.height){
//             //check collision on right
//            this.y_speed = -1;   //return to right
//         }else if(this.y < 0){
//             //check collision on left
//             this.y_speed = 1;   //return to left

//         }
//     }

//     update(){
//         this.draw();
//         this.move();
//         this.checkCollision();
//     }
// }

const box = new Box();
const box1 = new Box(300, 150);
const box2 = new Box(0, 90, "yellow");
const box3 = new Box(100, 90, "blue");

// const box3 = new Box(300, 200, undefined, "grey");
// const box3 = new Box(300,"",100, );


//game loop
function animate(){
    c.clearRect(0, 0, canvas.width, canvas.height);
    // box.draw();
    // box.move();
    box.update();
    box1.update();
    box2.update();
    box3.update();
    window.requestAnimationFrame(animate);
}

animate();