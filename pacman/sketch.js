let wall1, wall2,wall3,wall4,wall5,wall31,wall34,wall32,wall33

function preload()
{

}


function setup()
{
createCanvas(1400,680)
wall1=createSprite(700,50,1200,3);
wall1.shapeColor="blue"

wall2=createSprite(700,58,1190,3);
wall2.shapeColor="blue"

wall3=createSprite(700,500,1200,3);
wall3.shapeColor="blue"

wall31=createSprite(700,500,1200,3);
wall31.shapeColor="blue"

}

function draw()
{
background("black")

drawSprites()
}