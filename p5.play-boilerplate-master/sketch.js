var fixedRect
var movingRect


function setup() {
  createCanvas(1200,800);
 fixedRect=createSprite(400, 200, 50, 50);
 fixedRect.shapeColor="lime"

 movingRect=createSprite(800, 500, 150, 50);
 movingRect.shapeColor="lime"

 movingRect.debug=true
 fixedRect.debug=true
}

function draw() {
  background(255,255,255);  
  movingRect.x = World.mouseX
  movingRect.y = World.mouseY

  if(movingRect.x-fixedRect.x < movingRect.width/2+fixedRect.width/2&&
    fixedRect.x - movingRect.x < movingRect.width/2+fixedRect.width/2&&
    movingRect.y-fixedRect.y < movingRect.width/2+fixedRect.width/2&&
    fixedRect.y - movingRect.y < movingRect.width/2+fixedRect.width/2
    ){
    fixedRect.shapeColor="red"
    movingRect.shapeColor="red"
  }
  else{
    fixedRect.shapeColor="lime"
    movingRect.shapeColor="lime"
  }

  

  drawSprites();
}