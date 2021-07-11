const Engine =Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var bg ;
var a , b;
var dest;
 

var snowball = [];
var snowball2 = [];
var snowball3 = [];
var snowball4 = [];
var snowball5 = [];

function preload()
{
  bg = loadImage("BGImg.png");
  sound = loadSound("BGmusic.mp3")
 
}
function setup(){
  var canvas = createCanvas(1200,700);
  engine = Engine.create();
  world = engine.world;
  sound.loop()


}

function draw() 
{
  background(bg);
 // Snowman.display("Snowman.png")  
  Engine.update(engine); 
  
 
   if (frameCount%50 === 0) 
   {
    snowball.push(new Snow(random(07,1195),0,15));
   } 
    for(var q = 0;q<=snowball.length-1;q++)
    {
      snowball[q].display();
    }
    

                  if (frameCount%40 === 0) 
                {
                  snowball2.push(new Snow2(random(10,1185),0,15));
                } 
                for(var p = 0;p<=snowball2.length-1;p++)
                {
                  snowball2[p].display();
                }


   if(frameCount%30 === 0)
   {
    snowball3.push(new Snow3(random(15,1175),0,15))
   }
   for(var r = 0; r<=snowball3.length-1;r++)
   {
     snowball3[r].display();
   }

                if(frameCount%20 === 0)
                {
                  snowball4.push(new Snow4(random(05,1185),0,15))
                }
                for(var k = 0; k<= snowball4.length-1;k++)
                {
                snowball4[k].display();
                }
   if(frameCount% 10 === 0)
   {
    snowball5.push(new Snow5(random(05,1195),0,05))
   }  
   for(var d = 0 ; d<= snowball5.length-1;d++)
   {
     snowball5[d].display();
   }  
         
}

