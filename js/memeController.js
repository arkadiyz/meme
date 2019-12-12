'use strict'


let gCanvas;
let gCtx;
let gImg;
let currselectedidx;
let txt;
function initCanvas() {

    renderCanvas();

}
function renderCanvas() {
    gCanvas = document.querySelector('#my-canvas');
    gCtx = gCanvas.getContext('2d');

    var img = loadFromStorage('img')
    setImg(img);
    gImg = new Image()
    gImg.onload = () => {

        gCtx.drawImage(gImg, 0, 0, gCanvas.width, gCanvas.height);
        drawText();
    };

    gImg.src = img.url;
}
function draw(ev) {

    gCtx.save();

    var elText = document.querySelector('.input-text');
    let offsetX ;
    let offsetY;
    let pos = getPosTxt();
    if (!pos.posX && !pos.posY) {
         offsetX = 20
         offsetY = 50   
    }else{
        offsetX = pos.posX;
        offsetY = pos.posY;
    }

    debugger
    setPosTxt(offsetX, offsetY);
    setText(elText.value);
    renderCanvas();


}

function drawText() {
    let txts = getGMemeTxts();
    txts.forEach(function (txt) {
        checkColor();
        gCtx.font = 'bold ' + txt.size + ' ' + txt.font;
        gCtx.fillStyle = txt.color;
        onSetAling(txt.aling);
        gCtx.fillText(txt.line, txt.posX, txt.posY);
    })


}

function onSetSize(size) {

    var elText = document.querySelector('.input-text');
    elText.value = '';
    setTxtSize(size);
}

function onSetFont(font) {
    setFont(font);
}

function checkColor() {
    let color = document.querySelector('.fill-color').value;
    setColorTxt(color);

}

function onSetAling(aling) {

    setTextAlign(aling);
    let pos = getPosTxt()

    switch (aling) {
        case 'left':
            gCtx.textAlign = 'left';
            pos.posX = 20;
            setPosTxt(pos.posX, pos.posY);
            renderCanvas();
            break;
        case 'right':
            gCtx.textAlign = 'right';
            pos.posX = gCanvas.width - (getText().length) - pos.posX;
            debugger
            setPosTxt(pos.posX, pos.posY);
            renderCanvas();
            break
        case 'center':
            pos.posX = (gCanvas.width - getText().length) / 2;
            setPosTxt(pos.posX, pos.posY);
            renderCanvas();
            break

        default:
            break;
    }

    setPosTxt(pos.posX, pos.posY);
}

function moveText(direction) {
    var txt = getText();

    let pos = getPosTxt()
    pos.posX;
    pos.posY += direction;
    setPosTxt(pos.posX, pos.posY);
    renderCanvas();

}

function onDeleteLine() {
    deleteRow();
}

function onAddNewLine() {
    let text = document.querySelector('.input-text').value;
    let color = document.querySelector('.fill-color').value;


    let offsetX = 20
    let offsetY = 70
    setPosTxt(offsetX, offsetY);

    addNewLine(text, '50px', 'Impact', 'left', color, offsetX, offsetY);

    drawText();
}

function moveNextLine() {
    moveSelectedTxtId();
}

function downloadCanvas(elLink) {
    const data = gCanvas.toDataURL()
    elLink.href = data
    elLink.download = 'my-img.png'
}