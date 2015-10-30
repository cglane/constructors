//thanks to https://robots.thoughtbot.com/pong-clone-in-javascript
//for idea to use _speed variables and constructors

  $(document).ready(function(){
    master.init();
  });
var master = {
  init:function(){
    master.animation();
    master.events();
  },
  animation:function(){
    main.playButton();
    main.yourPlayers('your-player', yourPaddle);
    main.enemyPlayerIncrement();
  },

  events:function(){
    main.keydown();
  },
  //all the collisions with elements
  collisions:function(){

  },
  //
  ballAnimation:function(){
    $( "#ball" ).animate({
      left: (ball.x= ball.x + ball.x_speed),
      top: ball.y= ball.y + ball.y_speed,
  }, 1, function() {
    main.increment();
    master.ballAnimation();
    master.collisions();
  });
},


};
