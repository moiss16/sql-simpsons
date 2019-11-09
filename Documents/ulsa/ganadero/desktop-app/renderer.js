const pixels = document.getElementById('pixels-text');

const getWidth = () =>{
    let width = document.documentElement.clientWidth;
    pixels.innerText = `${width}px`;
}

getWidth();
window.addEventListener('resize', getWidth);