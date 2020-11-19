var PLAY = 1;
var END = 0;
var gameState = PLAY;

var doreamon, doreamon_standing,doreamon_running,doreamon_scared;
var sky,skyImage;
var candy,candyImage;
var birds,birdsImage;

function preload() {
  doreamon_standing = loadImage("doreamon standing.png");
  doreamon_scared = loadImage("scared doreamon.png");
  skyImage = loadImage("sky.png");
  candyImage = loadImage("candy1.png");
  birdsImage = loadImage("nasty birds.png");
}
function setup() {
  createCanvas(600, 600);
  
  sky = createSprite(200,200,20,20);
  sky.addImage(skyImage);
  sky.scale = 5;
  sky.velocityY = 5;
  
  doreamon = createSprite(200,200,20,20);
  doreamon.addImage(doreamon_standing);
  doreamon.scale = 0.1;
  
  birdGroup = createGroup();
  candyGroup = createGroup();
  
}

function draw() {
  background(220);
  if (gameState === PLAY){
  if (keyDown("space")){
    doreamon.velocityY = -5;
  }
    
    if (keyDown("left")){
      doreamon.velocityX = -2;
    }
    
     if (keyDown("right")){
      doreamon.velocityX = 2;
    }
  
  doreamon.velocityY = doreamon.velocityY + 0.2;
  birds();
  candy();
   
   if (sky.y > 300){
      sky.y = 100;
    }
    
    if (birdGroup.isTouching(doreamon)){
      gameState = END;
    }
  }
  if (gameState === END){
    birdGroup.setVelocityEach(0);
    candyGroup.setVelocityEach(0);
    birdGroup.destroyEach();
    candyGroup.destroyEach();
    doreamon.velocityY = 0;
    doreamon.addImage(doreamon_scared);
    sky.velocityY = 0;
    doreamon.velocityX = 0;
    
  }
  
  drawSprites();
}

function birds(){
  if (frameCount % 80 === 0){
    var bird = createSprite(300,550,20,20);
    bird.x = Math.round(random(100,400));
    bird.addImage("bird",birdsImage);
    bird.scale = 0.3;
    bird.velocityY = -6;
    bird.lifeTime = 100;
      birdGroup.add(bird);
  }
}

function candy(){
  if (frameCount % 100 === 0){
    var candy = createSprite(300,550,20,20);
    candy.x = Math.round(random(50,450));
    candy.addImage("candy",candyImage);
    candy.scale = 0.1;
    candy.velocityY = -7;
    candy.lifeTime = 100;
    candyGroup.add(candy);
  }
}
