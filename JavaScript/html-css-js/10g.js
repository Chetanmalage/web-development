function toggledChange(selector) {
    let gamingButton = document.querySelector(selector);
    if (!gamingButton.classList.contains('is-toggled')) {
        previousToggleOf();
        gamingButton.classList.add('is-toggled');
    } else {
        gamingButton.classList.remove('is-toggled');
    }

    function previousToggleOf(){
        const previousButton = document.querySelector('.is-toggled');

        if(previousButton){
            previousButton.classList.remove('is-toggled')
        }
    }
}