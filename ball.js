function Ball (position,radius){
  this.position = position;
  this.radius = radius;
  this.xy = [1,1.1]

}

Ball.prototype.render = function (ctx) {
  ctx.beginPath();
  ctx.fillStyle = 'darkorange';
  ctx.arc(this.position[0], this.position[1], this.radius, 0, 2 * Math.PI, false);
  ctx.fill();
}

Ball.prototype.move = function () {
  this.position[0]+=this.xy[0];
  this.position[1]+=this.xy[1];
}

Ball.prototype.bounce = function () {
  if (this.position[1]<=10 || this.position[1]>490){
    this.xy[1]=-this.xy[1];
  }if (this.position[0]<=10 || this.position[0]>490){
    this.xy[0]=-this.xy[0];
  }
}
