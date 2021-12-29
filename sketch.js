var boyrunning_Img,boyrun_Img;
var ground1,boy1;
var groundImg,ground;
var stone,stoneImg;

function preload() {
 boyrunning_Img = loadAnimation("boy1.png","boy2.png","boy3.png","boy4.png","boy5.png","boy6.png","boy7.png","boy8.png","boy9.png");
groundImg = loadImage ("ground.png");
stoneImg = loadImage("obstacle1.png");
boyjumpImg = loadImage("boy5.png");
powerImg = loadImage("power.png");
obstacle3 = loadImage("obstacle3.png");

}

function setup() {
  createCanvas(windowWidth,windowHeight);
 


ground = createSprite(windowWidth/2,windowHeight/2+290,windowWidth+500,50);
ground.addImage("track",groundImg);
ground.scale=1.5
ground.velocityX=-7

boy1 = createSprite(windowWidth/2-500,windowHeight/2+195,50,50)
 boy1.addAnimation("run",boyrunning_Img);
 boy1.scale=0.5
 

 ground1 = createSprite(windowWidth/2,windowHeight/2+270,windowWidth,20);
 ground1.shapeColor="white"
 ground1.visible=false
 powergr = new Group();
}

function draw() {                
  background("skyblue");
 
  if((keyDown("SPACE"))) {
    boy1.velocityY =-5;
    
  }
boy1.velocityY+=0.2
 if(ground.x<560){
    ground.x=windowWidth/2-5
  }
      
if(boy1.isTouching(powergr)){
    powergr.destroyEach();
    boy1.scale+=0.1
  }

boy1.collide(ground1)
spawnobstacle();
spawnpower();
  drawSprites()
}


function spawnobstacle(){
  if(frameCount %200===0){
    var stone = createSprite(windowWidth/2+600,windowHeight/2+350,50,50)
    stone.debug=true
    stone.setCollider("rectangle",50,50)
      stone.addImage("obs",stoneImg)
      stone.scale=0.07
      stone.y = random(555,550);    
       stone.velocityX=-6

       
      }
}


function spawnpower(){
if (frameCount %500 ===0){
  var power = createSprite(windowWidth/2+600,windowHeight/2+170,50,50)
  power.addImage("pow",powerImg)
  power.scale=0.3
  power.velocityX=-5
  powergr.add(power)
}

}