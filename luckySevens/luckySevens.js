var numRolls = 0;
var highestAmount = 0;
var rollAtHighestAmount = 0;

function rollDice() {
  var die1 = Math.floor(Math.random()*6+1);
  var die2 = Math.floor(Math.random()*6+1);
  return die1 + die2;
}

function popTable(bet, numRolls, highestAmount, rollAtHighestAmount) {
  document.getElementById("starting-bet").innerHTML = "$"+bet;
  document.getElementById("total-rolls").innerHTML = numRolls;
  document.getElementById("highest-won").innerHTML = "$"+highestAmount;
  document.getElementById("highest-rolls").innerHTML = rollAtHighestAmount;
}

function gameReset() {
  numRolls = 0;
  highestAmount = 0;
  rollAtHighestAmount = 0;
  document.getElementById("bet-input").value = "";
}

function checkBet(bet) {
  if (bet>0 && !isNaN(bet)) {
    return true;
  } else {
    return false;
  }
}

function playGame() {
  var bet = document.getElementById("bet-input").value;
  if (checkBet(bet)) {
    var rollResult;
    var total = bet;
    while (checkBet(total)) {
      rollResult = rollDice();
      console.log("Roll Result: " + rollResult);
      numRolls += 1;
      if (rollResult == 7) {
        total += 4;
      } else {
        total -= 1;
      }
      console.log("New Total: "+total);
      if (total > highestAmount) {
        highestAmount = total;
        rollAtHighestAmount = numRolls;
      }
    }

    popTable(bet, numRolls, highestAmount, rollAtHighestAmount);

    postGameElements = document.getElementsByClassName("hidden")
    for (var i = 0; i < postGameElements.length; i++) {
      postGameElements[i].style.display = "";
    }

    gameReset();

  } else {
    alert("Please enter a number greater than 0");
    document.getElementById("bet-input").value = "";
    document.getElementById("bet-input").focus();
  }
}
