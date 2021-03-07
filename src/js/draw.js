let canvas;

//p5 functions
function setup() {
    canvas = createCanvas(
        document.getElementById('canvas').offsetWidth,
        document.getElementById('canvas').offsetHeight,
    );
    canvas.parent('canvas');
    canvas.mouseClicked(mouseClickCanvas)
}

function draw() {
    background("white");

    //Debug output
    textSize(32)
    text(`currPos: ${currentPosition}`, 0, 32)
    text(`clickX: ${clickX}`, 0, 64)
    text(`clickY: ${clickY}`, 0, 96)

    stroke(0);
    strokeWeight(2)
    let pos = createPositionsArray(clickX, clickY, 100)
    pos.forEach(coord => {
        line(clickX, clickY, coord[0], coord[1])
    })
    stroke("red")
    line(clickX, clickY, pos[currentPosition][0], pos[currentPosition][1])
}

function windowResized() {
    resizeCanvas(
        document.getElementById('canvas').offsetWidth,
        document.getElementById('canvas').offsetHeight,
    );
}

//p5 init
const sketch = function (p) {
    p.setup = setup;
    p.draw = draw;
    p.windowResized = windowResized;
};

//document event handlers
document.onload = function (e) {
    new p5(sketch, 'canvas');
};
document.onkeydown = keyDownDocument
