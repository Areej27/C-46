var thief, thiefrunning, edges;
var ground, invground;
var bg, bgimg;
var barricade;

function preload(){
  thiefrunning = loadAnimation("boy1.png","boy2.png", "boy3.png", "boy4.png");
  
  bgimg= loadImage ("background.png")
}

function setup(){
  createCanvas(1200,400);
  
  // creating trex
  thief = createSprite(90,180,20,50);
  thief.addAnimation("running", thiefrunning);
  thief.scale = 0.4;
  
  edges = createEdgeSprites();
  
  
  ground= createSprite(0, 385, 1200, 15)
  ground.velocityX= -4;
  ground.x= ground.width/2;
  //adding scale and position to trex
  invground= createSprite(0, 398, 2000, 15)


}


function draw(){
  //set background color 
  background(bgimg);
  
  console.log(thief.y);

  //ground.visible= false;
  invground.visible= false;
  
if (ground.x <0){
  ground.x= ground.width/2
}

  //jump when space key is pressed
  if(keyDown("space") && thief.y> 290){
    thief.velocityY = -10;
  }
  
  thief.velocityY = thief.velocityY + 0.5;
  
  //stop trex from falling down
  thief.collide(invground);
  
  drawSprites();
}