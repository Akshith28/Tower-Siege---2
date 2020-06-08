const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var  slingShot,polygon;
var ground;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    
    box =new Box(425,330,50,50);
    box1 = new Box(475,330,50,50);
    box2 = new Box(525,330,50,50);
    box3 = new Box(575,330,50,50);
    box4 = new Box(455,280,50,50);
    box5 = new Box(505,280,50,50);
    box6 = new Box(555,280,50,50);
    box7 = new Box(480,230,50,50);
    box8 = new Box(530,230,50,50);

    box9 = new Box(835,180,50,50);
    box10 = new Box(875,180,50,50);
    box11 = new Box(930,180,50,50);
    box12 = new Box(975,180,50,50);
    box13 = new Box(855,130,50,50);
    box14 = new Box(905,130,50,50);
    box15 = new Box(955,130,50,50);
    box16 = new Box(880,90,50,50);
    box17 = new Box(930,90,50,50);
    ground = new Ground(500,350,200,10);
    ground1 = new Ground(900,200,200,10);
    
    ground2 = new Ground(600,395,1200,10);
    
    polygon = new Polygon(100,200,50,50);
    slingShot = new SlingShot(polygon.body,{x:150,y:100});

  
}

function draw(){
    background("yellow");
    Engine.update(engine);
    
    ground.display();
    ground1.display();
    
    ground2.display();

    fill("blue");
    box.display();
    box1.display();
    box2.display();
    box3.display();
    
    fill("green");
    box4.display();
    box5.display();
    box6.display();

    fill("red");
    box7.display();
    box8.display();

    fill("orange");
    box9.display();
    box10.display();
    box11.display();
    box12.display();

    fill("violet");
    box13.display();
    box14.display();
    box15.display();

    fill("white");
    box16.display();
    box17.display();

    slingShot.display();
   
    polygon.display();  
}

function mouseDragged() {
    Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY});
}

function mouseReleased() {
    slingShot.fly();
}

function keyPressed() {
    if (keyCode === 32) {
        slingShot = new SlingShot(polygon.body,{x:150,y:100});
    }
}
