
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var roof;
var bob1;
var rope1;



function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roof = new Roof(390,200,280,20);
	World.add(world,roof);

	

	bob1 = new Bob(300,440,200,200);
	World.add(world,bob1);

	bob2 = new Bob(340,440,200,200);
	World.add(world,bob2);

	bob3 = new Bob(380,440,200,200);
	World.add(world,bob3);

	bob4 = new Bob(420,440,200,200);
	World.add(world,bob4);

	bob5 = new Bob(460,440,200,200);
	World.add(world,bob5);

	rope1 = new Rope(bob1.body,roof.body,-90,-200);
	World.add(world,rope1);

	rope2 = new Rope(bob2.body,roof.body,-50,-200);
	World.add(world,rope2);

	rope3 = new Rope(bob3.body,roof.body,-10,-200);
	World.add(world,rope3);

	rope4 = new Rope(bob4.body,roof.body,30,-200);
	World.add(world,rope4);

	rope5 = new Rope(bob5.body,roof.body,70,-200);
	World.add(world,rope5);




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("skyblue");

 roof.display();

 bob1.display();
 bob2.display();
 bob3.display();
 bob4.display();
 bob5.display();

 rope1.display();
 rope2.display();
 rope3.display();
 rope4.display();
 rope5.display();

 

 drawSprites();
 keyPressed();
 


}

function keyPressed(bob1) {

	if(keyCode === UP_ARROW){ 
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:85,y:-85});
	}
	
}


	


