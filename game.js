
gamePattern=[];
userClickedPattern=[];
buttonColours=["red", "blue", "green", "yellow"];

var started = false;
var level = 0;

$(document).keydown(function(){
if (!started){
    $("h1").text("Level "+level);
    nextSequence();
    started=true;
}
});

$(".btn").click(function(){
    var userChosenColour=$(this).attr("id");
    //console.log(userChosenColour);
    userClickedPattern.push(userChosenColour);
    console.log(userClickedPattern);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
//console.log(userClickedPattern.length-1);
});

function checkAnswer(currentLevel){
    if (gamePattern[currentLevel]===userClickedPattern[currentLevel]){
        if(userClickedPattern.length===gamePattern.length){
            //console.log("Right");
            setTimeout(function () {
                nextSequence();
              }, 1000);
        }
    }
    else{playSound("wrong");
    $("body").addClass("game-over");
    $("#level-title").text("To Play Again , Press Any Key");

    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);
    startOver();
    }
        
    }
    
    
    

function nextSequence(){
    userClickedPattern=[];
    var randomNumber=Math.floor(Math.random()*4);
    //console.log(randomNumber);
    var randomChosenColour=buttonColours[randomNumber];
    //console.log(randomChosenColour);
    gamePattern.push(randomChosenColour);
    //console.log(gamePattern);
    $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
playSound(randomChosenColour);
animatePress(randomChosenColour);
level++;
$("h1").text("Level " + level);
} 

function playSound(name){
var audio = new Audio("./sounds/"+name+".mp3");
audio.play();
}

function animatePress(currentColour){
    $("#"+currentColour).addClass("pressed");
    
    setTimeout(function() {
    $("#"+currentColour).removeClass("pressed");
}, 100);
}

function startOver(){
    level=0;
    gamePattern=[];
    started=false;

}

