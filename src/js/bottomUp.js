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
    currentValueScroll = document.documentElement.scrollTop;
    if(currentValueScroll > 0) {
        window.requestAnimationFrame(scrollUp);
        document.documentElement.scrollTo(0, currentValueScroll-(currentValueScroll/1.4));
    }
}

buttonToUp.addEventListener('click', () => scrollUp());
