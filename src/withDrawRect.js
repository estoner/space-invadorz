var withDrawRect = {
  draw: function(screen) {
    screen.fillStyle = this.color
    screen.fillRect(this.center.x - this.size.x / 2,
                   this.center.y - this.size.y / 2,
                   this.size.x,
                   this.size.y)
  }
}
export default withDrawRect
