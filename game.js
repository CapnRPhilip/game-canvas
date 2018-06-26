//scene creation
let gameScene = new Phaser.Scene('Game');

gameScene.preload = function () {
    this.load.image('background', 'assets/background.png');
    this.load.image('player', 'assets/player.png');
    this.load.image('enemy', 'assets/dragon.png');
    this.load.image('treasure', 'assets/treasure.png');
    //this.load.image('bomb', 'src/games/firstgame/assets/bomb.png');
    
};


//creation
gameScene.create = function () {
    let bg = this.add.sprite(0, 0, 'background');
    bg.setPosition(640 / 2, 360 / 2);

    player = this.add.sprite(50, 180, 'player');
    player.setScale(0.5);
    //player.flipX = true;

    enem = this.add.sprite(560, 270, 'enemy');
    enem.setScale(0.75);
    enem.flipX = true;

    prize = this.add.sprite(570, 340, 'treasure');
    prize.setScale(0.5);

    var score = 0;
var scoreText;
    

    cursors = this.input.keyboard.createCursorKeys();
    
};

gameScene.update = function () {

    if(enem.y == 100){
        console.log('1');
        enem.y += 5;
   }
    else if(enem.y == 270){
        console.log('2');
       enem.y -= 5;
       console.log('3');
    }
    if (cursors.left.isDown) {
        if(!(player.x == 15)){
        player.x -= 5;
    }}
    else if (cursors.right.isDown) {
        if(!(player.x == 585)){
            //if(!(player.y >= 270)){
            //if(!(player.x <= 50)){
                player.x += 5;}
    //}}
}
    if (cursors.up.isDown) {
        if(!(player.y == 70)){
        player.y -= 5; 
    }}
    else if (cursors.down.isDown) {
        if(!(player.y == 345)){
        player.y += 5; 
    }}

    if(player.x == enem.x){
        scoreText = this.add.text(250, 170, 'WASTED', { fontSize: '32px', fill: '#000' });
        Scene.sys.updates.stop;
    }

    if(player.y >= 320){
        if(player.x >= 550){
    scoreText = this.add.text(250, 170, 'YOU WIN', { fontSize: '32px', fill: '#000' });
}}}

//config creation
let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 360,
    scene: gameScene
};

//passing config
let game = new Phaser.Game(config);






