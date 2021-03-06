// Enemies our player must avoid
var Enemy = function(x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = x;
    this.y = y;
    this.speed = speed;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};
// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.speed * dt;
    if (this.x >= 400) {
        this.x = 0;
    }
    this.checkCollisions();
};
// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.sprite = 'images/char-boy.png';

};
Player.prototype.update = function(dt) {
    if (this.x <= 0) {
        this.x = 0;
    }
    if (this.x >= 400) {
        this.x = 400;
    }
    if (this.y >= 400) {
        this.y = 400;
    }
};
Enemy.prototype.checkCollisions = function(awefulEnemy) {
    if (player.y + 90 >= this.y + 90 && player.x + 24 <= this.x + 87 && player.y + 72 <= this.y + 134 && player.x + 75 >= this.x + 10) {
        player.x = 200;
        player.y = 400;
    }
    if (player.y <= 0) {
        player.x = 200;
        player.y = 400;
        console.log("Score +1");
        score += 1;
        game += 1;
        increaseDifficulty(score);
    }
};
var increaseDifficulty = function(proEnemy) {
    allEnemies.length = 0;
    for (var x = 0; x <= proEnemy; x++) {
        var enemy = new Enemy(1, Math.random() * 180 + 30, Math.random() * 250);
        allEnemies.push(enemy);
    }
};
Player.prototype.render = function(dt) {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
Player.prototype.handleInput = function(keyPress) {
    if (keyPress == 'left') {
        this.x -= 101;
    }
    if (keyPress == 'up') {
        this.y -= 83;
    }
    if (keyPress == 'right') {
        this.x += 101;
    }
    if (keyPress == 'down') {
        this.y += 83;
    }
};
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [];
var player = new Player(200, 400, 50);
var game = 1;
var score = 0;
var enemy = new Enemy(0, 230, 200);
allEnemies.push(enemy);
// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
    player.handleInput(allowedKeys[e.keyCode]);
});

