var WIDTH = 320;
var HEIGHT = 320;
var x = WIDTH / 2;
var y = HEIGHT / 2;

window.onload = function () {
  // Start the palm system
  if (window.PalmSystem) {
    window.PalmSystem.stageReady();
  }

  // Create our canvas to draw on
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext("2d");

  clock(ctx);
  setInterval(function () {
      clock(ctx);
  }, 1000);
}






