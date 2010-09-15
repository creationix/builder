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



  var i = 0;
  setInterval(function () {
      i += 0.1;
      ctx.beginPath();
      ctx.moveTo(x, y);
      x += Math.random() * 20 - 10;
      y += Math.random() * 20 - 10;
      if (x < 0) x = 0;
      else if (x > WIDTH) x = WIDTH;
      if (y < 0) y = 0;
      else if (y > HEIGHT) y = HEIGHT;
      ctx.strokeStyle = 'rgb(255, ' + Math.floor(Math.sin(i) * 128 + 128) + ', ' + Math.floor(Math.cos(i) * 128 + 128) + ')';
      ctx.lineTo(x, y);
      ctx.stroke();
  }, 10);
}






