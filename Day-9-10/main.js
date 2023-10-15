const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");

let gameScore = 0;


const bird = new Bird();
const bg = new Background(0,0);
const bg2 = new Background(bg.size.width, 0);
const pipe = new Pipe();

let allBg =[];

//game loop
function animate(){
    c.clearRect(0, 0, canvas.width, canvas.height);

    //game logic
    bg.update(bird.isDead);
    bg2.update(bird.isDead);
    pipe.update(bird.isDead);
    bird.update();

    //score
    c.beginPath();
    c.fillStyle = "white";
    c.font = "30px Arial";
    c.fillText(gameScore, 10, 50);
    if(bird.isDead){
        clearInterval(intervalId);  // stops interval
    }
    window.requestAnimationFrame(animate)
}


const intervalId = setInterval(() => {
    gameScore ++;
}, 2000);

document.addEventListener("keydown", () => {
    bird.jump();
});

animate();