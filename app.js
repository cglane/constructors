
  $(document).ready(function(){
    main.ballAnimation();
  });

var ball = new Ball(100,50);

function Ball(x,y){
  this.x = x;
  this.y = y;
  this.x_speed = 3;
  this.y_speed = 4;
}

var main = {
  init:function(){

  },
  styling:function(){

  },
  ballAnimation:function(){
    $( "#ball" ).animate({
      left: (ball.x= ball.x + ball.x_speed),
      top: ball.y= ball.y + ball.y_speed,
  }, 5, function() {
    main.Increment();
    console.log(ball.y);
    main.ballAnimation();
  });
  },
    Increment:function(){

      if(ball.y<0 && ball.x <0){
        ball.y_speed = -ball.y_speed;
        ball.x_speed = -ball.x_speed;
      }else if(ball.y<0 && ball.x>0 ){
        ball.y_speed = -ball.y_speed;
      }
      else if (ball.y>0 && ball.x<0) {
        ball.x_speed = -ball.x_speed;
      }
      else if(ball.x>500 && ball.y<500){
        ball.x_speed = -ball.x_speed;
      }
      else if (ball.y>500 && ball.x<500) {
        ball.y_speed = -ball.y_speed;
      }


    },


};
