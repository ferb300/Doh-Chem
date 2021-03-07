var clickX
var clickY
var currentPosition = 0;

function mouseClickCanvas() {
    clickX = mouseX
    clickY = mouseY
}

function keyDownDocument(e) {
    switch (e.keyCode) {
        case 37: //left arrow navigates through positions
            currentPosition += 1
            break;
        case 39: //right arrow navigates through positions
            currentPosition -= 1
            break;
        default:
            break;
    }
    if (currentPosition < 0) {
        currentPosition = 11
    } else if (currentPosition > 11) {
        currentPosition = 0
    }
}