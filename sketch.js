//variables declared
var bow,bowImg;
var arrowImg;
var board;
var score=0;
var edges;
var boardImg;
var arrowGroup;

//gamestate gien
var gameState="START";

function preload(){
  //images loaded
  boardImg=loadImage("target.jpg");
  bowImg=loadImage("bow and arrow.png");
  arrowImg=loadImage("arrow.png");

}

function setup() {
  createCanvas(displayWidth,displayHeight);

 
  //sprites created
  bow=createSprite(displayWidth/2+20,displayHeight/2+350,50,50);
  bow.addImage(bowImg);
  //bow.scale=0.5;
  board=createSprite(displayWidth/2-20,displayHeight/2-50,200,200);
  board.addImage(boardImg);
  board.scale=0.5;
  edges=createEdgeSprites();
  arrowGroup=createGroup();

  //visibility of bow
  bow.visible=true;
  

}

function draw() {
  

 background(255,255,255);  

 //gamestate when start 
 if(gameState==="START"){
    textSize(20);
    fill("yellow");
    textFont("comic sans MS");
    text("To start the game press S key",540,100);}

 if(keyDown("S")&&gameState==="START"){
    gameState="PLAY";
    board.velocityX=-2;
  }

  /*if(arrowGroup.x<=500||arrowGroup.x>=800){
  score=score-50;
  gameState="END";
  }*/

//gamestate end
  
 if(gameState==="END"){
    text("Game Over",500,100);
    board.velocityX=0;
  }
  
  //bounceoff commands
  board.bounceOff(edges[1]);
  board.bounceOff(edges[0]);
  board.bounceOff(edges[2]);
  board.bounceOff(edges[3]);

//gamestate play
  if(gameState==="PLAY"){
    bow.x=mouseX;
    spawnArrows();
  }

  //shoot();
  drawSprites();
  textSize(20);
  fill("black");
  textFont("comic sans MS");
  text("SCORE:"+score,displayWidth/4-40,displayHeight/4-20);
 
  //endstate condition
  if(score===500||score<0){
    gameState==="END";
    textFont("comic sans MS");
    text("Game Over",500,50);
    board.velocityX=0;
  }
}

//function for shooting the arrow
function spawnArrows(){
 if(keyDown("space")){
   var arrow=createSprite(1000,780,20,20);
    arrow.addImage(arrowImg);
    arrow.scale=0.5;
    arrow.velocityY=Math.round(random(-4,-8));
   // arrow.y=random(100,500);
    arrow.x=bow.x;
    arrow.lifetime=500;
    //arrow.x=random(500,1500);
    arrowGroup.add(arrow);
    console.log(arrow.x);
   /* if(arrow.x>500&&arrow.x<700){
      score=score+10;
    }
    if(arrow.x>100&&arrow.x<500){
      score=score+5;
    }
    if(arrow.x>700&&arrow.x<900){
      score=score+15;
    }
    if(arrow.x>900&&arrow.x<1100){
      score=score+20;
    }*/
 if(arrowGroup.isTouching(board)){
   score=score+50;
 }
}
}
/*function bounceOff(object1,object2){
  if(object1.x-object2.x<object2.width/2+object1.width/2&&
    object2.x-object1.x<object1.width/2+object2.width/2){
      object1.velocityX=object1.velocityX*(-1);
      object2.velocityX=object2.velocityX*(-1);
    }
    if(object1.y-object2.y<object2.height/2+object1.height/2&&
      object2.y-object1.y<object1.height/2+object2.height/2){
        object1.velocityY=object1.velocityY*(-1);
        object2.velocityY=object2.velocityY*(-1);
      }

}*/