export default class InputHandler {
    constructor(ball) {
        var startTime = 0, currentTime, endTime, secondsElapsed
        
        let powerBar = document.getElementById("powerbar")
        
        let keyDownListener = document.addEventListener('keydown', (event) => {
            switch(event.keyCode) {
                case 32:
                    let i = 0
                    if (startTime == 0) {
                        startTime = new Date().getTime()
                        powerBar.style.backgroundColor = "green"
                        clearInterval(currentTime)
                        currentTime = null
                        currentTime = setInterval(() => {
                            if (i == 0) {
                                powerBar.style.backgroundColor = "lightgreen"
                            }
                            if (i == 0.5) {
                                powerBar.style.backgroundColor = "yellow"
                            }
                            if (i == 1) {
                                powerBar.style.backgroundColor = "orange"
                            }
                            if (i == 1.5) {
                                powerBar.style.backgroundColor = "red"
                            }
                            if (i >= 2 && powerBar.style.backgroundColor == "red") {
                                powerBar.style.backgroundColor = "darkred"
                            }
                            else if (i >= 1.5 && powerBar.style.backgroundColor == "darkred") {
                                powerBar.style.backgroundColor = "red"
                            }
                            if (i < 2) {
                                i += 0.5
                            }
                        }, 305);
                    }
            }
        })
        
        let keyUpListener = document.addEventListener('keyup', (event) => {
            switch(event.keyCode) {
                case 32:
                    endTime = new Date().getTime()
                    secondsElapsed = (endTime-startTime)/1000
                    console.log(secondsElapsed, "seconds")
                    ball.launch(secondsElapsed)
                    clearInterval(currentTime)
                    powerBar.style.backgroundColor = "#b6b6b6"
                    currentTime = null
                    startTime = 0
                    break
            }
        })
    }
}