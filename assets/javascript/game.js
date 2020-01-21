// Create variable to hold  the random number show to the user 19-120
var randomNumber = Math.floor(Math.random() * (120 - 19 + 1) + 19);
$(".randomNumber").text(randomNumber);

// Create variable to hold random number behind the images
var blucrystal = Math.floor(Math.random() * 12) + 1;
$("#blucrystal").html(
  "<img src=" + "assets/images/bluecrystal.png" + " value=" + blucrystal + ">"
);

var redcrystal = Math.floor(Math.random() * 12) + 1;
$("#redcrystal").html(
  "<img src=" + "assets/images/redcrystal.png" + " value=" + redcrystal + ">"
);

var lightcrystal = Math.floor(Math.random() * 12) + 1;
$("#lightcrystal").html(
  "<img src=" +
    "assets/images/lightcrystal.png" +
    " value=" +
    lightcrystal +
    ">"
);

var purpleCrystal = Math.floor(Math.random() * 12) + 1;
$("#purplecrystal").html(
  "<img src=" +
    "assets/images/purplecrystal.png" +
    " value=" +
    purpleCrystal +
    ">"
);

var wins = 0;
$(".wins").text("Wins" + " " + wins);

var losses = 0;
$(".losses").text("Losses" + " " + losses);

var totalScore = 0;

// functions to make the game work

// reset function

function reset() {
  randomNumber = Math.floor(Math.random() * (120 - 19 + 1) + 19);
  console.log(randomNumber);
  $(".randomNumber").text(randomNumber);
  blucrystal = Math.floor(Math.random() * 11 + 1);
  redcrystal = Math.floor(Math.random() * 11 + 1);
  lightcrystal = Math.floor(Math.random() * 11 + 1);
  purpleCrystal = Math.floor(Math.random() * 11 + 1);
  totalScore = 0;
  $(".totalScore").text(totalScore);
}

// win function

function win() {
  if (totalScore === number) {
    alert("You Win!");
    wins++;
    $(".wins").text("Wins" + wins);
    reset();
  }
}

// lose function

function lose() {
  if (totalScore > number) {
    alert("You Lose!");
    losses++;
    $(".losses").text(losses);
    reset();
  }

  // click functions

  $("#blucrystal").on("click", function() {
    totalScore = totalScore + blucrystal;
    $(".totalScore").text(totalScore);
    if (totalScore === randomNumber) {
      win();
    } else if (totalScore > randomNumber) {
      lose();
    }
  });

  $("#redcrystal").on("click", function() {
    totalScore = totalScore + redcrystal;
    $(".totalScore").text(totalScore);
    if (totalScore == randomNumber) {
      win();
    } else if (totalScore > randomNumber) {
      lose();
    }
  });

  $("#lightcrystal").on("click", function() {
    totalScore = totalScore + lightcrystal;
    $(".totalScore").text(totalScore);
    if (totalScore == randomNumber) {
      win();
    } else if (totalScore > randomNumber) {
      lose();
    }
  });

  $("#purpleCrystal").on("click", function() {
    totalScore = totalScore + purpleCrystal;
    $(".totalScore").text(totalScore);
    if (totalScore == randomNumber) {
      win();
    } else if (totalScore > randomNumber) {
      lose();
    }
  });
}
