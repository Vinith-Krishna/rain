var rain;

function setup() {
  createCanvas(800,400);
}
function draw() {
  background("yellow");  
 
  rain();
  rain1();
  drawSprites();
}
function rain(){
  if(frameCount % 5 === 0){
  
 for(i = 10; i < 791; i=i+10){
    var rain = createSprite(i,20,2,5);
    rain.shapeColor = "blue";
    rain.velocityY = 5;
 }  
  }
}
function rain1(){
  if(frameCount % 7 === 0){
  
 for(i = 15; i < 791; i=i+10){
    var rain = createSprite(i,20,2,5);
    rain.shapeColor = "blue";
    rain.velocityY = 5;
 }  
  }
}