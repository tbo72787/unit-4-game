$(document).ready(function() {
  
  var randNum = 0;
  var score = 0;
  var gemArr = [];
  
  function randNumPop() {
    randNum = randGen(19, 120);
    console.log("Random Number - " + randNum);
    $("#rand-num-dis").html(randNum);
    return randNum;
  }

  function gemPop() {
    for (var i = 0; i < 4; i++) {
      var gemNum = randGen(1, 12);
      gemArr.push(gemNum);
      console.log("Gem " + (i+1) + " - " + gemNum);
    }
  }

  function reset() {
    var score = 0;
    var gemArr = [];
    randNumPop();
    gemPop();
  }

  function randGen(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  

  }
 reset();
});