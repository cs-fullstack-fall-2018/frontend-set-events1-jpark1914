//Step 1
var totalScore = document.getElementById("score");
var button1 = document.getElementById("theButton");
var sum = 0;
button1.addEventListener("click", sumPress);

function sumPress() {
    sum += 1;
    totalScore.innerHTML = sum;
}
//Step 2
var totalScore2 = document.getElementById("score2");
var button2 = document.getElementById("theButton2");
var sum2 = 0;

button2.addEventListener("click", sumPress2);

function sumPress2() {
    sum2 += 1;
    totalScore2.innerHTML = sum2;
}

//Step 3

var theReset = document.getElementById("reset");

theReset.addEventListener("click",function () {
    var newSum = 0;
    sum = newSum;
    totalScore.innerHTML = sum;

    var newSum2 = 0;
    sum2 = newSum2;
    totalScore2.innerHTML = sum2;
} );


/*

Step 1:
Complete

Step 2:
Complete

From Kenn
*/