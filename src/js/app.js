

//p5 init
const sketch = function (p) {
    p.setup = setup;
    p.draw = draw;
    p.windowResized = windowResized;
};


//add event handlers
document.onkeydown = keyDownDocument
$("#rangeScaleFactor").on("input",inputRangeScaleFactor)
$("#btnExportPng").click(clickBtnExportPng)
$("#btnExportJson").click(clickBtnExportJson)
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

function clickBtnExportPng(e) {
    saveCanvas("structure", "png")
}

function clickBtnExportJson(e) {
    let json = JSON.stringify(structure)
    download(json, "structure.json", "application/json");
}

function clickBtnHelp(e) {

}

function clickBtnInfo(e) {

}


//icon replacing
feather.replace()

//ui