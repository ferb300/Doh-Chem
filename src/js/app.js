

//p5 init
const sketch = function (p) {
    p.setup = setup;
    p.draw = draw;
    p.windowResized = windowResized;
};


//add event handlers
document.onkeydown = keyDownDocument
document.getElementById("rangeScaleFactor").addEventListener("input", inputRangeScaleFactor)
document.getElementById("btnDownload").addEventListener("click", clickBtnDownload)
document.getElementById("btnHelp").addEventListener("click", clickBtnHelp)
document.getElementById("btnInfo").addEventListener("click", clickBtnInfo)
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

}

function clickBtnHelp(e) {

}

function clickBtnInfo(e) {

}


//icon replacing
feather.replace()

//ui