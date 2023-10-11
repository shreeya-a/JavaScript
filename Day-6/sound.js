const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");

function animate(){

    window.requestAnimationFrame(animate);
}
animate();