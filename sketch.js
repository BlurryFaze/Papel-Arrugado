
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var ball;
var world,engine;
function preload()
{
	
}

function setup() {
	
	createCanvas(800, 700);
var ball_options={
	//Recuerda que al final de cada línea colocamos una "," y usamos ":" en lugar de "="
	isStatic :false,
	restitution:0.3,
	friction:0,
	density:1.2,
	
}
    ground = new Ground (790,690,10,1000),
	engine = Engine.create();
	world = engine.world;

	//4. creamos el objeto ball (tal como lo hiciste para los primeros objetos de Matter)  y lo agregamos al mundo
	ball = Bodies.circle(100,10,20,ball_options);
	World.add(world,ball);
	//5. Creamos la clase "ground" (puedes usar la clase que hicimos para el juego de los piratas)
	ground = Bodies.rectangle(0, height - 1, width * 2, 1, { isStatic: true });
	World.add(world, ground);
	Engine.run(engine);

  
}


function draw() {
  rectMode(CENTER);
  background(0);
 Engine.update(engine);
  drawSprites();
 ground0bj.display();
}




