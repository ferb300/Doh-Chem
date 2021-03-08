//p5 init
const sketch = function (p) {
    p.setup = setup;
    p.draw = draw;
    p.windowResized = windowResized;
};

//event handlers
document.onload = function (e) {
    new p5(sketch, 'canvas');


};
document.onkeydown = keyDownDocument
document.getElementById("rangeScaleFactor").addEventListener("input", inputRangeScaleFactor)


//icon replacing
feather.replace()