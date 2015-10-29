  $(document).ready(function(){
    var options = {
      name: "charles",
      speed: 5,
      score: 0,
    };
    var charles = new Character(options);
    var computer = new Character(options);
    computer.name = "computer";
    $('button').on('click',function(){
        charles.hit(computer);
        $('#comp-score').html(computer.score);
        $('#my-score').html(charles.score);
    });

    $('#button-one').on('click',function(){
      $('.left-ball').removeClass('display-block');
        $('.left-ball').addClass('display-none');
        $('.right-ball').removeClass("display-none");
        $('.right-ball').addClass("display-block");
    });
    $('#button-two').on('click',function(){
        $('.left-ball').removeClass('display-none');
        $('.left-ball').addClass('display-block');
        $('.right-ball').removeClass('display-block');
        $('.right-ball').addClass('display-none');

    });
    //set winnning screen settings, css

});
var main = {
  leftCourt:function(){
    $('#left-ball').css("dislay","block");
    $('#right-ball').css("display","none");
  },
  rightCourt:function(){
    $('#right-ball').css("display","block");
    $('#left-ball').css("display","none");
  },

};

function Character(options){
  this.name = options.name || "John Doe";
  this.speed = options.speed || 5;
  this.score = options.score;
  this.hit = function(enemy){
      var randomInt = Math.floor(Math.random() * 10);
      if(randomInt >=0 && randomInt<=3){
        this.score = this.score + 1;
        console.log("You Scored");
      }
      else if(randomInt > 3 && randomInt <=6){
        enemy.score = enemy.score + 1;
        console.log("Computer Scored");
      }
      else{
        console.log("great volley");

      }
      if(this.score  >= 5){
        console.log("this is working");
        $('.youWin p').css({"display":"block"});
        $('.container').css({"display":"none"});
        $('button').css({"display":"none"});
        $('span').css ({"display": "none"});
      }
      if(enemy.score  >= 5){
        console.log("this is working");
        $('.compWin p').css({"display":"block"});
        $('.container').css({"display":"none"});
        $('button').css({"display":"none"});
        $('span').css ({"display": "none"});
      }

      if(this.score == 5)console.log("you win");
      else if(enemy.score == 5)console.log("computer wins");
      else{
      console.log("Your score is:" + this.score + "computer score is:"+ enemy.score);
    }
  };

}
