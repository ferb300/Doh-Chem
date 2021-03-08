let canvas;
let visited = [];

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
    strokeWeight(2)
    textSize(32)
    text(`currentBond: ${currentBond}`, 0, 32)
    text(`clickX: ${clickX}`, 0, 64)
    text(`clickY: ${clickY}`, 0, 96)

    /* Bond selection
    strokeWeight((currentCount + 4) * 20)
    stroke('rgba(255,0,0,0.25)');
    line(clickX, clickY, pos[currentBond][0], pos[currentBond][1])*/

    visited = [];
    drawAtom(structure, clickX, clickY)
}

function drawAtom(atom, x, y) {
    if (!atom || visited.includes(atom)) return // make sure atom exists and hasnt been visited
    visited.push(atom) // add atom to visited atoms

    let pos = createPositionsArray(x, y, (currentCount + 4) * 80) //calculate all the positions around the atom
    
    stroke(0);
    strokeWeight((currentCount + 4) * 5)

    // go through all the bonds, if they exist draw them and make the recursive call
    for (let index = 0; index < atom.bonds.length; index++) {
        const bond = atom.bonds[index];
        if (bond && bond.type > 0) {
            line(x, y, pos[index][0], pos[index][1])
            drawAtom(bond.atom2, pos[index][0], pos[index][1])
        }
    }
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
