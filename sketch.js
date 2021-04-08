var track1,track2,track3,trackImage;
var coins1,coins1Group;
var coins2,coins2Group;
var coins3,coins3Group;
var diamonds,diamondsGroup;
var obsacles1,obstacles1Group;
var obstacles2,obstacles2Group;
var obstacles3,obstacles3Group;
var player;

function preload() {
  trackImage=loadImage("New folder/track.png");
  playerImage=loadImage("New folder/player.gif");
  obstacles1Image=loadImage("New folder/obstacles1.png");
  obstacles2Image=loadImage("New folder/obstacles2.png");
  obstacles3Image=loadImage("New folder/obstacles3.gif");
  coinsImage=loadImage("New folder/coins.png");
  diamondsImage=loadImage("New folder/diamonds.gif");
}

function setup() {
  createCanvas(600, 700);
  track1=createSprite(120,300);
  track1.addImage(trackImage);
  track1.scale=3;
  track1.velocityY=2;

  track2=createSprite(320,300);
  track2.addImage(trackImage);
  track2.scale=3;
  track2.velocityY=2;
  
  track3=createSprite(520,300);
  track3.addImage(trackImage);
  track3.scale=3;
  track3.velocityY=2;

  player=createSprite(100,550);
  player.addImage(playerImage);
  player.scale=0.7;

  coins1Group=new Group();
  coins2Group=new Group();
  coins3Group=new Group();
  diamondsGroup=new Group();
  obstacles1Group=new Group();
  obstacles2Group=new Group();
  obstacles3Group=new Group();
}

function draw() {
  background("white");


 if (keyDown("right_arrow")&& player.x<400){
  player.x=player.x+200;
 }

 if (keyDown("left_arrow")&& player.x>100){
  player.x=player.x-200;
 }

 if (track1.y>600){
  track1.y=track1.height/2;
 }

 if (track2.y>600){
  track2.y=track2.height/2;
 }

 if(track3.y>600){
  track3.y=track3.height/2;
 }

 spawnObstacles();
 spawncoins();
 spawndiamonds();
 drawSprites();
}

function spawnObstacles(){

  if(frameCount%1000===0){
   obstacles1=createSprite(100,0);
   obstacles1.velocityY=3;

   var rand=Math.round(random(1,3));
   switch(rand){
    case 1:obstacles1.addImage(obstacles1Image);
    break;
    case 2:obstacles1.addImage(obstacles2Image);
    break;
    case 3:obstacles1.addImage(obstacles3Image);
    break;  
   }
   obstacles1.scale=0.5;
   obstacles1.lifetime=300;
   obstacles1Group.add(obstacles1)
   if(player.isTouching(obstacles1Group)){
     player.destroy()
     track1.velocityY=0;
     track2.velocityY=0;
     track3.velocityY=0;
     coins1Group.setVelocityYEach(0);
     coins2Group.setVelocityYEach(0);
     coins3Group.setVelocityYEach(0);
     diamondsGroup.setVelocityYEach(0);
     obstacles1Group.setVelocityEach(0);
     obstacles2Group.setVelocityEach(0);
     obstacles3Group.setVelocityEach(0);

   }

 }

  if(frameCount%800===0){
   obstacles2=createSprite(300,0); 
   obstacles2.velocityY=3;

   var rand=Math.round(random(1,3));
   switch(rand){
    case 1:obstacles2.addImage(obstacles1Image);
    break;
    case 2:obstacles2.addImage(obstacles2Image);
    break;
    case 3:obstacles2.addImage(obstacles3Image);
    break;
   }
   obstacles2.scale=0.5;
   obstacles2.lifetime=300;
   obstacles2Group.add(obstacles2)
   if(player.isTouching(obstacles2Group)){
    player.destroy()
    track1.velocityY=0;
    track2.velocityY=0;
    track3.velocityY=0;
    coins1Group.setVelocityYEach(0);
    coins2Group.setVelocityYEach(0);
    coins3Group.setVelocityYEach(0);
    diamondsGroup.setVelocityYEach(0);
    obstacles1Group.setVelocityEach(0);
    obstacles2Group.setVelocityEach(0);
    obstacles3Group.setVelocityEach(0);

  }
 }
  if(frameCount%900===0){
   obstacles3=createSprite(500,0);
   obstacles3.velocityY=3;
   var rand=Math.round(random(1,3));
   switch(rand){
     case 1:obstacles3.addImage(obstacles1Image);
     break;
     case 2:obstacles3.addImage(obstacles2Image);
     break;
     case 3:obstacles3.addImage(obstacles3Image);
     break;
    }
   obstacles3.scale=0.5;
   obstacles3.lifetime=300;
   obstacles3Group.add(obstacles3)
   if(player.isTouching(obstacles3Group)){
    player.destroy()
    track1.velocityY=0;
    track2.velocityY=0;
    track3.velocityY=0;
    coins1Group.setVelocityYEach(0);
    coins2Group.setVelocityYEach(0);
    coins3Group.setVelocityYEach(0);
    diamondsGroup.setVelocityYEach(0);
    obstacles1Group.setVelocityEach(0);
    obstacles2Group.setVelocityEach(0);
    obstacles3Group.setVelocityEach(0);

  }
  }
}

function spawncoins(){
 if (frameCount%99===0&&frameCount%1000!==0){
   coins1=createSprite(115,0);
   coins1.velocityY=3;
   coins1.addImage(coinsImage);
   coins1.scale=0.15; 
   coins1.lifetime=300;
   coins1Group.add(coins1)

   if(player.isTouching(coins1Group)) {
   coins1Group.destroyEach()
   } 
  }
  if (frameCount%89===0&&frameCount%800!==0){
    coins2=createSprite(315,0);
    coins2.velocityY=3;
    coins2.addImage(coinsImage);
    coins2.scale=0.15;
    coins2.lifetime=300;
    coins2Group.add(coins2)

    if(player.isTouching(coins2Group)){
    coins2Group.destroyEach()
    }
    
  }
  if (frameCount%94===0&&frameCount%900!==0){
    coins3=createSprite(515,0);
    coins3.velocityY=3;
    coins3.addImage(coinsImage);
    coins3.scale=0.15;
    coins3.lifetime=300;
    coins3Group.add(coins3);
    
    if(player.isTouching(coins3Group)){
      coins3Group.destroyEach();
    }
  }
}

function spawndiamonds(){
  if(frameCount%333===0&&frameCount%89!==0&&frameCount%800!==0){
  diamonds=createSprite(315,0);
  diamonds.velocityY=3;
  diamonds.addImage(diamondsImage)
  diamonds.scale=0.2;
  diamonds.lifetime=300;
  diamondsGroup.add(diamonds);

  if(player.isTouching(diamondsGroup)){
    diamondsGroup.destroyEach();
  }
  }
}
  
  




