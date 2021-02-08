var ss , ssImg ;
var obs , fuel ;
function preLoad(){
  jetImg = loadImage("jet.png");
}


function setup(){
  canvas = createCanvas(displayWidth -20 ,displayHeight -30 );
  ss = createSprite(displayWidth/2 -20 , displayHeight /2 +70 , 40, 140);
}


function draw(){
  background("black");
  camera.position.y = ss.y;


  if(keyDown(UP_ARROW)){
    ss.y = ss.y - 30;
  }

  if(keyDown(DOWN_ARROW)){
    ss.y = ss.y + 30;
  }

  if(keyDown("LEFT_ARROW")){
    ss.x = ss.x - 30;
  }

  if(keyDown(RIGHT_ARROW)){
    ss.x = ss.x + 30;
  }
  camera.position.x = ss.position.x;
 
  drawSprites();
}

function spawnObs(){
  if(frameCount % 0){
obs = createSprite(100,200,30,30);
obs.x = random((100,1000));

  }
}