var starImg,bgImg;
var star, starBody;
var fairy,fairyImg;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(d)
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	fairyImg = loadImage("images/fairy.png");
	fairyImg =loadImage("images/fairyImage1.png");
	fairyImg =loadImage("images/fairyImage2.png");
}

function setup() {
	createCanvas(800, 750);
	fairyImg=loadAnimation("image/fairyImage1.png","image/fairyImage2.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

	fairy = createSprite(650,30);
	fairy.addImage(fairyImg);
	fairy.scale = 0.2;


	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  if(star.y> 470 && starBody.position.y >470 ){
	  Matter.Body.setStatic(starBody,true);
  }

  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	if (keyCode === LEFT_ARROW) {
	Matter.Body.setStatic(starBody,false); 	
	}
	if (keyCode === RIGHT_ARROW) {
		Matter.Body.setStatic(starBody,false); 	
		}
}
