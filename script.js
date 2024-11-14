for (let e of document.querySelectorAll('input[type="range"].slider-progress')) {
    e.style.setProperty('--value', e.value);
    e.style.setProperty('--min', e.min == '' ? '0' : e.min);
    e.style.setProperty('--max', e.max == '' ? '100' : e.max);
    e.addEventListener('input', () => e.style.setProperty('--value', e.value));
}
getCanvas(50, 50);

const slider = document.querySelector('#myRange');
slider.addEventListener("mouseup", () => {
    let val = slider.value;
    getCanvas(val, val)
});

slider.oninput = () => {
    const gridSizeText = document.querySelector('.hello-text');
    gridSizeText.textContent = `${slider.value}x${slider.value}`
}

function getCanvas(rows, columns) {
    const pixelSize = 640/rows;
    clearCanvas();
    for (let i = 0; i < rows*columns; i++) {
        const divPixel = document.createElement('div')
        divPixel.setAttribute('style', `height:${pixelSize}px; width:${pixelSize}px`)
        console.log(divPixel)
        divPixel.classList.add('pixel');
        const canvas = document.querySelector('.canvas')
        canvas.appendChild(divPixel)
    }
}

function clearCanvas() {
    const canvas = document.querySelector('.canvas');
    canvas.innerHTML = "";
}
