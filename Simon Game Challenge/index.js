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
    var rand_num = Math.floor(Math.random()*4);
    var randomChosenColor=buttonColors[rand_num];
    gamePattern.push(randomChosenColor);
    $('#'+randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
    level++;
    $('#level-title').html("Level "+level
    
    );
    
}
$(".btn").click(function () { 
    var userChosenColor=$(this).attr('id');
    userClickedPattern.push(userChosenColor);
    //console.log(userClickedPattern)
    playSound(userChosenColor);
    animatPress(userChosenColor)
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