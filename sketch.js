var Movingrect,fixrect
function setup() {
  createCanvas(1200,800);
 Movingrect=createSprite(500,200,30,80);
 Movingrect.shapeColor="GREEN"
 fixrect=createSprite(600,400,80,30)
 fixrect.shapeColor="GREEN"
}

function draw() {
  background(255,255,255);
  Movingrect.x=mouseX
    Movingrect.y=mouseY
if(fixrect.x - Movingrect.x < fixrect.width/2 + Movingrect.width/2 &&
  Movingrect.x - fixrect.x < fixrect.width/2 + Movingrect.width/2 &&
  fixrect.y - Movingrect.y < fixrect.height/2 + Movingrect.height/2 &&
  Movingrect.y - fixrect.y < fixrect.height/2 + Movingrect.height/2)
{
  Movingrect.shapeColor="YELLOW"
  fixrect.shapeColor="YELLOW"
}
else{
  Movingrect.shapeColor="GREEN"
  fixrect.shapeColor="GREEN"

}





  drawSprites();
 

}