export default function Keyboarder() {
  let keyState = {}
  window.addEventListener('keydown', e => { keyState[e.keyCode] = true })
  window.addEventListener('keyup', e => { keyState[e.keyCode] = false })

  this.isDown = function(keyCode) {
    return keyState[keyCode] === true
  }

  this.KEYS = { LEFT: 37, RIGHT: 39, SPACE: 32, R: 82 }
}

