













var character = document.getElementById("character");
var obstacle = document.getElementById("obstacle1");
var bg  = document.getElementById("bg");
var track = document.getElementById("track");
var restart = document.getElementById("btn");
// console.log(character);
// console.log(obstacle1);
obstacle.classList.add("animate-obs");
function jump() {
    if (character.classList != "animate") {
        character.classList.add("animate");
    }
    setTimeout(() => {
        character.classList.remove("animate");
    },400);
}
var counter = 0;
var speed = 2;
var checkDead = setInterval(() => {


    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"));
    // var obstacleRight = parseInt(window.getComputedStyle(obstacle).getPropertyValue("right"));
    

    // console.log(obstacleLeft);
    // console.log(obstacleRight);
   if(obstacleLeft<135  &&  characterTop >=335){
console.log("Game Over");
// screen.style.display="block";
obstacle.classList.remove("animate-obs");
obstacle.style.left=eval("obstacleLeft+'px'");
obstacle.style.animationPlayState="paused";
// obstacle.classList.remove("animate-obs");
bg.style.animationPlayState="paused";
character.classList.remove("animate");
track.style.animationPlayState="paused";
restart.style.transform="scale(1.5)";
restart.style.display="block";
//  alert("Gamer is Over Bro!!");



// 
// obstacle.style.animation="obstacle1 1s infinite linear";
counter = 0;
speed = 2;
// console.log(speed);


   }
   else{
counter++;
speed=speed-0.0001;
// speed=speed-0.5;
restart.style.display="none";
document.getElementById("count").innerHTML="Time : "+Math.floor(counter/100);
var high=Math.floor(counter/100);
var high_score = high;
// console.log("high score : "+high_score);
// console.log(high);
obstacle.style.animationDuration=eval("speed+'s'");
// obstacle.style.animation="obstacle1 2s infinite linear";
obstacle.style.animationPlayState="running"; 
bg.style.animationPlayState="running";
track.style.animationPlayState="running";
console.log(eval("speed+'s'"));



   }
  

}, 10);
function run(){
    
    obstacle.classList.add("animate-obs");
    if(high_score>=high){
        // console.log("high score : "+high_score);
    }
    
}



