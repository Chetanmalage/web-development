function toggledChange(selector) {
    let gamingButton = document.querySelector(selector);
    if (!gamingButton.classList.contains('is-toggled')) {
        gamingButton.classList.add('is-toggled');
    } else {
        gamingButton.classList.remove('is-toggled');
    }
}