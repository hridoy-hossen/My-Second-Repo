


  var canvas = document.getElementById('myCanvas');
  var ctx = canvas.getContext('2d');

  // একটি লাল বৃত্ত আঁকা
  ctx.beginPath();
  ctx.arc(250, 250, 100, 0, 2 * Math.PI);
  ctx.fillStyle = 'red';
  ctx.fill();

