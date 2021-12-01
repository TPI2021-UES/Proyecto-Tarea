console.log("Prueba")

const buttonToUp = document.getElementById('toUp');
let currentValueScroll;

const showButtonUp = () => {
    currentValueScroll = document.documentElement.scrollTop;
    if(currentValueScroll > 60) {
        buttonToUp.style.transform = "scale(1)";
    } else {
        buttonToUp.style.transform = "scale(0)";
    }
}

window.onscroll = () => {
    showButtonUp();
}

const scrollUp = () => {
    document.documentElement.scrollTo(0, 0);
}

buttonToUp.addEventListener('click', () => scrollUp());
