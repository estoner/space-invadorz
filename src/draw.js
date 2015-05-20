export default class Draw {
  static drawRect(screen, body, color) {
    screen.fillStyle = color
    screen.fillRect(body.center.x - body.size.x / 2,
                    body.center.y - body.size.y / 2,
                    body.size.x,
                    body.size.y)
  }
}
