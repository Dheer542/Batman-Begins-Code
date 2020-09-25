const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var umbrellaImg;
var maxDrops = 100;
function preload(){
    umbrellaImg = loadImage("images/umbrellaImg.png");
}

function setup(){
   createCanvas(400,800);

   engine = Engine.create(); 
   world = engine.world; 
   
   for(var i = 0; i <maxDrops; i++){
    Drops.push(new createDrop(random(0,400), random(0, 400)));
}   
}

function draw(){
    drawSprites();
}   

