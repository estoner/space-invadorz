define("withCollisionDestroys", ["exports", "module"], function (exports, module) {
  "use strict";

  var withCollisionDestroys = {

    collision: function collision() {
      if (this.constructor.name === "ExplodingBullet") {
        this.explode();
      }
      this.game.removeBody(this);
      if (this.constructor.name === "Invader") {
        this.game.incrementScore();
      }
    }

  };
  module.exports = withCollisionDestroys;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndpdGhDb2xsaXNpb25EZXN0cm95cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxNQUFJLHFCQUFxQixHQUFHOztBQUUxQixhQUFTLEVBQUUscUJBQVc7QUFDcEIsVUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksS0FBSyxpQkFBaUIsRUFBRTtBQUMvQyxZQUFJLENBQUMsT0FBTyxFQUFFLENBQUE7T0FDZjtBQUNELFVBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFBO0FBQzFCLFVBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEtBQUssU0FBUyxFQUFFO0FBQ3ZDLFlBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUE7T0FDM0I7S0FDRjs7R0FFRixDQUFBO21CQUNjLHFCQUFxQiIsImZpbGUiOiJ3aXRoQ29sbGlzaW9uRGVzdHJveXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgd2l0aENvbGxpc2lvbkRlc3Ryb3lzID0ge1xuXG4gIGNvbGxpc2lvbjogZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuY29uc3RydWN0b3IubmFtZSA9PT0gXCJFeHBsb2RpbmdCdWxsZXRcIikge1xuICAgICAgdGhpcy5leHBsb2RlKClcbiAgICB9XG4gICAgdGhpcy5nYW1lLnJlbW92ZUJvZHkodGhpcylcbiAgICBpZiAodGhpcy5jb25zdHJ1Y3Rvci5uYW1lID09PSBcIkludmFkZXJcIikge1xuICAgICAgdGhpcy5nYW1lLmluY3JlbWVudFNjb3JlKClcbiAgICB9XG4gIH1cblxufVxuZXhwb3J0IGRlZmF1bHQgd2l0aENvbGxpc2lvbkRlc3Ryb3lzXG5cbiJdfQ==