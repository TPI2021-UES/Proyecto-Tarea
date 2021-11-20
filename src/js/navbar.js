const idMenu = document.getElementById('idMenu');
const idNavbar = document.getElementById('idNavbar');


idMenu.addEventListener('click', () => {
    console.log("prueba");
    idNavbar.classList.toggle('open__navbar');
});
