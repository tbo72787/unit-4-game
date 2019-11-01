$(document).ready(function() {
// declare global variables 
  var randNum = 0;
  var score = 0;
  var gemArr = [];

// make buttons poopulate the score display with associated value
  $("#gem-1").click(function() {
    score += gemArr[0];
    $("#score-dis").html(score);
    console.log("Score - " + score)
  })
  $("#gem-2").click(function() {
    score += gemArr[1];
    $("#score-dis").html(score);
    console.log("Score - " + score)
  })
  $("#gem-3").click(function() {
    score += gemArr[2];
    $("#score-dis").html(score);
    console.log("Score - " + score)
  })
  $("#gem-4").click(function() {
    score += gemArr[3];
    $("#score-dis").html(score);
    console.log("Score - " + score)
  })

// assign random number between 19 and 120 to randNum, log result, display randNum in random number display
  function randNumPop() {
    randNum = randGen(19, 120);
    console.log("Random Number - " + randNum);
    $("#rand-num-dis").html(randNum);
    return randNum;
  }

// populate gemArr with 4 random numbers, each between 1 and 12, and log results
  function gemPop() {
    for (var i = 0; i < 4; i++) {
      var gemNum = randGen(1, 12);
      gemArr.push(gemNum);
      console.log("Gem " + (i+1) + " - " + gemNum);
    }
  }

// reset game(set score to 0, generate and display new random number, repopulate gemArr)
  function reset() {
    score = 0;
    gemArr = [];
    randNumPop();
    gemPop();
    console.log("Score - " + score)
  }

  // return random number between min and max
  function randGen(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  

  }
 reset();
});