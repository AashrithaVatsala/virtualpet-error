var dog, dogImage;
var happyDog, DogImage2;
var database;
var foodS;
var foodStock;

function preload()
{
  dogImage = loadImage("images/doglmg1.png");
  DogImage2 = loadImage("images/doglmg.png");
}

function setup() {
  createCanvas(500, 500);

  foodStock = database.ref("Food");
  foodStock.on("value", readStock);
}


function draw() {  

  drawSprites();

  background(46, 139, 87);

  if (keyDown(UP_ARROW)) {
    
     database.ref("Food").value = value - 1;
     

  }

}



