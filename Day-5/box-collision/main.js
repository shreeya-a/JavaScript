const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");
let color = "black";

const Box = {
    x: 100,
    y: 100,
    width: 100,
    height: 100,
}
const Box2 = {
    x: 200,
    y: 200,
    width: 100,
    height: 100,
}
function checkCollision(){
    if(
        Box.x + Box.width >= Box2.x &&
        Box.x <= Box2.x + Box2.width &&
        Box.y + Box.height >= Box2.y &&
        Box.y <= Box2.y + Box2.height
    ){
        color = "red";
    }else{
        color = "green";
    }

}
document.addEventListener("mousemove", (e) => {
    Box.x = e.clientX;
    Box.y = e.clientY;
});

function animate(){
    c.clearRect(0, 0, canvas.width, canvas.height);

    // Box
    c.beginPath();
    c.fillStyle = color;
    c.fillRect(Box.x, Box.y, Box.width, Box.height);
    c.fill();

    // Box2
    c.beginPath();
    c.fillStyle = color;
    c.fillRect(Box2.x, Box2.y, Box2.width, Box2.height);
    c.fill();

    checkCollision();
    window.requestAnimationFrame(animate);
}
animate();