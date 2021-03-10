//add event handlers
document.onkeydown = keyDownDocument
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

function inputRangeScaleFactor(value) {
    scaleFactor = value / 10
}

function clickBtnExportPng() {
    saveCanvas("structure", "png")
}

function clickBtnExportJson() {
    let json = JSON.stringify(structure)
    download(json, "structure.json", "application/json");
}

function clickBtnHelp() {

}

function clickBtnPlus() {
    console.log("btn plus")
}

function clickBtnNav() {
    console.log("btn nav")
}

function clickBtnEye() {
    console.log("btn eye")
}