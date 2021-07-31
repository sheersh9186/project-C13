var garden, rabbit;
var gardenImg, rabbitImg;
var apple, leaf;
var appleImg, leafImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png")
  leafImg = loadImage("leaf.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  
  createApples();
   createLeaves();

  rabbit.x=mouseX
   drawSprites();
}

   function createApples() {
   if (frameCount % 60 === 0) {
     apple = createSprite(600,100,40,10);
    apple.x = Math.round(random(10,380));
    apple.addImage(appleImg);
    apple.scale = 0.1;
    apple.velocityY = 3;
     //assign lifetime to the variable
    apple.lifetime = 130;
   }
   }

   function createLeaves() {
    if (frameCount % 80 === 0) {
      leaf= createSprite(600,100,40,10);
      leaf.x = Math.round(random(10,380));
      leaf.addImage(leafImg);
      leaf.scale = 0.1;
      leaf.velocityY = 3;
      //assign lifetime to the variable
      leaf.lifetime = 130;
    }
    }