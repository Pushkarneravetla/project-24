const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer, plane, stone, iron;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20);
    hammer = new Hammer(10,100);
    stone = new Stone(600, 300);
    iron = new Stone(400, 250);


}

function draw(){
    background("green");
    Engine.update(engine);


    plane.display();
    hammer.display();
    stone.display();
    iron.display();
 
}