function cardboxSlider(min, max, value, oninput) {
    return `
    <div class="col">
        <input type="range" class="form-range w-100" min="${min}" max="${max}" value="${value}" oninput="${oninput.name}(this.value)">
    </div>
    `
}