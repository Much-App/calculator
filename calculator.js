

/* btn sounds */
let sound = true
const btn = Array.from(document.querySelectorAll(".btn"));
btn.forEach(btn=> btn.addEventListener('click', playSound));













  function playSound() {
    const beep = document.querySelector("#beep");
    const boop = document.querySelector("#boop");
    if (sound == true) {
        beep.currentTime = 0;
        beep.play();
        return sound = false
    } else if (sound == false) {
        boop.currentTime = 0;
        boop.play(); 
        return sound = true
    }
  }
