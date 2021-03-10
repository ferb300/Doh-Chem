function cardboxDropdown(icon, items) {
    return `
    <div class="col col-sm-auto">
        <div class="dropstart">
            <a href="#" class="link-dark" data-bs-toggle="dropdown">
                <i data-feather="${icon}"></i>
            </a>
            <ul class="dropdown-menu">
                ${items.join("")}
            </ul>
        </div>
    </div>
    `
}