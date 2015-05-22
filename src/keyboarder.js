export default class Keyboarder {
  constructor() {
    this.KEYS = {
      LEFT: 37,
      RIGHT: 39,
      SPACE: 32,
      R: 82,
      M: 77
    }
    this.keyState = {}
    window.addEventListener('keydown', e => {
      this.keyState[e.keyCode] = true
    })
    window.addEventListener('keyup', e => {
      this.keyState[e.keyCode] = false
    })
  }

  isDown (keyCode) {
    return this.keyState[keyCode] === true
  }

}

