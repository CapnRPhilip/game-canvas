var config = {
  type: Phaser.AUTO,
  width: 640,
  height: 360,
  physics: {
      default: 'arcade',
      arcade: {
          gravity: { y: 300 },
          debug: false
      }
  },
  scene: {
      preload: preload,
      create: create,
      update: update
  }
};

var player;
var enem;
var aid;
var bombs;
var platforms;
var cursors;
var life = 3;
var gameOver = false;
var lifeText;
var message;

//game creation
var game = new Phaser.Game(config);

function preload () {
  this.load.image("background", "assets/background.png");
  this.load.image('ground', "assets/platform.png");
  this.load.image("player", "assets/player.png");
  this.load.image("enemy", "assets/dragon.png");
  this.load.image("treasure", "assets/treasure.png");
  this.load.image('bomb', "assets/fireball.png");
  this.load.image('aid', "assets/firstaid.png");
};

//creation
function create () {
  let bg = this.add.sprite(0, 0, "background");
  bg.setPosition(640 / 2, 360 / 2);

  //  The platforms group contains the ground and the 2 ledges we can jump on
  platforms = this.physics.add.staticGroup();

  //  Here we create the ground.
    //  Scale it to fit the width of the game (the original sprite is 400x32 in size)
    //platforms.create(0, 280, 'ground').setScale(2).refreshBody();

    //  Now let's create some ledges
    //platforms.create(10, 200, 'ground').setScale(0.5);
    //platforms.create(50, 250, 'ground');
    //platforms.create(750, 220, 'ground');

  enem = this.physics.add.sprite(560, 270, "enemy");
  enem.setScale(0.75);
  enem.setCollideWorldBounds(true);
  enem.flipX = true;

  prize = this.add.sprite(570, 340, "treasure");
  prize.setScale(0.5);

  aid = this.physics.add.sprite(445,90,'aid')
  aid.setScale(1.5);
  aid.body.immovable = true;
  aid.body.moves = false;

  player = this.physics.add.sprite(50, 180, "player");
  player.setScale(0.5);
  //player.flipX = true;

   //  Player physics properties.
   player.setBounce(0.2);
   player.setCollideWorldBounds(true);
 
   bombs = this.physics.add.sprite(560, 270, 'bomb');
   bombs.setScale(1);
   bombs.setCollideWorldBounds(false);
   
   //  The score
   lifeText = this.add.text(16, 16, 'Life: 3', { fontSize: '32px', fill: '#FFFFFF' });

   //  Collide the player and the stars with the platforms
   //this.physics.add.collider(player, platforms);
   this.physics.add.collider(player, enem, hitenem, null, this);
   this.physics.add.collider(aid, platforms);
   this.physics.add.collider(enem, prize);
   //this.physics.add.collider(bombs, platforms);

   //  Checks to see if the player overlaps with any of the aid, if he does call the collectStar function
  this.physics.add.overlap(player, aid, collectaid, null, this);

  this.physics.add.collider(player, bombs, hitBomb, null, this);

  cursors = this.input.keyboard.createCursorKeys();
};

let direction = "UP" // UP and DOWN as literals 

function update () {


  if (gameOver)
    {
        return;
    }
    bombs.setVelocityY(0);
    bombs.setVelocityX(-100);
    

  if (enem.y == 140) {
    direction = "DOWN";
  } else if (enem.y == 280) {
    direction = "UP"
  }

  direction == "UP" ? enem.setVelocityY(-150): enem.setVelocityY(150)

  if (cursors.left.isDown) {
        player.flipX = true;
        player.setVelocityX(-150);
    }
  else if (cursors.right.isDown) {
    player.flipX = false;
    player.setVelocityX(150);
  }
  else
  {
      player.setVelocityX(0);
  }

  if (cursors.up.isDown)
  {
      player.setVelocityY(-150);
  }

  if (player.y >= 320) {
    if (player.x >= 550) {
      message = this.add.text(250, 170, "YOU WIN", {
        fontSize: "32px",
        fill: "#000"
      });

      this.physics.pause();
      gameOver = true;
    }
  }
};

function collectaid (player, aid)
{
   //  Add and update the score
    if(life < 3){
    life += 1;
    }
    lifeText.setText('Life: ' + life);

}


function hitBomb (player, bombs)
{
  
  life -= 1;
  lifeText.setText('Life: ' + life);
  if(life == 0){
    this.physics.pause();

    player.setTint(0xff0000);

    message = this.add.text(250, 170, "GAME OVER", {
      fontSize: "32px",
      fill: "#000"
    });

    gameOver = true;
 }
  bombs.disableBody(true, true);

  
}

function hitenem(player, enem)
{
this.physics.pause();
player.setTint(0xff0000);
message = this.add.text(250, 170, "GAME OVER", {
  fontSize: "32px",
  fill: "#000"
});
gameOver = true;
}
        