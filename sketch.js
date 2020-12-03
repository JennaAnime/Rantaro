var Start
var Play
var End
var gamestate = 'Play'

function preload() {

  shotputball = loadImage('Untitled67_20201120174856.png')
  rantaro = loadImage('Untitled65_20201120174420.png')
  library = loadImage('DanganronpaV3-2.png')
  V3 = loadSound('Danganronpa Trigger Happy Havoc - Opening.mp3')

}

function setup() {
  createCanvas(600, 400)
  Background = createSprite(300, 200, 600, 400)
  Background.addImage(library)

  Rantaro = createSprite(300, 310, 20, 20)
  Rantaro.addImage(rantaro)
  Rantaro.scale = 0.25
  edges = createEdgeSprites()
  Rantaro.debug = true
  Rantaro.setCollider('rectangle', 0, -180, 200, 900)
  

  shotball = createGroup()
   

}

function draw() {
  if (gamestate === 'Play') {
    
    

    Background.visible = true
    Rantaro.visible = true
    if (Rantaro.isTouching(shotball)) {
      shotball.destroyEach()
      gamestate = 'End'
    }

    if (World.frameCount % 200 === 0) {
      shotputballspawn()

    }
    if (keyDown(LEFT_ARROW)) {

      Rantaro.velocityX = -4

    }

    if (keyDown(RIGHT_ARROW)) {

      Rantaro.velocityX = 4

    }

    if (keyWentUp(LEFT_ARROW)) {

      Rantaro.velocityX = 0
    }
    if (keyWentUp(RIGHT_ARROW)) {

      Rantaro.velocityX = 0
    }


    Rantaro.bounceOff(edges)




  }


  if (gamestate === 'End') {
    Rantaro.velocityX = 0
    Background.visible = false
    background('black')
    textSize(30)
    text('You died', 250, 200)
    if (keyDown('space')) {

      gamestate = 'Play'
    }
    Rantaro.visible = false


  }
  drawSprites()
}

function shotputballspawn() {
  var Shotball = createSprite(Math.round(random(20, 370)), 0, 20, 20)
  Shotball.addImage(shotputball)
  Shotball.velocityY = 2
  Shotball.scale = 0.10
  shotball.add(Shotball)
  Shotball.debug= true
  Shotball.setCollider('rectangle',0, -300, 330,330)
  

}