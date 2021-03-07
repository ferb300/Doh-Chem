let canvas;

function setup() {
  canvas = createCanvas(
    document.getElementById('canvas').offsetWidth,
    document.getElementById('canvas').offsetHeight,
  );
  canvas.parent('canvas');
}

function draw() {
  background(220);

  if (mouseIsPressed) {
    ellipse(50, 50, 50, 50);
  } else {
    rect(25, 25, 50, 50);
  }
}

function windowResized() {
  resizeCanvas(
    document.getElementById('canvas').offsetWidth,
    document.getElementById('canvas').offsetHeight,
  );
}

const sketch = function (p) {
  p.setup = setup;
  p.draw = draw;
  p.windowResized = windowResized;
};

document.onload = function (e) {
  new p5(sketch, 'canvas');
};
