import Invader from 'invader'
import Player from 'player'
import Star from 'star'
import Keyboarder from 'keyboarder'

export default class Game {
  constructor() {
    const width = 550
    const height = 550
    const canvas = document.getElementById("screen")
    const DPR = window.devicePixelRatio
    const trueWidth = width * DPR
    const trueHeight = height * DPR
    canvas.width = trueWidth
    canvas.height = trueHeight
    canvas.style.width = width
    canvas.style.height = height
    let screen = canvas.getContext('2d')
    screen.scale(2, 2)

    this.keyboarder = new Keyboarder()
    this.size = { x: width, y: height }
    this.center = { x: width / 2, y: height / 2 }
    this.playerHeight = 75
    this.score = 0
    this.reset()

    // frickin' Safari
    if ('webkitAudioContext' in window) {
      this.audioContext = new window.webkitAudioContext()
    } else {
      this.audioContext = new window.AudioContext()
    }
    this.gainNode = this.audioContext.createGain()


    let tick = () => {
      this.update()
      this.draw(screen)
      requestAnimationFrame(tick)
    }

    tick()

  }

  reset() {
    this.victory = undefined
    this.shootRate = 300
    this.bodies = this.createInvaders(this).concat(new Player(this))

    this.numStars = 50
    this.stars = Star.createStars(this, this.numStars)
  }

  update() {
    this.reportCollisions(this.bodies)

    for (let body of this.bodies) {
      if (body.update !== undefined) {
        body.update()
      }
    }

    let invaders = this.bodies.filter(body => {
      return body instanceof Invader
    })
    let players = this.bodies.filter(body => {
      return body instanceof Player
    })

    if (invaders.length === 0) {
      this.victory = true
    } else if (players.length === 0) {
      this.victory = false
    }

    if (typeof this.victory === "boolean") {
      if (this.keyboarder.isDown(this.keyboarder.KEYS.R)) {
        this.reset()
      }
    }

  }

  drawAll(array, screen) {
    for (let item of array) {
      if (item.draw !== undefined) {
        item.draw(screen)
      }
    }
  }

  draw(screen) {
    screen.clearRect(0, 0, this.size.x, this.size.y)
    let landscapeArea = this.size.y - this.playerHeight
    let gradient = screen.createLinearGradient(this.center.x, this.size.y, this.center.x, landscapeArea)
    gradient.addColorStop(0, "#0000AA")
    gradient.addColorStop(1, "black")
    screen.fillStyle = gradient
    screen.fillRect(0, landscapeArea, this.size.x, this.size.y)

    this.drawAll(this.stars, screen)
    this.drawAll(this.bodies, screen)

    this.drawScore(this.score, screen)

    if (this.victory !== undefined) {
      let center = this.size.x / 2
      screen.font = "48px Montserrat"
      screen.shadowOffsetX = 1
      screen.shadowOffsetY = 1
      //screen.shadowBlur = 10
      screen.shadowColor = "grey"
      if (this.victory) {
        screen.fillStyle = "green"
        screen.textAlign = "center"
        screen.fillText("YOU WIN", center, 50)
        screen.font = "16px Montserrat"
        screen.fillText("Press R to restart", center, 100)
      } else if (!this.victory) {
        screen.fillStyle = "red"
        screen.textAlign = "center"
        screen.fillText("YOU LOSE", center, 50)
        screen.font = "16px Montserrat"
        screen.fillText("Press R to restart", center, 100)
      }
    }
    screen.shadowOffsetX = 0
    screen.shadowOffsetY = 0
    screen.shadowBlur = 0
  }

  shootSound(context, duration, gainNode) {
    let osc = context.createOscillator()
    osc.connect(gainNode)
    gainNode.gain.value = 0.2
    gainNode.connect(context.destination)
    osc.frequency.setValueAtTime(4000, context.currentTime)
    osc.frequency.linearRampToValueAtTime(
      440,
      context.currentTime + duration
    )
    osc.start(context.currentTime)
    osc.stop(context.currentTime + duration)

    // TODO pan audio based on player position
    // let amp = context.createGain()
    // amp.connect(panner)
    // panner.setPosition(Math.sin(pannerCounter++/2)/2, 0,0)
    // panner.connect(ac.destination)
  }

  mute() {
    console.log('wtf')
    this.gainNode.value = 0
  }

  invadersBelow(invader) {
    return this.bodies.filter(b => {
      return b instanceof Invader &&
        Math.abs(invader.center.x - b.center.x) < b.size.x &&
        b.center.y > invader.center.y
    }).length > 0
  }

  addBody(body) {
    this.bodies.push(body)
  }

  removeBody(body) {
    let bodyIndex = this.bodies.indexOf(body)
    if (bodyIndex !== -1) {
      this.bodies.splice(bodyIndex, 1)
    }
  }

  isColliding(b1, b2) {
    return !(
      b1 === b2 ||
        b1.center.x + b1.size.x / 2 <= b2.center.x - b2.size.x / 2 ||
        b1.center.y + b1.size.y / 2 <= b2.center.y - b2.size.y / 2 ||
        b1.center.x - b1.size.x / 2 >= b2.center.x + b2.size.x / 2 ||
        b1.center.y - b1.size.y / 2 >= b2.center.y + b2.size.y / 2
    )
  }

  reportCollisions(bodies) {
    let bodyPairs = []
    // NEEDS SEMICOLONS FOR NOW
    for (let i = 0; i < bodies.length; i++) {
      for (let j = i + 1; j < bodies.length; j++) {
        if (this.isColliding(bodies[i], bodies[j])) {
          bodyPairs.push([bodies[i], bodies[j]])
        }
      }
    }

    for (let pair of bodyPairs) {
      if (pair[0].collision !== undefined) {
        pair[0].collision(pair[1])
      }

      if (pair[1].collision !== undefined) {
        pair[1].collision(pair[0])
      }
    }
  }

  incrementScore() {
    this.score += 100
  }

  createInvaders(game) {
    let numInvaders = Math.round( (game.size.x - 70) / 10)
    let numCols = Math.round(numInvaders / 3)
    let invaders = []
    // NEEDS SEMICOLONS FOR NOW
    for (let i = 0; i < numInvaders; i++) {
      let x = 35 + (i % numCols) * 30
      let y = 35 + (i % 3) * 60
      invaders.push(new Invader(game, { x: x, y: y}))
    }
    return invaders
  }

  drawScore(score, screen) {
    screen.fillStyle = "green"
    screen.textAlign = "right"
    screen.font = "16px Montserrat"
    screen.fillText(`Score: ${score} `, this.size.x - 10, 20)
  }
}

new Game()

