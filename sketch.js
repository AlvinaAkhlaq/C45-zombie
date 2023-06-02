var bgImg;
var bg
var shooterImg, shooter
var shootingImg

function preload(){
bgImg = loadImage("assets/bg.jpeg");
shooterImg = loadImage("assets/shooter_2.png")
shootingImg=loadImage("assets/shooter_3.png")
}

function setup(){
createCanvas(windowWidth,windowHeight);
bg=createSprite(windowWidth/2,windowHeight/2,45,45);
bg.addImage("background",bgImg);

shooter=createSprite(windowWidth/4, windowHeight-150,50,60);
shooter.scale=0.5
shooter.addImage("player",shooterImg);
shooter.setCollider("rectangle",0,0,300,300);
shooter.debug=false
shooter.addImage("playing",shootingImg)
}

function draw(){
  background("black");

if(keyDown("up")||touches.length>0){
  shooter.y=shooter.y-3;
}
if(keyDown("down")||touches.length<0){
  shooter.y=shooter.y+3;
}
if(keyWentDown("space")){
  shooter.changeImage("playing",shootingImg);
}
else if(keyWentUp("space")){
  shooter.changeImage("player",shooterImg)
}
  drawSprites();
  if(keyDown("space")){
    stroke("white");
    fill("red");
    textSize(15)
    text("GO AHEAD WITH THE MURDER",windowWidth/4, windowHeight-50)
  }
 
}