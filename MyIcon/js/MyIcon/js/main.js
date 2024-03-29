(function() {
  'use strict';

  var stage = document.getElementById('stage');
  var ctx;
  var angle = 0;

  var WIDTH = stage.width; // 300
  var HEIGHT = stage.height; // 260

  function draw() {
    var r0 = 50;
    var r1 = 60;

    ctx.save();
    ctx.translate(WIDTH / 2, HEIGHT / 2);
    ctx.rotate(Math.PI / 180 * angle);

    ctx.strokeStyle = 'orange';
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.moveTo(0, -r0);
    ctx.lineTo(0, -r1);
    ctx.stroke();

    ctx.restore();
  }

  function update() {
    ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
    ctx.fillRect(0, 0, WIDTH, HEIGHT);
    draw();
    angle += 12;
    setTimeout(function() {
      update();
    }, 60);
  }

  if (typeof stage.getContext === 'undefined') {
    return;
  }
  ctx = stage.getContext('2d');

  update();
})();
