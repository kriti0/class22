var mr, fr;
var ob1, ob2, ob3, ob4;
var edges;

function setup() {
  createCanvas(1200,800);
  fr = createSprite(600, 400, 50, 80);
  fr.shapeColor = "green";
  fr.debug = true;
  mr = createSprite(400,200,80,30);
  mr.shapeColor = "green";
  mr.debug = true;
  ob1 = createSprite(100,100,50,50);
  ob1.shapeColor = "green";
  ob2 = createSprite(200,100,50,50)
  ob2.shapeColor = "green";
  ob3 = createSprite(300,100,50,50);
  ob3.shapeColor = "green";
  ob4 = createSprite(400,100,50,50);
  ob4.shapeColor = "green";
}

function draw() {
  background(0,0,0);  
  mr.x = World.mouseX;
  mr.y = World.mouseY;


  if(isTouching(mr, ob1)){
    return true;
  }
  if(isTouching(mr, ob3)){
    return true;
  }

  drawSprites();
}

function isTouching(object1, object2){

  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
      object1.shapeColor = "red";
      object2.shapeColor = "red";
}
else {
  object1.shapeColor = "green";
  object2.shapeColor = "green";
}

}