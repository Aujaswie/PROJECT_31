const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particles = [];
var pinko = [];
var division = [];
var divisionHeight = 300;
var engine, world;
var ground;



function setup(){
   createCanvas(800,400);

    engine = Engine.create();

    world = engine.world;

//create the ground
    platform = new Ground(400, 370, 800, 20);


//to create the plinkos
  for (var j = 25; j <=width; j=j+50) 
  {
  
     pinkos.push(new Pinko(j,75));
  }

  for (var j = 25; j <=width-10; j=j+50) 
  {
  
     pinkos.push(new Pinko(j,175));
  }

   for (var j = 25; j <=width; j=j+50) 
  {
  
     pinkos.push(new Pinko(j,275));
  }

   for (var j = 25; j <=width-10; j=j+50) 
  {
  
     pinkos.push(new Pinko(j,375));
     
  }


//create the divisions
    for (var k = 0; k<= width; k = k +80)
    {
      divisions.push (new Division(k, height - divisionHeight / 2, 10 , divisionHeight))
    }



function draw(){

  background(0);  
  Engine.update(engine);

   ground.display();


   for (var i = 0; i < pinko.length; i++) {
     
    pinkos[i].display();
    
  }

  if(frameCount%60===0){
    particle.push(new Particle(random(width/2-30, width/2+30), 10,12));
    
  }

  for (var j = 0; j < particle.length; j++) {
  
    particles[j].display();
  }

  for (var k = 0; k < division.length; k++) {
  
    divisions[k].display();
  }

}


}
