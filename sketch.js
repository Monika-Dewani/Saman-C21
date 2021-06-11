function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400, 200, 50, 50);
  //movingRect=createSprite(200, 200, 50, 50);

  fixedRect.shapeColor="pink";
  //movingRect.shapeColor="Green";

  object=createSprite(200, 200, 50, 50);

  object.shapeColor="brown";
  object.velocityX=1;
  fixedRect.velocityX=-1;
}

function draw() {
background(0); 

// movingRect.x=World.mouseX;
// movingRect.y=World.mouseY;
//console.log((movingRect.x-fixedRect.x)+"/"+(movingRect.width/2+fixedRect.width/2));


// if(Touch(object,movingRect)){
//   object.shapeColor="red";
//         movingRect.shapeColor="red";

// }
// else{
//   object.shapeColor="brown";
//   movingRect.shapeColor="Green";

// }


bounce(object,fixedRect);




  drawSprites();
}









        


