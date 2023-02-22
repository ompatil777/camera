
// const startBtn = document.getElementById("start")
// const captureBtn = document.getElementById("capture")
// const closeBtn = document.getElementById("close")
// const player = document.getElementById("player")
// const switchBtn = document.getElementById("switchCamera")
// const canvas = document.getElementById("canvas")
// const restartBtn = document.getElementById("restart")
import {
    startBtn,
    captureBtn,
    closeBtn,
    player,
    switchBtn,
    canvas,
    restartBtn,
    

} from "./constants.js"

import {
    openCamera,
    closeCamera,
    changemode
} from "./camera.js"






// switch button

switchBtn.addEventListener("click",  () => {
   changemode()

    player.classList.add("d-none")
    const tracks = player.srcObject.getVideoTracks()
    for (let i = 0; i < tracks.length; i++) {
        tracks[i].stop()
    }
    openCamera()
})

// start button 

startBtn.addEventListener("click", async () => {
    console.log("start button clicked")
    // handleCamera Strart
    openCamera()
    // handleCamera End
    // player.setAttribute("src", "./1.mp4")
    player.classList.remove("d-none")
    startBtn.classList.add("d-none")
    captureBtn.classList.remove("d-none")
    closeBtn.classList.remove("d-none")
    switchBtn.classList.remove("d-none")
    restartBtn.classList.remove("d-none")
})

// capture button

captureBtn.addEventListener("click", () => {
    const preview = canvas.getContext("2d")
    preview.drawImage(player, 0, 0, canvas.height, canvas.width)
    canvas.classList.remove("d-none")
    player.classList.add("d-none")
    captureBtn.classList.add("d-none")
    captureBtn.classList.remove("d-none")
    console.log("capture button clicked")
})

// close button

closeBtn.addEventListener("click", () => {
    closeCamera()
})

// restart button 

restartBtn.addEventListener("click", () => {
    closeCamera()
    openCamera()
})
// open camera
