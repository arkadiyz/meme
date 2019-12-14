'use strict'
var gId = 1;

var gMeme = {
    selectedImgId: 0, selectedTxtIdx: 0,

    txts: [{

    }]
}
function createLine(line, size, font, aling, color,stroke, posX, posY) {
    return {
        line,
        size,
        font,
        aling,
        color,
        stroke,
        posX,
        posY,
        id: gId++
    }
}
function addNewLine(line, size =50, font, aling, color,stroke, posX = 50, posY = 50) {
    gMeme.txts.push(createLine(line, size, font, aling, color,stroke, posX, posY));
}

function setImg(img) {
    gMeme.selectedImgId = img.id;
}

function setPosForTxt(posX, posY) {
    let img = loadFromStorage('img');

}

function setFont(font) {

    gMeme.txts[gMeme.selectedTxtIdx].font = font;
}

function getMeme() {
    return gMeme;
}

function setText(txt) {
    gMeme.txts[gMeme.selectedTxtIdx].line = txt;
}

function setTxtSize(size) {
    gMeme.txts[gMeme.selectedTxtIdx].size = size;
}

function setColorTxt(color) {
    gMeme.txts[gMeme.selectedTxtIdx].color = color;
}

function setColorStrokTxt(color) {
    gMeme.txts[gMeme.selectedTxtIdx].stroke = color;
}

function setTextAlign(aling) {
    gMeme.txts[gMeme.selectedTxtIdx].align = aling;
}

function setPosTxt(posX, posY) {
    gMeme.txts[gMeme.selectedTxtIdx].posX = posX;
    gMeme.txts[gMeme.selectedTxtIdx].posY = posY;
}

function moveSelectedTxtId() {
    
    if (gMeme.selectedTxtIdx + 1 === gMeme.txts.length) {
        gMeme.selectedTxtIdx = 0
    } else {
        gMeme.selectedTxtIdx++;
    }

}

function getText() {
    return gMeme.txts[gMeme.selectedTxtIdx].line;
}

function getTxtSize() {
    return gMeme.txts[gMeme.selectedTxtIdx].size;
}

function getFont() {
    return gMeme.txts[gMeme.selectedTxtIdx].font;
}

function getColortxt() {
    return gMeme.txts[gMeme.selectedTxtIdx].color;
}

function getColorStrokTxt() {
   return gMeme.txts[gMeme.selectedTxtIdx].stroke ;
}

function getTextAlign() {
    return gMeme.txts[gMeme.selectedTxtIdx].align;
}

function getPosTxt() {
    var pos = {

        posX: gMeme.txts[gMeme.selectedTxtIdx].posX,
        posY: gMeme.txts[gMeme.selectedTxtIdx].posY
    }
    return pos
}
function getGMemeTxts() {
    return gMeme.txts;
}
function deleteRow(id) {
    gMeme.txts.splice(0, 1);
    initCanvas();
}
