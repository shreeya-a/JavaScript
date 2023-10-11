const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");

//load the music
// Audio()
const backgroundMusic = new Audio();
const gunSound = new Audio();
backgroundMusic.src = "./sounds/burstfirewav-14443.wav";
//play the music

//bg music
function playSound(){
    backgroundMusic.play();
    backgroundMusic.loop = true; // plays bg music in loop
    // backgroundMusic.pause();
    // backgroundMusic.stop();
}

//play music on click
canvas.addEventListener("click", () =>{
    gunSound.src = "./sounds/duck-quack.wav";
    gunSound.play();
    gunSound.volume = 0.2;
})

//loading image
const spaceShip = new Image();
spaceShip.src = "./images/plane.png" ;

let y = 0;
function animate(){
    c.clearRect(0, 0, canvas.width, canvas.height);
    c.drawImage(spaceShip, 0, y, 50, 50);
    y++;
    window.requestAnimationFrame(animate);
}
animate();