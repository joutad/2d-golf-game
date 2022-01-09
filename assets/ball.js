export default class Ball {
    constructor(gameWidth, gameHeight) {
        
        this.gameWidth = gameWidth
        this.gameHeight = gameHeight
        this.width = 5
        this.height = 5
        
        this.maxSpeed = 15
        this.speed = {
            x: 0,
            y: 0
        }

        console.log("width: ", this.width, "height: ", this.height)
    

        this.position = {
            x: gameWidth/2 - this.width/2,
            y: gameHeight - this.height - 20
        };

    }

    launch(secondsElapsed) {
        if (secondsElapsed >= 1.5) {
            secondsElapsed = 1.5
        }
        this.speed.x = this.maxSpeed * secondsElapsed
        this.speed.y = -(this.maxSpeed * secondsElapsed * 0.25)
    }

    draw(ctx) {
        // ctx.fillStyle = '#999'
        // ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
        // ctx.arc(this.position.x, this.position.y, 10, 0, Math.PI*2);
        // console.log("x: ", this.position.x, "y: ", this.position.y)
        ctx.beginPath();
        ctx.arc(this.position.x, this.position.y, 10, 0, Math.PI*2);
        ctx.fillStyle = "#BBB";
        ctx.fill();
        ctx.closePath();
    }
    update(deltaTime) {
        if (!deltaTime) {
            return
        }
        if (this.position.x + this.width > this.gameWidth) {
            this.position.x = this.gameWidth - this.width
            if (this.speed.x > 0) {
                this.speed.x = -this.speed.x
            }
        }
        if (this.position.x < 0) {
            this.position.x = 0
            if (this.speed.x < 0) {
                this.speed.x = -this.speed.x
            }
        }
        this.position.x += this.speed.x
        this.position.y += this.speed.y
        if (this.speed.x > 0) {
            this.speed.x -= 0.02
            if (this.speed.x < 0) {
                this.speed.x = 0
            }
        }
        if (this.speed.x < 0) {
            this.speed.x += 0.02
            if (this.speed.x > 0) {
                this.speed.x = 0
            }
        }
        if (this.speed.y < 0) {
            this.speed.y += 0.04
        }
        if (this.speed.y > 0) {
            this.speed.y += 0.03/2
        }
        if (this.position.y > this.gameHeight - 20) {
            this.position.y = this.gameHeight - 20
            if (this.speed.y > 0) {
                this.speed.y = -this.speed.y
            }
        }
        if (this.position.y < 0) {
            this.position.y = 0
            if (this.speed.y < 0) {
                this.speed.y = -this.speed.y
            }
        }
    }
}
