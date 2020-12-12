
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paperBall = new Paper();
	dustbinLeft = new Bin(500, 500, 20, 100);
	dustbinRight = new Bin(750, 500, 20, 100);
	dustbinBottom = new Bin((505+745)/2, 540, 250, 20);
	ground = new Ground();

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  paperBall.display();
  dustbinBottom.display();
  dustbinLeft.display();
  dustbinRight.display();
  ground.display();

  hurl();
  
  drawSprites();
 
}

function hurl() {
	Body.applyForce(paperBall.body, paperBall.body.position, {x:85, y:85});
}

