function Paddle (position, height, width){
  this.position = position;
  this.height = height;
  this.width = width;
  this.xy = [0,1];
  this.moveDirection = "idle";
}

Paddle.prototype.renderPaddle = function (ctx, color) {
  ctx.fillStyle = color;
  ctx.fillRect(this.position[0], this.position[1], this.height, this.width);
}

Paddle.prototype.move = function () {
  if (this.moveDirection === "up"){
    this.position[1]-=this.xy[1];
  } else if (this.moveDirection === "down") {
    this.position[1]+=this.xy[1];
  } else if (this.moveDirection === "right") {
    this.position[0]+=this.xy[1];
  } else if (this.moveDirection === "left") {
    this.position[0]-=this.xy[1];
  }
}
