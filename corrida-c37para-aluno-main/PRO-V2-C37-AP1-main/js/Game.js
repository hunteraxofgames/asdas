class Game {
  constructor() {}

 getState (){
  var gameStateRef = database.ref ("gameState")
  gameStateRef.on ("value",function(data){
    gameState = data.val ()
  })
 }
  update (state) {
    database.ref ("/").update ({
      gameState: state 
    })
  }
  start() {
    player = new Player();
    playerCount = player.getCount ()
    form = new Form();
    form.display();

    car1= createSprite (width/2-50,height-100)
    car1.addImage ("car1",carimg1)
    car1.scale= 0.07
    car2= createSprite (width/2+100,height-100)
    car2.addImage ("car2",carimg2)
    car2.scale= 0.07

    cars = [car1,car2]
  }

  handlyElements (){
    form.hide ()
    form.titleImg.position (40,50)
    form.titleImg.class ("gameTitleAfterEffect")
  }
  play (){
    this.handlyElements ()
    Player.getPlayerInfo()

    if (allPlayers!==undefined) {
      image (track,0,-height*5,width,height*6)
      var index = 0
      for (var PRL in allPlayers){
        index = index+1

        var x  = allPlayers [PRL].positionX
        var y = height - allPlayers [PRL].positionY

        cars[index-1].position.x = x
        cars[index-1].position.y = y
        if ( index == player.index){
          stroke(10) 
        fill ("blue") 
        ellipse (x,y,60,60)
      
      }
      Camera.position.x = cars [index-1].position.x
      Camera.position.y = cars [index-1].position.y
      }
      this.handlePlayerControls ()

      drawSprites ()
    }
  }
 
  
  
  handlePlayerControls (){
    if (KeyIsDown(UP_ARROW)) {
      player.positionY += 10
      player.update () 
    }
  }
}
