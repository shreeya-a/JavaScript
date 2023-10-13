const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

const player = new Player();
let allBullets = [];
const enemy = new Enemy();
let enemies = [];

//every second creates new enemy
setInterval(() => {
    const enemy = new Enemy();
    enemies.push(enemy);
},1000);

// game loop
function loop(){
    c.clearRect(0, 0, canvas.width, canvas.height);
    player.update();

    for(let i = 0; i< enemies.length; i++){
        enemies[i].update();
        enemies[i].collision(player);
        enemies[i].collisionWithBullet(allBullets);

    }

    for(let i = 0; i< allBullets.length; i++){
        allBullets[i].update();
    }

    window.requestAnimationFrame(loop);    //60 times per sec
}
loop();

//all listener added below
// add event listener to document not just canvas
// don't add event listener inside loop 
//because every sec 60 frames are changed

document.addEventListener("keydown", (event) => {
    if(event.code === "ArrowUp") player.velocity.y = -5;
    if(event.code === "ArrowDown") player.velocity.y = 5;
    if(event.code === "ArrowLeft") player.velocity.x = -5;
    if(event.code === "ArrowRight") player.velocity.x = 5;
    if(event.code === "Space") 
    allBullets.push(
        new Bullet(player.position.x + player.size / 5, player.position.y - player.size / 2)
        );
});

document.addEventListener("keyup", (event) => {
    if(event.code === "ArrowUp") player.velocity.y = 0;
    if(event.code === "ArrowDown") player.velocity.y = 0;
    if(event.code === "ArrowLeft") player.velocity.x = 0;
    if(event.code === "ArrowRight") player.velocity.x = 0;
    
});