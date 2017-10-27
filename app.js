function Game() {
  this.ctx = pongCanvas.getContext('2d');
  this.ball = new Ball([57,63], 5);
  this.paddle = new Paddle([10, 10], 10, 50);
  this.paddle2 = new Paddle ([10, 480], 50, 10);
  this.paddle3 = new Paddle ([480, 440], 10, 50);
  this.paddle4 = new Paddle ([440, 10], 50, 10);
}

Game.prototype.renderBackground = function (){
  this.ctx.fillStyle = 'lightslategrey';
  this.ctx.fillRect(0, 0, 500, 500);
}

Game.prototype.collision = function (){

  if (this.ball.position[0] === (this.paddle2.position[0] && this.paddle2.width)){
    this.ball.xy[0]=-this.ball.xy[0];
  }

  // Game.prototype.paddleBallColl = function(){
  //   var distX = Math.abs(this.ball.position[0] - this.paddle.position[0]-this.paddle.width/2);
  //   var distY = Math.abs(this.ball.position[1] - this.paddle.position[1]-this.paddle.height/2);
  //
  //   if (distX > (this.paddle.width/2 + this.ball.radius)) { return false; }
  //   if (distY > (this.paddle.height/2 + this.ball.radius)) { return false; }
  //
  //   if (distX <= (this.paddle.width/2)) { return true; }
  //   if (distY <= (this.paddle.height/2)) { return true; }
  //
  //   var dx = distX - this.paddle.width/2;
  //   var dy = distY - this.paddle.height/2;
  //   return (dx*dx+dy*dy<=(this.ball.radius*this.ball.radius));
  // }
  //
  // if (this.paddleBallColl() === true){
  //   //this.ball.xy[0]=-this.ball.xy[0];
  //   this.ball.xy[0]=-this.ball.xy[0];
  // }
  //
  // Game.prototype.paddleBallColl2 = function(){
  //   var distX = Math.abs(this.ball.position[0] - this.paddle2.position[0]-this.paddle2.width/2);
  //   var distY = Math.abs(this.ball.position[1] - this.paddle2.position[1]-this.paddle2.height/2);
  //
  //   if (distX > (this.paddle2.width/2 + this.ball.radius)) { return false; }
  //   if (distY > (this.paddle2.height/2 + this.ball.radius)) { return false; }
  //
  //   if (distX <= (this.paddle2.width/2)) { return true; }
  //   if (distY <= (this.paddle2.height/2)) { return true; }
  //
  //   var dx = distX - this.paddle2.width/2;
  //   var dy = distY - this.paddle2.height/2;
  //   return (dx*dx+dy*dy<=(this.ball.radius*this.ball.radius));
  // }
  //
  // if (this.paddleBallColl2() === true){
  //   //this.ball.xy[0]=-this.ball.xy[0];
  //   this.ball.xy[1]=-this.ball.xy[1];
  // }
  //
  // Game.prototype.paddleBallColl3 = function(){
  //   var distX = Math.abs(this.ball.position[0] - this.paddle3.position[0]-this.paddle3.width/2);
  //   var distY = Math.abs(this.ball.position[1] - this.paddle3.position[1]-this.paddle3.height/2);
  //
  //   if (distX > (this.paddle3.width/2 + this.ball.radius)) { return false; }
  //   if (distY > (this.paddle3.height/2 + this.ball.radius)) { return false; }
  //
  //   if (distX <= (this.paddle3.width/2)) { return true; }
  //   if (distY <= (this.paddle3.height/2)) { return true; }
  //
  //   var dx = distX - this.paddle3.width/2;
  //   var dy = distY - this.paddle3.height/2;
  //   return (dx*dx+dy*dy<=(this.ball.radius*this.ball.radius));
  // }
  //
  // if (this.paddleBallColl3() === true){
  //   //this.ball.xy[0]=-this.ball.xy[0];
  //   this.ball.xy[0]=-this.ball.xy[0];
  // }
  //
  // Game.prototype.paddleBallColl4 = function(){
  //   var distX = Math.abs(this.ball.position[0] - this.paddle4.position[0]-this.paddle4.width/2);
  //   var distY = Math.abs(this.ball.position[1] - this.paddle4.position[1]-this.paddle4.height/2);
  //
  //   if (distX > (this.paddle4.width/2 + this.ball.radius)) { return false; }
  //   if (distY > (this.paddle4.height/2 + this.ball.radius)) { return false; }
  //
  //   if (distX <= (this.paddle4.width/2)) { return true; }
  //   if (distY <= (this.paddle4.height/2)) { return true; }
  //
  //   var dx = distX - this.paddle4.width/2;
  //   var dy = distY - this.paddle4.height/2;
  //   return (dx*dx+dy*dy<=(this.ball.radius*this.ball.radius));
  // }
  //
  // if (this.paddleBallColl4() === true){
  //   //this.ball.xy[0]=-this.ball.xy[0];
  //   this.ball.xy[1]=-this.ball.xy[1];
  // }
}

var game = new Game();

Game.prototype.play = function() {
  var that = this;
  document.addEventListener('keydown', function(event) {
    var key = event.which || event.keyCode;
    switch (key) {
      case 50://2
        that.paddle.moveDirection = "up";
          break;
      case 65://A
        that.paddle.moveDirection = "down";
          break;
      case 81://Q
        that.paddle.moveDirection = "left";
          break;
      case 87://W
        that.paddle.moveDirection = "right";
          break;
      case 70://F
        that.paddle2.moveDirection = "up";
          break;
      case 67://C
        that.paddle2.moveDirection = "down";
          break;
      case 88://X
        that.paddle2.moveDirection = "left";
          break;
      case 86://V
        that.paddle2.moveDirection = "right";
          break;
      case 75://K
        that.paddle3.moveDirection = "up";
          break;
      case 188://<
        that.paddle3.moveDirection = "down";
          break;
      case 77://M
        that.paddle3.moveDirection = "left";
          break;
      case 190://>
        that.paddle3.moveDirection = "right";
          break;
      case 187://+
        that.paddle4.moveDirection = "up";
          break;
      case 222://""
        that.paddle4.moveDirection = "down";
          break;
      case 219://[
        that.paddle4.moveDirection = "left";
          break;
      case 221://]
        that.paddle4.moveDirection = "right";
          break;
    default:
    }
  });
  document.addEventListener('keyup', function(event) {
    var key = event.which || event.keyCode;
    switch (key) {
      case 50://2
      case 65://A
      case 81://Q
      case 87://W
          that.paddle.moveDirection = "idle";
        break;
      case 70://F
      case 67://C
      case 88://X
      case 86://V
          that.paddle2.moveDirection = "idle";
        break;
      case 75://K
      case 188://<
      case 77://M
      case 190://>
          that.paddle3.moveDirection = "idle";
        break;
      case 187://+
      case 222://""
      case 219://[
      case 221://]
          that.paddle4.moveDirection = "idle";
      break;
    default:
    }
  });
  setInterval(function() {
    this.renderBackground();
    this.ball.render(this.ctx);
    this.paddle.renderPaddle(this.ctx, 'darkcyan');
    this.paddle2.renderPaddle(this.ctx, 'cadetblue');
    this.paddle3.renderPaddle(this.ctx, 'teal');
    this.paddle4.renderPaddle(this.ctx, 'lightseagreen');
    this.ball.move();
    this.ball.bounce();
    this.paddle.move();
    this.paddle2.move();
    this.paddle3.move();
    this.paddle4.move();
    this.collision();
  }.bind(this), 17);
}

game.play();
