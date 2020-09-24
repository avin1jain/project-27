
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint =Matter.Constraint

var ground
var   box2,  box1, box3, paper1
var engine, world;

function preload()
{
	dustbin2IMG=loadImage("dustbingreen.png")


}

function setup() {
	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	createCanvas(1200, 400);
	rectMode(CENTER);
	
    box1= new Box(600,100,30,30);

	
	paper1= new paperball(600,100,30);

	rope=new Rope(paper1.body,box1.body, -paper1Diameter*2,0);


	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color("yellow")

	ground = Bodies.rectangle(width/2, 350, width, 10 , {isStatic:true} );
 	World.add(world, ground);


  
}


function draw() {
Engine.update(engine);
  rectMode(CENTER);
  background(222);
  box1.display();
  rope.display();
  paper1.display();
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === UP_ARROW) {
 Matter.Body.applyForce(paper1.body,paper1.body.position ,{ x:30,y:-30})
}
}



