$(document).ready(function() {
  var randNum = 0;
  var score = 0;
  var gemArr = [];
  
  function randNumPop() {
    randNum = randGen(19, 120);
    console.log(randNum);
    $("#rand-num-dis").html(randNum);
    return randNum;
  }

  function reset() {
    var score = 0;
    var gemArr = [];
    randNumPop();
  }

  function randGen(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  

  }
 reset();
});