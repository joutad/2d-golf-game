import Ball from './assets/ball.js'
import InputHandler from './assets/input.js'

let canvas, ctx

function init() {
    canvas = document.getElementById("game")
    ctx = canvas.getContext('2d')
    let powerBar = document.getElementById("powerbar")
    let powerBarCTX = powerBar.getContext('2d')
    const powermeter = document.getElementById("powermeter")

    const GAME_WIDTH = canvas.offsetWidth
    const GAME_HEIGHT = canvas.offsetHeight

    console.log(GAME_WIDTH, GAME_HEIGHT)

    let ball = new Ball(GAME_WIDTH, GAME_HEIGHT)

    new InputHandler(ball)

    let lastTime = 0;

    function gameLoop(timeStamp) {
        let deltaTime = timeStamp - lastTime
        lastTime = timeStamp

        powerBarCTX.clearRect(0, 0, 96, 32)
        ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT)
        ctx.fillStyle = "lightgreen"
        ctx.fillRect(0, GAME_HEIGHT-10, GAME_WIDTH, 10)
        ball.update(deltaTime)
        ball.draw(ctx)

        requestAnimationFrame(gameLoop)
    }

    gameLoop()
}

init()