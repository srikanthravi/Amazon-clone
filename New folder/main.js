const imgs = document.querySelectorAll('.header-slider ul img');
const preButton = document.querySelector('.control__prev');
const nextButton = document.querySelector('.control__next');

let n = 2

function changeSlider() {
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].style.display = "none";
    }
    imgs[n].style.display = "block";
}
changeSlider();
preButton.addEventListener('click', (e) => {
    if (n > 0) {
        n--;
    }
    else {
        n = imgs.length - 1;
    }
    changeSlider()
});

nextButton.addEventListener('click', (e) => {
    if (n < imgs.length - 1) {
        n++;
    }
    else {
        n = 0
    }
    changeSlider()
})
const scrollContainer = document.querySelectorAll('.products');
for (const item of scrollContainer) {
    item.addEventListener('wheel', (evt) => {
        evt.preventDefault();
        item.scrollLeft += evt.deltaY
    })
}   