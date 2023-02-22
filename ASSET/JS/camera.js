import {
    captureBtn,
    closeBtn, player, restartBtn, startBtn, switchBtn
} from "./constants.js"

export let mode = "user"

export const changemode = (arg) => {
mode = mode === "user" ? "environment" : "user"
}

export const openCamera = async () => {
    if (navigator.mediaDevices) {
        startBtn.setAttribute("disabled", true)

        document.getElementById("loader").innerHTML = `opening camera <div class="spinner-border text-dark"></div>`

        try {

            const x = await navigator.mediaDevices.getUserMedia({
                video: {

                    facingmode: mode
                },
            }
            )
            player.srcObject = x
        } catch (error) {
            console.log(error);
        }

        document.getElementById("loader").innerHTML = ""
        startBtn.removeAttribute("disabled")

        // navigator.mediaDevices.getUserMedia({ video: true })
        // .then(x => player.srcObject = x)
    } else {
        console.error("mediaDevices not supported");
    }
}
// close camera 
export const closeCamera = () => {
    console.log("close button clicked")
    canvas.classList.add("d-none")
    console.log(player.srcObject.getVideoTracks())
    const tracks = player.srcObject.getVideoTracks()
    for (let i = 0; i < tracks.length; i++) {
        tracks[i].stop()
    }
    switchBtn.classList.add("d-none")
    player.classList.add("d-none")
    startBtn.classList.remove("d-none")
    captureBtn.classList.add("d-none")
    closeBtn.classList.add("d-none")
    restartBtn.classList.add("d-none")
}

