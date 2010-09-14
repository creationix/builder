var WIDTH = 320;
var HEIGHT = 480;
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


  ctx.moveTo(x, y);

  ctx.beginPath();
  setInterval(function () {
      x += Math.random() * 10 - 5;
      y += Math.random() * 10 - 5;
      ctx.strokeStyle = 'rgb(128, 128, 128)';
      ctx.lineTo(x, y);
      ctx.stroke();
  }, 10);
}






