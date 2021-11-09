
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var groundObj;
function preload()
{
	
}

function setup() {
	createCanvas(1365, 691);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_option ={
		isStatic:false,
		restitution:1,
		friction:0,
		density:1.2
	}
	ball = Matter.Bodies.circle(200,100,20,ball_option);
    World.add(world,ball)
    //width
	groundObj = new Ground(width/2,670,99999,20);
	leftside = new Ground(800,600,20,120);
	rightside = new Ground(1100,600,20,120);
	topblock = new Ground(1365/2,10,1365,20)
	rightblock = new Ground(1355,691/2,20,691)
	leftblock = new Ground(10,691/2,20,691)



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20)
 // ball.display();
   

  groundObj.display();
  leftside.display();
  rightside.display();
  topblock.display();
  leftside.display();
  rightside.display();

  if (keyDown ("up")){
	Matter.Body.applyForce(ball,ball.position,{x:10,y:-10});
}
if (keyDown ("down")){
	Matter.Body.applyForce(ball,ball.position,{x:-10,y:-10});
}
}



