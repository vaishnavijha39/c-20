var fixedRect,movingRect


function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(200, 200, 30, 80);
  fixedRect.shapeColor = "green"

  movingRect = createSprite(400,200,80,30)
  movingRect.shapeColor = "green"

  fixedRect.debug = true
  movingRect.debug = true
}

function draw() {
  background("pink");  
movingRect.x = World.mouseX
movingRect.y = World.mouseY

if  (fixedRect.x - movingRect.x < movingRect.width/2+fixedRect.width/2
  && movingRect.x- fixedRect.x < movingRect.width/2+fixedRect.width/2 
  && fixedRect.y - movingRect.y < movingRect.height/2+fixedRect.height/2
  && movingRect.y - fixedRect,y < movingRect.height/2+ fixedRect.height/2){
  fixedRect.shapeColor = "red"
  movingRect.shapeColor = "red"
}
else{
  fixedRect.shapeColor = "green" 
  movingRect.shapeColor = "green"
 }

 
  drawSprites();
}

