// Physics Engine
// Matter engine, Matter bodies, Matter world

// Namespacing - nicknameing

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine1, world, ground, box1, box2, box3, box4, box5;
var log1, log2, log3, log4;
var pig1, pig2;

function setup() {
  createCanvas(1200, 400);

  engine1 = Engine.create(); // Matter.Engine.create();
  world = engine1.world;

  // JSON Format  - Javscript object notation

  box1 = new Box(700, 320, 70, 70);
  box2 = new Box(920, 320, 70, 70);
  box3 = new Box(700, 240, 70, 70);
  box4 = new Box(920, 240, 70, 70);
  box5 = new Box(810,160,70,70);
  
  pig2 = new Pig(810,220);

  ground = new Ground(600,390,1200,20);

  pig1 = new Pig(810,320);
  log1 = new Log(815,260,300,PI/2);
  log2 = new Log(810,160,300,PI/2);
  log3 = new Log(749,120,150,PI/7);
  log4 = new Log(869,120,150,-PI/7);

  bird =  new Bird(100,100);
  console.log(ground);
}

function draw() {
  background(0);
  Engine.update(engine1);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  pig1.display();
  pig2.display()
  log2.display();
  log1.display();
  log3.display();
  log4.display();
  bird.display();
}
