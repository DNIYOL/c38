var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;
var tracks,ci1,ci2,ci3,ci4,groundImg;
var cars, car1, car2, car3, car4;

function preload(){
  tracks=loadImage("images/track.jpg");
  ci1=loadImage("images/car1.png");
  ci2=loadImage("images/car2.png");
  ci3=loadImage("images/car3.png");
  ci4=loadImage("images/car4.png");
  groundImg=loadImage("imagesground.png");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState===2){
   game.end();
  }
}
