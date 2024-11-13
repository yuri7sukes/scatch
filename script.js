for (let e of document.querySelectorAll('input[type="range"].slider-progress')) {
    e.style.setProperty('--value', e.value);
    e.style.setProperty('--min', e.min == '' ? '0' : e.min);
    e.style.setProperty('--max', e.max == '' ? '100' : e.max);
    e.addEventListener('input', () => e.style.setProperty('--value', e.value));
}

function getCanvas(rows, columns) {
    const pixelSize = 640/rows;

    for (let i = 0; i < rows*columns; i++) {
        const divPixel = document.createElement('div')
        divPixel.setAttribute('style', `height:${pixelSize}px; width:${pixelSize}px`)
        console.log(divPixel)
        divPixel.classList.add('pixel');
        const canvas = document.querySelector('.canvas')
        canvas.appendChild(divPixel)
    }
}
getCanvas(50, 50);

// slider.oninput = () => {
//     let val =
// }

function myFunction() {
    // const canvas = document.querySelector('.canvas')
    // canvas.innerHTML = "";

    clearCanvas() 
    const slider = document.querySelector('#myRange');
    const gridSizeText = document.querySelector('.hello-text');
    gridSizeText.textContent = `${slider.value}x${slider.value}`;
    getCanvas(slider.value, slider.value)
  }

function clearCanvas() {
    const pixels = document.querySelectorAll('.pixel');
    const canvas = document.querySelector('.canvas')

    for (pixel of pixels) {
        canvas.removeChild(pixel);
    }
}
