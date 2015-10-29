//thanks to https://robots.thoughtbot.com/pong-clone-in-javascript
//for idea to use _speed variables and constructors

  $(document).ready(function(){
    main.init();
  });

var ball = new Shape(100,50);
var yourPaddle = new Shape(30 ,150);
var enemyPaddle = new Shape(900,150);

function Shape(x,y){
  this.x = x;
  this.y = y;
  this.x_speed = 3;
  this.y_speed = 4;
  this.score = 0;
}

var main = {
  init:function(){
    main.animation();
    main.events();
  },
  styling:function(){

  },
  events:function(){
    $('.container').on("mousemove", function( event ) {
      yourPaddle.y = event.pageY -80;
      console.log(event.pageY);
      });
  },
  animation:function(){
    main.ballAnimation();
    main.paddleLeft();
    main.paddleRight();
  },
  ballAnimation:function(){
    $( "#ball" ).animate({
      left: (ball.x= ball.x + ball.x_speed),
      top: ball.y= ball.y + ball.y_speed,
  }, .001, function() {
    main.increment();
    main.ballAnimation();
  });
  },
  increment:function(){
    //ball changes speed when hitting objects
      if(ball.y<0 && ball.x <0){
        ball.y_speed = -ball.y_speed;
        ball.x_speed = -ball.x_speed;
      }else if(ball.y<0 && ball.x>0 ){
        ball.y_speed = -ball.y_speed;
        $('#ball').css("padding-top","-20px");
      }
      else if (ball.y>0 && ball.x<0) {
        yourPaddle.score ++;
        console.log(yourPaddle.score);
        ball.x_speed = -ball.x_speed;
      }
      else if(ball.x>=920 && ball.y<400){
        enemyPaddle.score ++;
        console.log(enemyPaddle.score);
        ball.x_speed = -ball.x_speed;
        $('#ball').css("padding-top","-20px");
      }
      else if (ball.y>450 && ball.x<900) {
        ball.y_speed = -ball.y_speed;
      }
      else if (ball.y>450 && ball.x<900) {
        ball.y_speed = -ball.y_speed;
      }
      else if (ball.y > (enemyPaddle.y-100) && ball.y <(enemyPaddle.y +100) &&  ball.x > (enemyPaddle.x-50  ) && ball.x < (enemyPaddle.x+50)){
        console.log("contact");
        ball.y_speed *= -1;
        ball.x_speed *= -1;
      }
      else if (ball.y > (yourPaddle.y-100) && ball.y <(yourPaddle.y +100) &&  ball.x > (yourPaddle.x-50  ) && ball.x < (yourPaddle.x+50)){
        console.log("double-contact");
        ball.y_speed *= -1;
        ball.x_speed *= -1;
      }
    },
    paddleRight:function(){
      $( "#right-paddle" ).animate({
        left: (enemyPaddle.x),
        top: (enemyPaddle.y = enemyPaddle.y + enemyPaddle.y_speed),
    }, 1, function() {
      main.paddleAutomate();
      main.paddleRight();
    });
},
    paddleAutomate:function(){
      //paddle goes back and forth
      if(enemyPaddle.y>300){
        enemyPaddle.y_speed*= -1;
      }
      else if (enemyPaddle.y<= 0) {
        enemyPaddle.y_speed *= -1;
      }
    },
paddleLeft:function(){

  $( "#left-paddle").animate({
    top: yourPaddle.y,
  }, 1, function() {
  main.paddleLeft();
});
},

};
