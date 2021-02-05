var baloon ,database;
var position;

function setup(){
    database = firebase.database(); 
    createCanvas(500,500);
    
    baloon = createSprite(250,250,100,80);
    baloon.shapeColor = "red";


    var baloonPosition = database.ref('baloon/position');
  baloonPosition.on("value",readPosition );
} 

function draw(){
    background("images35/background.png");
    if(position !== undefined){
        if(keyDown(LEFT_ARROW)){
            writesposition (-1,0);
         }
         else if(keyDown(RIGHT_ARROW)){
            writesposition (1,0);
         }
         else if(keyDown(UP_ARROW)){
            writesposition (0,-1);
     
         }
         else if(keyDown(DOWN_ARROW)){
            writesposition (0,+1);
         }
         drawSprites();
     }} 







 



function readPosition(data)
{
 position = data.val()
 baloon.x = position.x
 baloon.y = position.y

    } 

    function writesposition(x,y)
    {
     database.ref('baloon/position').set({
         x:position.x+x,
         y:position.y+y
     })


        }