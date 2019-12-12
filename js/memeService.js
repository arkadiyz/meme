'use strict'
var gIndex = 1;
var gMeme = {
    selectedImgId: 5, selectedTxtIdx: 0,

    txts: [{
        line: 'I never eat Falafel',
        size: '50px',
        font: 'Inpact',
        align: 'left',
        color: 'black',
        posX: 0,
        posY: 0
    }]
}
function setImg(img) {

    gMeme.selectedImgId = img.id;
    gMeme.selectedTxtIdx = gIndex++;

}
function setPosForTxt(posX, posY) {
    let img = loadFromStorage('img');
    // img.posTextX = posX;
    // img.posTextY = posY;
}
function setFont(font) {

    gMeme.txts[0].font = font;
}

function getMeme() {
    return gMeme;
}
function setText(txt) {
    gMeme.txts[0].line = txt;
}

function setTxtSize(size) {
    gMeme.txts[0].size = size;
}
function setColorTxt(color) {
    gMeme.txts[0].color = color;
}
function setTextAlign(aling) {
    gMeme.txts[0].align = aling;
}
function setPosTxt(posX, posY) {
    gMeme.txts[0].posX = posX;
    gMeme.txts[0].posY = posY;
}

function getText() {
    return gMeme.txts[0].line;
}
function getTxtSize() {
    return gMeme.txts[0].size;
}
function getFont() {
    return gMeme.txts[0].font;
}
function getColortxt() {
    return gMeme.txts[0].color;
}
function getTextAlign() {
    return gMeme.txts[0].align;
}
function getPosTxt() {
    var pos = {
        posX: gMeme.txts[0].posX,
        posY: gMeme.txts[0].posY
    }
    return pos
}
