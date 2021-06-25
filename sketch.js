const Engine = Matter.Engine;
const World= Matter.World;
const Bodies=Matter.Bodies;
var raindrops;
var maxDrops=100;
var boy1;
var thunder1;
var thunder2;
var thunder3;
var thunder4;
var rand;
var boy_image;

function preload(){
    thunder1=loadImage("1.png")
    thunder2=loadImage("2.png")
    thunder3=loadImage("3.png")
    thunder4=loadImage("4.png")
    boy_image=loadAnimation("walking_1.png","walking_2.png","walking_3.png","walking_4.png","walking_5.png","walking_6.png","walking_7.png","walking_8.png")
}

function setup(){
   var canvas=createCanvas(800,400)
  
   engine=Engine.create()
   world=engine.world;
   raindrops=new Drops(random(0,800),random(0,400),5)
   boy1=new Boy(500,300,150)
   //boy1.addAnimation("walking",boy_image)
  
   Engine.run(engine);
}

function draw(){
    background("white")
    
    raindrops.display()
    boy1.display()
  

    for(var i;i<maxDrops;i++){
    drops.push(new createDrop(random(0,800),random(0,400)));
}

      rand=Math.round(random(1,4));
      if(frameCount%80===0){
      thunderCreatedFrame=frameCount;
      thunder=createSprite(random(10,370),random(10,30),10,10);
      switch(rand){
        case 1:thunder.addImage(thunder1);
        break;
        case 2:thunder.addImage(thunder2);
        break;
        case 3:thunder.addImage(thunder3);
        break;
        case 4:thunder.addImage(thunder4);
        break;
        default:break;
    }
      thunder.scale=random(0.3,0.6)
}
}
    

