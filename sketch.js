var PLAY = 1;
var END = 0;
var gameState = PLAY;
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var ground,invsibleGround;

  var survivalTime;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,300);
  
 
  monkey = createSprite(50,230,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1;
  monkey.velocityY=4;
  
  
 
  
  ground = createSprite(600,260,1200,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  
  
  obstacleGroup=new Group();
  FoodGroup=new Group();
  
  score=0;
  survivalTime=0;
}


function draw() {
  background("white");
 
  

  
  if(FoodGroup.isTouching(monkey)){
    FoodGroup.destroyEach();
    score = score + 2 ;
  }
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  monkey.collide(ground);
  
  if(keyDown("SPACE")){
monkey.velocityY=-5;
  }
  monkey.velocityY=monkey.velocityY+0.8;
  
  textSize(15);
  text("Score : "+score,40,50);
  
  
  textSize(15);
 survivalTime=Math.ceil(frameCount/frameRate());
  
  text("Survival Time : "+ survivalTime,400,50
      );
  obs();
  banan();
  drawSprites();
}
function banan(){
if(frameCount%80===0){
  banana = createSprite(620,Math.round(random(170,230)),10,10);
  banana.addImage(bananaImage);
  banana.scale=0.1;
  banana.velocityX=-4;
  banana.lifetime=150;
}
  
}
function obs(){
if(frameCount%300===0){
obstacle=createSprite(620,230,20,20);
  obstacle.addImage(obstacleImage);
  obstacle.scale=0.2;
 obstacle.velocityX=-4;
}

}




