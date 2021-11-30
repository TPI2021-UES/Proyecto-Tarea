const idButtonLinux =  document.getElementById('idButtonLinux');
const idButtonWindows = document.getElementById('idButtonWindows');
const idContentSecond = document.getElementById('idContentSecond');

idButtonLinux.addEventListener('click', () => {
    idContentSecond.setAttribute('content-active', 'linux')
    verifiedActived();
    idContentSecond.innerHTML = `
        <ol>
            <li>
                Haga click en <a href = "#">Download</a> para descargar la ultima version de Go
            </li>
            <li>
                <video controls width="300">
                    <source type = "video/mp4" src = "../../multimedia/basico/install.mp4" />
                </video>
            </li>
        </ol>
`;
});

idButtonWindows.addEventListener('click', () => {
    idContentSecond.setAttribute('content-active', 'windows')
    verifiedActived();
    idContentSecond.innerHTML = `
        <ol>
            <li>
                Haga click en <a href = "#">Download</a> para descargar la ultima version de Go
            </li>
            <li>
                <video controls width="300">
                    <source type = "video/mp4" src = "../../multimedia/basico/installwindows.mp4" />
                </video>
            </li>
        </ol>
`;
});

const verifiedActived = () => {
    if(idContentSecond.getAttribute('content-active') === 'linux') {
        idButtonLinux.style.backgroundColor = "#7ec4ed";
    } else {
        idButtonLinux.style.backgroundColor = "transparent";

    }
    if(idContentSecond.getAttribute('content-active') === 'windows') {
        idButtonWindows.style.backgroundColor = "#7ec4ed";
    } else {
        idButtonWindows.style.backgroundColor = "transparent";
    }

}

verifiedActived();
