var answer;
var score = 0;
var backgroundImages = [];

function nextQuestion() {
  const n1 = Math.random() * 5;
  document.getElementById('n1').innerHTML = Math.floor(n1);
  const n2 = Math.random() * 5;
  document.getElementById('n2').innerHTML = Math.floor(n2);
  answer = Math.floor(n1) + Math.floor(n2)

}

function checkAnswer() {
  const prediction = predictImage();
  console.log('answer: ', answer, 'prediction: ', prediction);

  if (prediction == answer) {
    console.log(score);
    score++;
    console.log("correct! score :", score);

    if (score == 1) {
      backgroundImages.push("url('images/background1.svg')");
    } else if (score == 2) {
      backgroundImages.push("url('images/background2.svg')");
    } else if (score == 3) {
      backgroundImages.push("url('images/background3.svg')");
    } else if (score == 4) {
      backgroundImages.push("url('images/background4.svg')");
    } else if (score == 5) {
      backgroundImages.push("url('images/background5.svg')");
    } else if (score == 6) {
      backgroundImages.push("url('images/background6.svg')");
    } else if (score == 7) {
      alert('Well done! your math garden is in full bloom! Want to start again?')
      score = 0;
      backgroundImages = [];
    }
    document.body.style.backgroundImage = backgroundImages;
    } else {
      if (score != 0) {score--;}
      console.log("wrong:( score: ", score);
      alert('oops! check your calculations and try writing the number neater next time!')
      setTimeout(function() {
        backgroundImages.pop();
        document.body.style.backgroundImage = backgroundImages;
      }, 1000);

  }
}
