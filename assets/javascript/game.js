

// Create variable to hold  the random number show to the user 19-120
var randomNumber = Math.floor(Math.random() * 102) + 19;
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

var purplecrystal = Math.floor(Math.random() * 12) + 1;
$("#purplecrystal").html(
  "<img src=" +
    "assets/images/purplecrystal.png" +
    " value=" +
    purplecrystal +
    ">"
);

var wins = 0;
$(".wins").text("Wins" + " " + wins);

var losses = 0;
$(".losses").text("Losses" + " " + losses);

var totalScore = 0;
$(".totalScore").text(totalScore)

// functions to make the game work

// reset function

function reset() {
  randomNumber = Math.floor(Math.random() * 102) + 19;
  console.log(randomNumber);
  $(".randomNumber").text(randomNumber);
  blucrystal = Math.floor(Math.random() * 11 + 1);
  $("#blucrystal").html(
    "<img src=" + "assets/images/bluecrystal.png" + " value=" + blucrystal + ">"
  );
  redcrystal = Math.floor(Math.random() * 11 + 1);
  $("#redcrystal").html(
    "<img src=" + "assets/images/redcrystal.png" + " value=" + redcrystal + ">"
  );
  lightcrystal = Math.floor(Math.random() * 11 + 1);
  $("#lightcrystal").html(
    "<img src=" +
      "assets/images/lightcrystal.png" +
      " value=" +
      lightcrystal +
      ">"
  );
  purplecrystal = Math.floor(Math.random() * 11 + 1);
  $("#purplecrystal").html(
    "<img src=" +
      "assets/images/purplecrystal.png" +
      " value=" +
      purplecrystal +
      ">"
  );
  totalScore = 0;
  $(".totalScore").text(totalScore);
}

// win function

function win() {
  if (totalScore === randomNumber) {
    alert("You Win!");
    wins++;
    $(".wins").text("Wins" + " " + wins);
    reset();
  }
}

// lose function

function lose() {
  if (totalScore > randomNumber) {
    alert("You Lose!");
    losses++;
    $(".losses").text("Wins" + " " + losses);
    reset();
  }
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

  $("#purplecrystal").on("click", function() {
    totalScore = totalScore + purplecrystal;
    $(".totalScore").text(totalScore);
    if (totalScore == randomNumber) {
      win();
    } else if (totalScore > randomNumber) {
      lose();
    }
  });



