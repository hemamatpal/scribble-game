var car1,car2,wheel1,wheel2;
var gameState,playerCount;
var game,cars;
var database;
var player,form;
var allPlayers;

var r;

var player1,player2,player3,player4,player5;

function preload()
{
    player1=loadImage("player1.jpg")
    player2=loadImage("player2.jpeg")
    player3=loadImage("player3.jpg")
    player4=loadImage("player4.jpg")
    player5=loadImage("player5.jpg")
    skateboardimage=loadImage("scribblegame.gif")
    triangleimage=loadImage("trianglewheel.png")
}



function setup()
{
    createCanvas(displayWidth,displayHeight);
    database=firebase.database();
    gameState=0;
    playerCount=0;

    game= new Game();
    game.getState();
    game.start()
    
}


function draw()
{
    background(0)
        
    if(playerCount===2){
        game.update(1)
    }

    if(gameState===1){
        clear();
        game.play();
    }

    if(gameState===2){
        game.end();
    }
}