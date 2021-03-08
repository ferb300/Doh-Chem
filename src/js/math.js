function degreesToRadians(deg) {
    return deg * (Math.PI/180)
}

function calculateAdjacentOffset(l) {
    return Math.cos(degreesToRadians(60)) * l
}

function calculateOppositeOffset(l) {
    return Math.sin(degreesToRadians(60)) * l
}

function createPositionsArray(xo, yo, l) {
    let xoff = calculateOppositeOffset(l)
    let yoff = calculateAdjacentOffset(l)
    return [
        [],
        [xo, yo - l],
        [xo + yoff, yo - xoff],
        [xo + xoff, yo - yoff],
        [xo + l, yo],
        [xo + xoff, yo + yoff],
        [xo + yoff, yo + xoff],
        [xo, yo + l],
        [xo - yoff, yo + xoff],
        [xo - xoff, yo + yoff],
        [xo - l, yo],
        [xo - xoff, yo - yoff],
        [xo - yoff, yo - xoff]
    ]
}