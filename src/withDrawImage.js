var withDrawImage = {
  draw: function(screen) {
    screen.drawImage(this.image,
                     this.center.x - (this.size.x / 2),
                     this.center.y,
                     this.size.x,
                     this.size.y)
  }
}
export default withDrawImage
