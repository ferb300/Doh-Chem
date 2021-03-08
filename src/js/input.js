var clickX
var clickY
var currentBond = 0;

function mouseClickCanvas() {
    clickX = mouseX
    clickY = mouseY
}

function keyDownDocument(e) {
    switch (e.keyCode) {
        case 37: // left arrow navigates through positions
            currentBond -= 1
            break;
        case 39: // right arrow navigates through positions
            currentBond += 1
            break;
        default:
            break;
    }
    if (currentBond < 0) {
        currentBond = 11
    } else if (currentBond > 11) {
        currentBond = 0
    }
}