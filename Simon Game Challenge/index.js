var buttonColors=["red","blue","green","yellow"];
var gamePattern=[];
var userClickedPattern=[];
var gamestarted=false;
var level=0;


$(document).keypress(function () { 
        if(!gamestarted){
        $('#level-title').html("Level "+level);    
        randomsequence();
        console.log("called");
        gamestarted=true;}
});



function randomsequence()
{
    userClickedPattern=[];
    var rand_num = Math.floor(Math.random()*4);
    var randomChosenColor=buttonColors[rand_num];
    gamePattern.push(randomChosenColor);
    $('#'+randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
    level++;
    $('#level-title').html("Level "+level);
    
}
$(".btn").click(function () { 
    var userChosenColor=$(this).attr('id');
    userClickedPattern.push(userChosenColor);
    //console.log(userClickedPattern)
    playSound(userChosenColor);
    animatPress(userChosenColor)
    checkAnswer(userClickedPattern.length-1);
});

function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatPress(pressedColor){
    $('#'+pressedColor).addClass('pressed');
    setTimeout(function(){
        $('#'+pressedColor).removeClass('pressed');
    },100);
}

function checkAnswer(currentLevel){
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

        console.log("success");
  
        
        if (userClickedPattern.length === gamePattern.length){
  
          
          setTimeout(function () {
            randomsequence();
          }, 1000);
  
        }
  
      } else {
  
        console.log("wrong");
        playSound('wrong');
        $('body').addClass('game-over');
        setTimeout(function(){
            $('body').removeClass('game-over');
        },200);
        startOver();
  
      }
}

function startOver(){
level=0;
gamePattern=[];
gamestarted=false;
$('#level-title').html("Game over restart the game by pressing any button");
}