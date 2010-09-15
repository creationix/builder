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
  ctx.moveTo(x, y);
  setInterval(function () {
      i += 0.01;
      var a = Math.sin(i);
      var b = Math.cos(i);
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(255, ' + Math.floor(a * 128 + 128) + ', ' + Math.floor(b * 128 + 128) + ', 0.2)';
      x += a;
      y += b;
      for (var z = 0; z < 20; z++) {
          x += Math.random() * 10 - 5;
          y += Math.random() * 10 - 5;
          if (x < 0) x = 0;
          else if (x > WIDTH) x = WIDTH;
          if (y < 0) y = 0;
          else if (y > HEIGHT) y = HEIGHT;
          ctx.lineTo(x, y);
          ctx.moveTo(x + 4, y);
          ctx.lineTo(x, y + 4);
          ctx.lineTo(x - 4, y);
          ctx.lineTo(x, y - 4);
          ctx.lineTo(x + 4, y);
          ctx.moveTo(x, y);
      }
      ctx.stroke();
  }, 10);
}






