function countDownTimer(minutes, id) {
  var pomoTime = 60 * minutes;
  var pomoIntervalId;
  var pomoTxt;
  var timer = false;
  var audio = new Audio('https://www.w3schools.com/tags/horse.mp3');
  this.start = function () {
    pomoTxt = document.getElementById(id);
    if (timer === false) {
      pomoIntervalId = setInterval(this.updatePomo, 1000);
      timer = true;
    }
    console.log(pomoIntervalId);
    console.log('timer' + pomoIntervalId);
  };

  this.updatePomo = function () {
    pomoTime--;

    var pomoMinutes = ('000' + Math.floor(pomoTime / 60)).slice(-2);
    var pomoSec = ('000' + (pomoTime % 60)).slice(-2);

    pomoTxt.textContent = `${pomoMinutes}:${pomoSec}`;
    document.title=`${pomoMinutes}:${pomoSec}`;
    console.log(pomoTime);
    if (pomoTime == 0) {
      audio.play();
      timer = false;
      clearInterval(pomoIntervalId);
    }
  };
  this.stop = function () {
    clearInterval(pomoIntervalId);
    timer = false;
  };
  this.reset = function () {
    // console.log(pomoTime);
    timer = false;
    clearInterval(pomoIntervalId);
    pomoTime = 60 * minutes + 1;
    this.updatePomo();
  };
}
