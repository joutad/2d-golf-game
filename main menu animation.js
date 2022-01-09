import Ball from "./assets/ball.js"

let canvas = document.getElementById("mainMenuCanvas")
let ctx = canvas.getContext("2d")

const GAME_WIDTH = canvas.offsetWidth
const GAME_HEIGHT = canvas.offsetHeight
console.log(GAME_WIDTH, GAME_HEIGHT)

let ball = new Ball(GAME_WIDTH, GAME_HEIGHT)
ball.launch(0.4)
ball.speed.x += 0.96
ball.position.x = 28
ball.position.y = GAME_HEIGHT-30

let lastTime = 0;

function gameLoop(timeStamp) {
    let deltaTime = timeStamp - lastTime
    lastTime = timeStamp

    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT)
    ball.update(deltaTime)
    ball.draw(ctx)

    requestAnimationFrame(gameLoop)
}

gameLoop()