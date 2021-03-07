let canvas;

function setup() {
    canvas = createCanvas(
        document.getElementById('canvas').offsetWidth,
        document.getElementById('canvas').offsetHeight,
    );
    canvas.parent('canvas');
    canvas.mouseClicked(updatePrev)
}

function draw() {
    background("white");

    stroke(0);
    strokeWeight(2)
    let pos = createPositionsArray(prevX, prevY, 50)
    pos.forEach(coord => {
        line(prevX, prevY, coord[0], coord[1])
    })
}

function windowResized() {
    resizeCanvas(
        document.getElementById('canvas').offsetWidth,
        document.getElementById('canvas').offsetHeight,
    );
}

function updatePrev() {
    prevX = mouseX
    prevY = mouseY
}

const sketch = function (p) {
    p.setup = setup;
    p.draw = draw;
    p.windowResized = windowResized;
};

document.onload = function (e) {
    new p5(sketch, 'canvas');
};
