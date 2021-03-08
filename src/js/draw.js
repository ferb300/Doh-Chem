let canvas;
let visited = [];

//p5 functions
function setup() {
    canvas = createCanvas(
        document.getElementById('canvas').offsetWidth,
        document.getElementById('canvas').offsetHeight,
    );
    middleX = windowWidth / 2
    middleY = windowHeight / 2
    canvas.parent('canvas');
    canvas.mouseClicked(mouseClickCanvas)
}

function draw() {
    background("white");

    // Debug output
    strokeWeight(2)
    textSize(32)
    text(`currentBond: ${currentBond}`, 10, 160)
    text(`middleX: ${middleX}`, 10, 192)
    text(`middleY: ${middleY}`, 10, 224)
    text(`scaleFactor: ${scaleFactor}`, 10, 256)

    // Atom selection
    strokeWeight((currentCount + 4) * 2 * scaleFactor)
    stroke('rgba(255,0,0,0.25)');
    circle(middleX, middleY, 5 * scaleFactor)

    // Bond selection
    let pos = createPositionsArray(middleX, middleY, (currentCount + 4) * 8 * scaleFactor)
    line(middleX, middleY, pos[currentBond][0], pos[currentBond][1])

    visited = [];
    drawStructure(currentAtom, middleX, middleY)
}

function drawStructure(atom, x, y) {
    if (!atom || visited.includes(atom)) return // make sure atom exists and hasnt been visited
    visited.push(atom) // add atom to visited atoms

    let pos = createPositionsArray(x, y, (currentCount + 4) * 8 * scaleFactor) //calculate all the positions around the atom
    
    stroke(0);
    strokeWeight((currentCount + 4) * 0.5 * scaleFactor)

    // go through all the bonds, if they exist draw them and make the recursive call
    for (let index = 0; index < atom.bonds.length; index++) {
        const bond = atom.bonds[index];
        if (bond && bond.type > 0 && bond.atom1 == atom) {
            line(x, y, pos[index][0], pos[index][1])
            drawStructure(bond.atom2, pos[index][0], pos[index][1])
        } else if (bond && bond.type > 0) {
            line(x, y, pos[index][0], pos[index][1])
            drawStructure(bond.atom1, pos[index][0], pos[index][1])
        }
    }
}