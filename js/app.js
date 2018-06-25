let allEnemies = [];
// Enemies our player must avoid
class Enemy {
    constructor(col, row) {
        // Variables applied to each of our instances go here,
        // we've provided one for you to get started
        // The image/sprite for our enemies, this uses
        // a helper we've provided to easily load images
        this.sprite = 'images/enemy-bug.png';
        this.col = col;
        this.row = row;
        this.speed = 2;
    }
    // Update the enemy's position, required method for game
    // Parameter: dt, a time delta between ticks
    update(dt) {
        // You should multiply any movement by the dt parameter
        // which will ensure the game runs at the same speed for
        // all computers.
        this.col += this.speed * dt;
    }
    // Draw the enemy on the screen, required method for game
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.col * 101, this.row * 83 - 20);
    }
}



// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
class Player {
    constructor(col, row) {
        this.sprite = 'images/char-boy.png';
        this.col = col;
        this.row = row;
    }

    update(col = 0, row = 0) {
        this.col += col;
        this.row += row;
    };

    render() {
        ctx.drawImage(Resources.get(this.sprite), this.col * 101, this.row * 83 - 30);
    }

    handleInput(keyCode) {
        switch (keyCode) {
           case 'left': 
              this.update(-1);
              break;

           case 'right': 
              this.update(1);
              break;
              
           case 'up':
              this.update(0, -1);
              break;
              
           case 'down':
              this.update(0, 1);
              break;
        }
    };
}


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
allEnemies.push(new Enemy(0,1));
let player = new Player(3,5);


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

