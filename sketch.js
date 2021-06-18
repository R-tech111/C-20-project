
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var planeBody;
var ball;
var block1;
var block2;

var rotator;
var rotator2;
var rotator3;

var angle = 60;
var angle2 = 180;
var angle3 = 270;

var particle1;
var particle2;
var particle3;
var particle4;
var particle5;


function preload()
{
	
}

function setup() {
	createCanvas(400,400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	var plane_options = { isStatic: true }
	planeBody = Bodies.rectangle(200,390,200,10,plane_options);
	World.add(world,planeBody);

	var block1_options = { isStatic: true }
	block1 = Bodies.rectangle(100,270,150,10,block1_options);
	World.add(world,block1);

	var block2_options = { isStatic: true }
	block2 = Bodies.rectangle(300,270,150,10,block2_options);
	World.add(world,block2);

	var rotator_options = { isStatic: true }
	rotator = Bodies.rectangle(200,120,130,15,rotator_options);
	World.add(world,rotator);

	
	var rotator2_options = { isStatic: true }
	rotator2 = Bodies.rectangle(200,120,130,15,rotator2_options);
	World.add(world,rotator2);

	
	var rotator3_options = { isStatic: true }
	rotator3 = Bodies.rectangle(200,120,130,15,rotator3_options);
	World.add(world,rotator3);

	var particle1_options = { 
		restitution: 0.4,
		friction: 0.2
	}
	particle1 = Bodies.circle(220,10,10,particle1_options);
	World.add(world,particle1);

	
	var particle2_options = { 
		restitution: 0.4,
		friction: 0.2
	}
	particle2 = Bodies.circle(220,10,10,particle2_options);
	World.add(world,particle2);

	var particle3_options = { 
		restitution: 0.4,
		friction: 0.2
	}
	particle3 = Bodies.circle(220,10,10,particle3_options);
	World.add(world,particle3);

	var particle4_options = { 
		restitution: 0.4,
		friction: 0.2
	}

	particle4 = Bodies.circle(220,10,10,particle4_options);
	World.add(world,particle4);

	var particle5_options = { 
		restitution: 0.4,
		friction: 0.2
	}

	particle5 = Bodies.circle(220,10,10,particle5_options);
	World.add(world,particle5);
	
	
	rectMode(CENTER);
	ellipseMode(CENTER);
	
  
}


function draw() {
	background('rgba(0,255,0, 0.25)');
	fill("brown");
	rect(planeBody.position.x, planeBody.position.y,400,20);

	fill("brown");
	rect(block1.position.x,block1.position.y,130,15);

	fill("brown");
	rect(block2.position.x,block2.position.y,130,15);

	fill("brown");
	Body.rotate (rotator,angle);
	push();
	translate(rotator.position.x, rotator.position.y);
	rotate(angle);
	rect(0, 0, 130, 15);
	pop()
	angle = angle + 10;
	
    fill("brown");
	Body.rotate (rotator2,angle);
	push();
	translate(rotator2.position.x, rotator2.position.y);
	rotate(angle2);
	rect(0, 0, 130, 15);
	pop()
	angle2 = angle2 + 25;

	fill("brown");
	Body.rotate (rotator3,angle3);
	push();
	translate(rotator3.position.x, rotator3.position.y);
	rotate(angle3);
	rect(0, 0, 130, 15);
	pop()
	angle3 = angle3 + 18;

	ellipse(particle1.position.x,particle1.position.y,20,20);
	ellipse(particle2.position.x,particle2.position.y,20,20);
	ellipse(particle3.position.x,particle3.position.y,20,20);
	ellipse(particle4.position.x,particle4.position.y,20,20);
	ellipse(particle5.position.x,particle5.position.y,20,20);
	

  	Engine.update(engine);

}



