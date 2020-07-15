const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var archer;
var redballoon, blueballoon, pinkballoon;
var carriage;


function setup(){
    var canvas = createCanvas(1500,600);
    engine= Engine.create()
    world = engine.world; 

 balloon1= new BalloonR(100,100,30,50);
 balloon2= new BalloonB(250,100,30,50);
 balloon3= new BalloonG(400,100,30,50);
 carriage= new Carriage(1310,300,80,60);

    
}
function draw(){
    background(0);
    Engine.update(engine);
    balloon1.display();
    balloon2.display();
    balloon3.display();
    carriage.display();
}

  





