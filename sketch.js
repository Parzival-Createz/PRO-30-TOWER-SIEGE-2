const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var stand1, stand2, box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15, box16, box17, box18, box19, box20, box21, box22, box23, box24, box25;

var polygon, slingshot, polygonImg;
var gameState = 0;

function setup() {
    createCanvas(1100, 500);

    engine = Engine.create();
    world = engine.world;

    polygon = new Box(200, 250, 30, 30);
    polygonImg = loadImage("polygon.png");
    // polygon = Bodies.circle(100, 250, 20);
    // World.add(world, polygon);

    slingshot = new Slingshot(polygon.body, { x: 200, y: 250 })

    base1 = new Ground(500, 400, 350, 10);
    base2 = new Ground(900, 250, 250, 10);

    box1 = new Box(820, 220, 40, 40);
    box2 = new Box(860, 220, 40, 40);
    box3 = new Box(900, 220, 40, 40);
    box4 = new Box(940, 220, 40, 40);
    box5 = new Box(980, 220, 40, 40);

    box6 = new Box(860, 180, 40, 40);
    box7 = new Box(900, 180, 40, 40);
    box8 = new Box(940, 180, 40, 40);

    box9 = new Box(900, 140, 40, 40);

    box10 = new Box(380, 370, 40, 40);
    box11 = new Box(420, 370, 40, 40);
    box12 = new Box(460, 370, 40, 40);
    box13 = new Box(500, 370, 40, 40);
    box14 = new Box(540, 370, 40, 40);
    box15 = new Box(580, 370, 40, 40);
    box16 = new Box(620, 370, 40, 40);

    box17 = new Box(420, 330, 40, 40);
    box18 = new Box(460, 330, 40, 40);
    box19 = new Box(500, 330, 40, 40);
    box20 = new Box(540, 330, 40, 40);
    box21 = new Box(580, 330, 40, 40);

    box22 = new Box(460, 290, 40, 40);
    box23 = new Box(500, 290, 40, 40);
    box24 = new Box(540, 290, 40, 40);

    box25 = new Box(500, 250, 40, 40);
}

function draw() {
    background("grey");

    Engine.update(engine);

    fill("white");
    textSize(20);
    text("Drag the hexagonal stone and release it, to launch towards the blocks.", 200, 25);

    base1.display();
    base2.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();

    slingshot.display();

    // polygon.display();
    imageMode(CENTER);
    image(polygonImg, polygon.body.position.x, polygon.body.position.y, 40, 40);
}

function mouseDragged() {
    if (gameState === 0) {
        Matter.Body.setPosition(polygon.body, { x: mouseX, y: mouseY });
    }
}

function mouseReleased() {
    slingshot.fly();
    gameState = 1;
}

function keyPressed() {
    if (keyCode === 32) {
        Matter.Body.setPosition(polygon.body, { x: 200, y: 250 });
        slingshot.attach(polygon.body);
        gameState = 0;
    }
}