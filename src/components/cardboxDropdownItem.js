function cardboxDropdownItem(icon, text, onclick) {
    return `
    <li><a class="dropdown-item" href="#" onclick="${onclick.name}()"><i data-feather="${icon}"></i> ${text}</a></li>
    `
}