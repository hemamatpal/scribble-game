class Game {
    constructor(){}
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        player = new Player();
        r=Math.round(random(1,5));
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        form = new Form()
        form.display();
      }
      car1= createSprite(100,100,200,200);
      car2= createSprite(150,100,200,200);
      //wheel1= createSprite(10,10,200,200);
      //wheel2= createSprite(10,10,200,200);
      cars=[car1,car2];
    }
  
    play(){
      form.hide();
      textSize(30);
      text("Game Start", 120, 100)
      Player.getPlayerInfo();
      player.getPlayersAtEnd();
      var x= 100;
      var y= 100;
      var index=0;

      if(allPlayers !== undefined){
        var display_position = 130;
        for(var plr in allPlayers){
         index=index+1;
         x=x+200;
         y=displayHeight-allPlayers[plr].distance;
         cars[index-1].x=x;
         cars[index-1].y=y;
         if(index===player.index){
           
           switch(r)
           {
             case 1:player1.resize(displayWidth,displayHeight*10)
               image(player1,0,-displayHeight*5,displayWidth,displayHeight*10)
               console.log("entered case1") 
             break;
             case 2:player2.resize(displayWidth,displayHeight*10)
               image(player2,0,-displayHeight*5,displayWidth,displayHeight*10)
               console.log("entered case2") 
             break;
             case 3:player3.resize(displayWidth,displayHeight*10)
               image(player3,0,-displayHeight*5,displayWidth,displayHeight*10)
               console.log("entered case3") 
             break;
             case 4:player4.resize(displayWidth,displayHeight*10)
               image(player4,0,-displayHeight*5,displayWidth,displayHeight*10)
               console.log("entered case4")  
             break;
             case 5:player5.resize(displayWidth,displayHeight*10)
               image(player5,0,-displayHeight*5,displayWidth,displayHeight*10)
               console.log("entered case5") 
             break;
           }
           
           camera.position.x=displayWidth/2
           camera.position.y=cars[index-1].y
         }
      }
    }
      if(keyIsDown(UP_ARROW) && player.index !== null){
        player.distance +=50
        player.update();
      }
      if(player.distance>4000){
        gameState=2;
        player.rank=player.rank+1;
        Player.updatePlayersAtEnd(player.rank);
      }
    
    drawSprites();
}

end() {
console.log(player.rank)  
}
}