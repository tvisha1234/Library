var fixedRect, movingRect;
var shape1, shape2, shape3 , shape4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  shape1 = createSprite(100,200,80,30);
  shape1.shapeColor = "blue";
  shape2 = createSprite(200,200,80,30);
  shape2.shapeColor = "pink";
  shape3 = createSprite(300,200,80,30);
  shape3.shapeColor = "purple";
  shape4 = createSprite(400,200,80,30);
  shape4.shapeColor = "green";
  
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect, shape1)) {
  movingRect.shapeColor = "blue";
  shape1.shapeColor = "blue";
  }
  else {
    movingRect.shapeColor = "green";
    shape1.shapeColor = "green";
  }

  
  drawSprites();
}

