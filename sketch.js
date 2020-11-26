var fixedRect, movingRect,Rect1,Rect2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  Rect1=createSprite(200,200,50,50);
  Rect1.shapeColor="pink";
  Rect2=createSprite(600,200,50,50);
  Rect2.shapeColor="blue";

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
  Rect1.velocityX=5;
  Rect2.velocityX=-5;
}

function draw() {
  background(0,0,0);  

 Bounce(fixedRect,movingRect);
 Bounce(Rect1,Rect2);
  
  drawSprites();
}

function Bounce(A1,A2){
  if (A1.x - A2.x < A2.width/2 + A1.width/2
    && A2.x - A1.x < A2.width/2 + A1.width/2) {
  A1.velocityX = A1.velocityX * (-1);
  A2.velocityX = A2.velocityX * (-1);

}
if (A1.y - A2.y < A2.height/2 + A1.height/2
  && A2.y - A1.y < A2.height/2 + A1.height/2){
  A1.velocityY = A1.velocityY * (-1);
  A2.velocityY = A2.velocityY * (-1);
}
}