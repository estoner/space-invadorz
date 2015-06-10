export default class Touch {
  constructor() {
    this.touchState = false
    let self = this
    const canvas = document.getElementById("screen")
    canvas.addEventListener('touchmove', function(event) {
      self.setState(event)
    }, false)
    canvas.addEventListener('touchend', function() {
      self.setState(false)
    }, false)
  }

  setState(e){
    this.touchState = e
  }

  state(){
    return this.touchState
  }
}

