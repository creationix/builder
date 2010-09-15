function clock(ctx){
  var now = new Date();
  ctx.clearRect(0,0,320,320);

  // Draw nice box around the page
  ctx.save();
  ctx.strokeStyle = "rgba(0, 0, 200, 0.5)";  
  ctx.strokeRect (10, 10, 300, 300);  
  ctx.restore();

  ctx.save();
  ctx.translate(160,160);
  ctx.beginPath();
  ctx.lineWidth = 14;
  ctx.strokeStyle = '#325FA2';
  ctx.arc(0,0,142,0,Math.PI*2,true);
  ctx.stroke();

  ctx.strokeStyle = '#000000';
  // Hour marks
  ctx.lineWidth = 8;
  for (var i=0;i<12;i++){
    var x = Math.sin(Math.PI/6*i);
    var y = Math.cos(Math.PI/6*i);
    ctx.beginPath();
    ctx.moveTo(x*100,y*100);
    ctx.lineTo(x*125,y*125);
    ctx.stroke();
  }

  // Minute marks
  ctx.lineWidth = 5;
  for (i=0;i<60;i++){
    if (i%5!=0) {
      var x = Math.sin(Math.PI/30*i);
      var y = Math.cos(Math.PI/30*i);
      ctx.beginPath();
      ctx.moveTo(x*117,y*117);
      ctx.lineTo(x*125,y*125);
      ctx.stroke();
    }
  }
  
  var sec = now.getSeconds();
  var min = now.getMinutes();
  var hr  = now.getHours();
  hr = hr>=12 ? hr-12 : hr;

  ctx.fillStyle = "black";

  // write Hours
  var x = -Math.sin(hr*(Math.PI/6) + (Math.PI/360)*min + (Math.PI/21600)*sec+Math.PI);
  var y = Math.cos(hr*(Math.PI/6) + (Math.PI/360)*min + (Math.PI/21600)*sec+Math.PI);
  ctx.lineWidth = 14;
  ctx.beginPath();
  ctx.moveTo(x*-20,y*-20);
  ctx.lineTo(x*80,y*80);
  ctx.stroke();

  // write Minutes
  var x = -Math.sin((Math.PI/30)*min + (Math.PI/1800)*sec+Math.PI);
  var y = Math.cos((Math.PI/30)*min + (Math.PI/1800)*sec+Math.PI);

  ctx.lineWidth = 10;
  ctx.beginPath();
  ctx.moveTo(x*-28,y*-28);
  ctx.lineTo(x*112,y*112);
  ctx.stroke();
  
  // Write seconds
  var x = -Math.sin(sec * Math.PI/30+Math.PI);
  var y = Math.cos(sec * Math.PI/30+Math.PI);
  ctx.strokeStyle = "#D40000";
  ctx.fillStyle = "#D40000";
  ctx.lineWidth = 6;
  ctx.beginPath();
  ctx.moveTo(x*-30,y*-30);
  ctx.lineTo(x*83,y*83);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(0,0,10,0,Math.PI*2,true);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(x*95,y*95,10,0,Math.PI*2,true);
  ctx.stroke();
  ctx.fillStyle = "#555";
  ctx.arc(0,0,3,0,Math.PI*2,true);
  ctx.fill();

  ctx.restore();
}