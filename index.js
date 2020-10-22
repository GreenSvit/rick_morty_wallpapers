let topButtons = document.querySelectorAll('.gallery__button--top');
let thumbnails = document.querySelectorAll('.gallery__button--bottom');
let mainPic = document.querySelector('.gallery__img-source');
let mainTitle = document.querySelector('.gallery__main-title');
let toggles = [topButtons, thumbnails];

const data = {
    0: {
        title: "Look at this!",
        src: "img/1528892699_tv-series-rick-and-morty-5062.jpg"
    },
    1: {
        title: "Thoughtful Rick",
        src: "img/2661fd4e-4b16-4a31-9512-f8c7d293e830.jpg"
    },
    2: {
        title: "Rick - Terminator",
        src: "img/amazing-trailer-for-rick-and-morty-season-3-and-premiere-date-announced-social.jpg"
    }
}

let changePic = function (index) {
    return function f() {
        mainPic.src = data[index].src;
        mainTitle.textContent = data[index].title;
    }
}

for (let i in toggles) {
    toggles[i].forEach((item, i, arr) => item.addEventListener('click', changePic(i)));
}
