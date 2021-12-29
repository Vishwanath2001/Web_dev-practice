var buttonColors=["red","blue","green","yellow"];
var gamePattern=[];
function randomsequence()
{
    var rand_num = Math.floor(Math.random()*4);
    var randomChosenColor=buttonColors[rand_num];
    gamePattern.push(randomChosenColor);
    $('#'+randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
    audio.play();
}

