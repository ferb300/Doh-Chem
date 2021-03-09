

//p5 init
const sketch = function (p) {
    p.setup = setup;
    p.draw = draw;
    p.windowResized = windowResized;
};


//add event handlers
document.onkeydown = keyDownDocument
$("#rangeScaleFactor").click(inputRangeScaleFactor)
$("#btnDownload").click(clickBtnDownload)
$("#btnHelp").click(clickBtnHelp)
$("#btnInfo").click(clickBtnInfo)
if (screenfull.isEnabled) {
    screenfull.on('change', fullscreenChanged);
}

// UI events
function fullscreenChanged() {
    //switch icon on fullscreen switch
    if (screenfull.isFullscreen) {
        $("#icnMaximize").addClass("d-none")
        $("#icnMinimize").removeClass("d-none")
    } else {
        $("#icnMinimize").addClass("d-none")
        $("#icnMaximize").removeClass("d-none")
    }
}

function inputRangeScaleFactor(e) {
    scaleFactor = document.getElementById("rangeScaleFactor").value / 10
}

function clickBtnDownload(e) {
    saveCanvas("structure", "png")
}

function clickBtnHelp(e) {

}

function clickBtnInfo(e) {

}


//icon replacing
feather.replace()

//ui