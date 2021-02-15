const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Mouse.Constraint;

var engine, world;
var backgroundImg;
var hero;
var monster;
var block1, block2, block3, block4, block5, block6, block7, block8;

var bg = "images/GamingBackground.png";

function preload() {
  //preload the images here
  getBackgroundImg();

}

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;

  // create sprites here

}

function draw() {
  background(0);

  ground = new Ground(600,height,1200,20);
  hero = new Hero(200,50);
  monster = new Monster(810, 350);
  
  block1 = new Block(230,275,30,40);
  block2 = new Block(260,275,30,40);
  block3 = new Block(290,275,30,40);
  block4 = new Block(320,275,30,40);
  block5 = new Block(350,275,30,40);
  block6 = new Block(380,275,30,40);
  block7 = new Block(410,275,30,40);
  block8 = new Block(260,235,30,40);

  Engine.update(engine);
  ground.display();
  hero.display();
  monster.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();

  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(hero.body, {x: mouseX , y: mouseY});
}

