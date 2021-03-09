var middleX
var middleY
var mousePrevX
var mousePrevY
var scaleFactor = 10
var currentBond = 1;
var currentAtom = structure;
var bondMode = "all"

function mouseClickCanvas() {
    /*currentX = mouseX
    currentY = mouseY*/
}

function windowResized() {
    resizeCanvas(
        document.getElementById('canvas').offsetWidth,
        document.getElementById('canvas').offsetHeight,
    );
    middleX = windowWidth / 2
    middleY = windowHeight / 2
}

function keyDownDocument(e) {
    switch (e.keyCode) {
        case 37: // left arrow navigates through positions
            previousBond();
            break;
        case 38: // up arrow follows bond
            nextAtom()
            break;
        case 39: // right arrow navigates through positions
            nextBond()
            break;
        case 40: // down arrow follows opposite bond
            previousAtom()
            break;
        default:
            break;
    }

}

function previousBond() {
    do {
        currentBond -= 1
        if (currentBond < 1) {
            currentBond = 12
        }
    } while (!currentAtom.bonds[currentBond] && bondMode == "existing") 
}

function nextBond() {
    do {
        currentBond += 1
        if (currentBond > 12) {
            currentBond = 1
        }
    } while (!currentAtom.bonds[currentBond] && bondMode == "existing") 
}

function nextAtom() {
    if (currentAtom.bonds[currentBond] && currentAtom == currentAtom.bonds[currentBond].atom1) {
        currentAtom = currentAtom.bonds[currentBond].atom2
    } else if (currentAtom.bonds[currentBond]) {
        currentAtom = currentAtom.bonds[currentBond].atom1
    }
    if (bondMode == "existing") {
        nextBond()
    }
}

function previousAtom() {

}