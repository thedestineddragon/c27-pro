
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload(){}

function setup() {
createCanvas(800, 700);


engine = Engine.create();
world = engine.world;

bobObject1 = new Bob(150,500,100);
bobObject2 = new Bob(250,500,100);
bobObject3 = new Bob(350,500,100);
bobObject4 = new Bob(450,500,100)
bobObject5 = new Bob(550,500,100)
bobroof = new Ground(800,250,2000,15)
rope1 = new Rope(bobObject1.body,bobroof.body,-645,0);
rope2 = new Rope(bobObject2.body,bobroof.body,-555,0);
rope3 = new Rope(bobObject3.body,bobroof.body,-450,0);
rope4 = new Rope(bobObject4.body,bobroof.body,-345,0);
rope5 = new Rope(bobObject5.body,bobroof.body,-240,0);
}
function draw() {
rectMode(CENTER);
background(0);
Engine.update(engine);
bobObject1.display();
bobObject2.display();
bobObject3.display();
bobObject4.display();
bobObject5.display();
bobroof.display();
rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();
drawSprites(); 
}



