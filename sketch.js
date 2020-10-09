var movingrect, fixedrect;

function setup() {

  createCanvas(800,400);
  fixedrect=createSprite(700, 200, 50, 50);
  fixedrect.shapeColor="red";

  movingrect=createSprite(200,200,70,50);
  movingrect.shapeColor="red";
  movingrect.velocityX=2;
  
}

function draw() {
  background(255,255,255);
 /* movingrect.x=World.mouseX;
  movingrect.y=World.mouseY;
   
  if(movingrect.x-fixedrect.x<movingrect.width/2+fixedrect.width/2 &&
    fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2 &&
    movingrect.y-fixedrect.y<movingrect.height/2+fixedrect.height/2 &&
    fixedrect.y-movingrect.y<fixedrect.height/2+movingrect.height/2)
    {
      movingrect.shapeColor="black";
      fixedrect.shapeColor="black";
    }
    else
    {
      movingrect.shapeColor="red";
      fixedrect.shapeColor="red";
    }*/

   /*if(movingrect.x-fixedrect.x<movingrect.width/2+fixedrect.width/2 &&
    fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2)
    {
      fixedrect.velocityX=movingrect.velocityX;
      movingrect.velocityX=-(movingrect.velocityX)
    }*/
  
    if(movingrect.x-fixedrect.x<movingrect.width/2+fixedrect.width/2 &&
      fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2)
      {
        movingrect.velocityX=0;
      }

      


    drawSprites();
}