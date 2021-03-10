function cardbox(size, items) {
    return `
    <div class="card col-${size} shadow m-5 bg-body rounded">
        <div class="card-body container">
            <div class="row justify-content-md-center">
                ${items.join("")}
            </div>
        </div>
    </div>
    `
}

