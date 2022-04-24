
const bgImgs = [
    "01.png",
    "02.png",
    "03.png",
    "04.png",
    "05.png",
    "06.png",
    "07.png",
    "08.png",
    "09.png",
    "10.png",
];

const selectedImg = bgImgs[Math.floor(Math.random() * bgImgs.length)];

document.body.style.backgroundImage = `url('img/${selectedImg}')`;