function cardboxButton(icon, onclick, options) {
    if (onclick || options) {
        return `
        <div class="col col-sm-auto">
            <a href="#" class="link-dark" onclick="${(onclick||{}).name}()" ${options}>
                <i data-feather="${icon}"></i>
            </a>
        </div>
        `
    } else {
        return `
        <div class="col col-sm-auto">
            <i data-feather="${icon}"></i>
        </div>
        `
    }
}