
var menu_box = document.getElementById("menu_box");
var character = document.getElementById("character");
var obstacle = document.getElementById("obstacle1");
var bg = document.getElementById("bg");
var track = document.getElementById("track");
var restart = document.getElementById("btn");
obstacle.classList.add("animate-obs");
var highs = 0;
function jump() {
    if (character.classList != "animate") {
        character.classList.add("animate");
    }
    setTimeout(() => {
        character.classList.remove("animate");
    }, 400);
}
var counter = 0;
var speed = 2;

var checkDead = setInterval(() => {
    function myscore(){
     
        // console.log(Math.floor(highs/100));
        Time=Math.floor(highs/100); 
        document.getElementById("score").innerHTML=Time;
        highs++;
}

    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"));

    if (obstacleLeft < 135 && characterTop >= 335) {
        // console.log("Game Over");
        obstacle.classList.remove("animate-obs");
        obstacle.style.left = eval("obstacleLeft+'px'");
        obstacle.style.animationPlayState = "paused";

        bg.style.animationPlayState = "paused";
        character.classList.remove("animate");
        track.style.animationPlayState = "paused";
        // restart.style.transform = "scale(1.5)";
        // restart.style.display = "block";
        // menu_box.style.transform = "scale(1.5)";
        menu_box.style.display = "block";
       
        counter =0;
    
        speed = 2;
      
    
    } else {

        counter++;
        speed = speed - 0.0001;
        restart.style.display = "none";
        document.getElementById("count").innerHTML = "Time : " + Math.floor(counter / 100);
        obstacle.style.animationDuration = eval("speed+'s'");
        // obstacle.style.animation="obstacle1 2s infinite linear";
        obstacle.style.animationPlayState = "running";
        bg.style.animationPlayState = "running";
        track.style.animationPlayState = "running";
        // console.log(eval("speed+'s'"));
        myscore();
        // highs = 0;


    }


    // console.log(myArray);
}, 10);



function run() {


    obstacle.classList.add("animate-obs");
    menu_box.style.display = "none";



}
player1=()=>{
document.getElementById("so").src="sonic.gif";
}
player2=()=>{
document.getElementById("so").src="m.gif";
$("#so").attr("width","180px");
}
player3=()=>{
document.getElementById("so").src="https://media0.giphy.com/media/9GJcLOV16IsScnqgYO/giphy.gif";
$("#so").attr("width","200px");
}
obs1=()=>{
document.getElementById("to").src="https://pa1.narvii.com/5768/8d2cd6afdd78d3291523fb204f655557d18e641e_hq.gif";
// $("#so").attr("width","200px");
}
obs2=()=>{
document.getElementById("to").src="m2.png";
// $("#so").attr("width","200px");
}
land1=()=>{
bg.style.background="url(land2.jpg)";
bg.style.backgroundSize="contain";

document.querySelector("h1").style.color="#000";
document.querySelector("h1").style.border="8px solid #000";
// $("#so").attr("width","200px");
}
land2=()=>{
bg.style.background="url(land3.jpg)";
bg.style.backgroundSize="contain";

// $("#so").attr("width","200px");
document.querySelector("h1").style.color="#fff";
document.querySelector("h1").style.border="8px solid #fff";
}
land3=()=>{
bg.style.background="url(bg.png)";
bg.style.backgroundSize="2000px 490px";

document.querySelector("h1").style.color="#000";
document.querySelector("h1").style.border="8px solid #000";
// bg.style.backgroundSize="contain";
// $("#so").attr("width","200px");
}
