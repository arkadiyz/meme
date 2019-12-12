'use strict'


let gCanvas;
let gCtx;
let gImg;
let currPosText = 50;
let txt;
function initCanvas() {
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
    console.log(gCtx);

    // gCanvas.addEventListener("touchstart", function (e) {
    //     gCanvas.addEventListener("touchmove", function (ev) {
    //         draw(ev.touches[0])
    //     });


    // });

}

function draw(ev) {

    gCtx.save();

    var elText = document.querySelector('.input-text');


    let offsetX = 150//ev.offsetX ;
    let offsetY = 50//ev.offsetY ;
    setPosTxt(offsetX,offsetY);
    setText(elText.value);
    drawText(offsetX, offsetY);
    // setPosForTxt(50, currPosText)
    // currPosText += 50;
}

function drawText(x, y) {

    let pos = getPosTxt()
    pos.posX ;
    pos.posY ;
    gCtx.textAlign = getTextAlign();
    // setPosTxt(x,y);
    txt = getText();
    setText(txt);
    checkColor();
    // txt +=elText.value;
    gCtx.font = 'bold ' + getTxtSize() + ' ' + getFont();
    gCtx.fillStyle = getColortxt();
    gCtx.fillText(txt, pos.posX, pos.posY);

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
}

function moveText(direction) {
    var txt = getText();
    initCanvas();
    //TODO: set new pos
    
    let pos = getPosTxt()
    pos.posX ;
    pos.posY +=direction;
    setPosTxt(pos.posX,pos.posY);
    drawText();
    // setPosForTxt(pos.posX, pos.posY);
}

function setCorserByAling() {

}