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
    //set winnning screen settings, css

});

function Character(options){
  this.name = options.name || "John Doe";
  this.speed = options.speed || 5;
  this.score = options.score;
  this.hit = function(enemy){
      var randomInt = Math.floor(Math.random() * 10);
      if(randomInt >=0 && randomInt<=3){
        this.score = this.score + 1;
        console.log("Nice Score");
      }
      else if(randomInt > 3 && randomInt <=6){
        enemy.score = enemy.score + 1;
        console.log("You missed");
      }
      else{
        console.log("Boring");
      }
      if(this.score  >= 11){
        console.log("this is working");
        $('.youWin p').css({"display":"block"});
        $('.container').css({"display":"none"});
        $('button').css({"display":"none"});
        $('span').css ({"display": "none"});
      }
      if(enemy.score  >= 11){
        console.log("this is working");
        $('.compWin p').css({"display":"block"});
        $('.container').css({"display":"none"});
        $('button').css({"display":"none"});
        $('span').css ({"display": "none"});
        

      }

      if(this.score == 11)console.log("you win");
      else if(enemy.score == 11)console.log("computer wins");
      else{
      console.log("Your score is:" + this.score + "computer score is:"+ enemy.score);
    }
  };

}
