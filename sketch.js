
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var world, engine;
var bob1;

function setup() {
	createCanvas(400, 400);

	engine = Engine.create();
	world = engine.world;

	roof = new Roof(200, 100, 200, 30)
	bob1 = new Bob(120, 250, 40);
	bob2 = new Bob(160, 250, 40);
	bob3 = new Bob(200, 250, 40);
	bob4 = new Bob(240, 250, 40);
	bob5 = new Bob(280, 250, 40);

	rope1 = new Rope(bob1.body, roof.body, -bob1.radius*2, 0)
	rope2 = new Rope(bob2.body, roof.body, -bob2.radius*2+40, 0)
	rope3 = new Rope(bob3.body, roof.body, -bob3.radius*2+80, 0)
	rope4 = new Rope(bob4.body, roof.body, -bob4.radius*2+120, 0)
	rope5 = new Rope(bob5.body, roof.body, -bob5.radius*2+160, 0)

	Engine.run(engine);
}

function draw() {
  background("red");
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  roof.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
}

function keyPressed(){
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(bob1.body, bob1.body.position, {x:-100,y:0})
	}
}
