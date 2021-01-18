
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world;
var ground,paper,dustbin,bin,binimg;

function preload(){
  binImg=loadImage("bin.png");
}

function setup() {
	createCanvas(1000, 700);

	
   
	engine = Engine.create();
	world = engine.world;

  bin=createSprite(850,600,150,100);
  bin.addImage(binImg);
  bin.scale=0.45;


  dustbin=new Dustbin(800,615);
   paper=new Paper(100,420,30)
   ground=new Ground(500,680,1000,20);
	//Create the Bodies Here.

	

   
	


	

	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);
  background("white");
   dustbin.display();
   paper.display();
   ground.display();

   drawSprites();
 
 
}

function keyPressed(){
if(keyCode===UP_ARROW){

	Matter.Body.applyForce(paper.body,paper.body.position,{x:43,y:-40});

}


}
