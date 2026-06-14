const sentences = [
  "Technology has become an important part of our daily lives. It helps people communicate, learn new skills, and complete tasks more efficiently. With regular practice, anyone can improve their typing speed and accuracy.",

  "Success does not come overnight. It requires hard work, dedication, and consistency. People who continue learning and improving themselves often achieve their goals more effectively.",

  "Programming is a valuable skill in today's digital world. Learning languages such as JavaScript allows developers to build websites, applications, and many other useful tools for users.",

  "Typing speed tests are useful for improving keyboard skills. Regular practice can increase both speed and accuracy, making it easier to complete work in less time."
];

let sentence = "";
let startTime;
let timer;
let timeLeft = 60;

function startTest() {

  clearInterval(timer);

  sentence =
    sentences[Math.floor(Math.random() * sentences.length)];

  document.getElementById("sentence").innerText =
    sentence;

  document.getElementById("inputBox").value = "";

  document.getElementById("inputBox").disabled = false;

  document.getElementById("result").innerHTML = "";

  document.getElementById("timer").innerText = "60";
  document.getElementById("wpm").innerText = "0";
  document.getElementById("accuracy").innerText = "0%";

  timeLeft = 60;

  startTime = new Date().getTime();

  timer = setInterval(() => {

    timeLeft--;

    document.getElementById("timer").innerText =
      timeLeft;

    if (timeLeft <= 0) {

      clearInterval(timer);

      document.getElementById("inputBox").disabled = true;

      document.getElementById("result").innerHTML =
        "⏰ Time Over!";
    }

  }, 1000);
}

document
.getElementById("inputBox")
.addEventListener("input", function () {

  let typedText = this.value;

  let correctChars = 0;

  for (let i = 0; i < typedText.length; i++) {

    if (typedText[i] === sentence[i]) {
      correctChars++;
    }

  }

  let accuracy = typedText.length
    ? Math.round((correctChars / typedText.length) * 100)
    : 0;

  document.getElementById("accuracy").innerText =
    accuracy + "%";

  if (typedText === sentence) {

    clearInterval(timer);

    let endTime = new Date().getTime();

    let timeTaken =
      (endTime - startTime) / 1000;

    let words =
      sentence.split(" ").length;

    let wpm =
      Math.round((words / timeTaken) * 60);

    document.getElementById("wpm").innerText =
      wpm;

    document.getElementById("result").innerHTML =
      `🏆 Test Completed <br>
       ⚡ WPM: ${wpm} <br>
       🎯 Accuracy: ${accuracy}%`;

    document.getElementById("inputBox").disabled = true;
  }

});