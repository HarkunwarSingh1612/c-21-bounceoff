var fixedRect, movingRect;

function setup() {
  createCanvas(800,400);
 fixedRect= createSprite(200, 200, 50, 80);
 fixedRect.shapeColor="green";
 fixedRect.debug=true;
 fixedRect.velocityY=4;
 movingRect= createSprite(400, 200, 80, 30);
 movingRect.shapeColor="green";
 movingRect.debug=true;
 movingRect.velocityY=-4;


}

function draw() {
  background(0,0,0);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  bounceOff(movingRect, fixedRect);
  
  
  drawSprites();
}

