'use strict'


let gCanvas;
let gCtx;
let gImg;
let sumLine = 0;
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
function draw() {

    gCtx.save();

    var elText = document.querySelector('.input-text');

    let offsetX;
    let offsetY;
    let pos = getPosTxt();
    if (!pos.posX && !pos.posY) {
        offsetX = 70
        offsetY = 50
    } else {
        offsetX = pos.posX;
        offsetY = pos.posY;
    }


    setPosTxt(offsetX, offsetY);
    setText(elText.value);
    renderCanvas();


}

function drawText() {
    let txts = getGMemeTxts();

    txts.forEach(function (txt) {
        checkFillColor();
        if (!txt.size) {
            txt.size = 50;
        }
        gCtx.font = 'bold ' + txt.size + 'px ' + txt.font;
        gCtx.fillStyle = txt.color;
        gCtx.strokeStyle = txt.stroke;
        
        gCtx.fillText(txt.line, txt.posX, txt.posY);
        gCtx.strokeText(txt.line, txt.posX, txt.posY);
    })
    return

}

function onSetSize(size) {


    setTxtSize(getTxtSize() + size);
    renderCanvas()

}

function onSetFont(font) {

    setFont(font);
    renderCanvas()
}

function checkFillColor() {
    let fill = document.querySelector('.fill-color-input').value;
    let stroke = document.querySelector('.stroke-color-input').value;
    setColorTxt(fill);

    
    setColorStrokTxt(stroke);

}

// function checkStrokColor() {
//     let color = document.querySelector('.strok-color-input').value;
//     setColorTxt(color);

// }

function onSetAling(aling) {

    setTextAlign(aling);
    let pos = getPosTxt();


    let txt = getText();

    console.log(gCtx.measureText(txt));

    switch (aling) {
        case 'left':
            // gCtx.textAlign = 'left';
            pos.posX = 20;
            setPosTxt(pos.posX, pos.posY);
            renderCanvas();
            break;
        case 'right':
            // gCtx.textAlign = 'right';
            pos.posX = gCanvas.width - (gCtx.measureText(txt).width);
            
            setPosTxt(pos.posX, pos.posY);
            renderCanvas();
            break;
        case 'center':
            pos.posX = (gCanvas.width - getText().length) / 2;
            setPosTxt(pos.posX, pos.posY);
            renderCanvas();
            break;

        default:
            break;
    }

    setPosTxt(pos.posX, pos.posY);
}

// function checkLength() {
//     let txt = getText();
    
//     if ((gCtx.measureText(txt).width+75) > gCanvas.width) {
//         setTxtSize(getTxtSize()-75-50);
       
//     }

// }

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
    let text = document.querySelector('.input-text').value="";
    let color = document.querySelector('.fill-color-input').value;
    let strok = document.querySelector('.stroke-color-input').value;

    
    let offsetX = gCanvas.height - 250;
    let offsetY = gCanvas.width - 250;
    if (sumLine >= 1) {
        offsetX = (250, gCanvas.height / 2);
        offsetY = getRandomInt(250, gCanvas.width / 2);

    }
    sumLine++;

    addNewLine(text, 50, 'Impact', 'left', color,strok, offsetX, offsetY);
    moveSelectedTxtId();
    renderCanvas()
}

function moveNextLine() {

    moveSelectedTxtId();
    document.querySelector('.input-text').value = getText();
    document.querySelector('.fill-color-input').value = getColortxt();
    document.querySelector('.stroke-color-input').value=getColorStrokTxt();
}

function downloadCanvas(elLink) {
    //  const data = gCanvas.toDataURL('download-btn');
    //  elLink.href = gCanvas.toDataURL("image/png");

    // elLink.href = imgContent
    // elLink.href = data
    // elLink.download = 'my-img.png';
    var image = gCanvas.toDataURL("image/png", 1.0).replace("image/png", "image/octet-stream");
    var link = document.createElement('a');
    link.download = "my-image.png";
    link.href = image;
    link.click();
    debugger
}
function getRandomInt(min, max) {

    return Math.floor(Math.random() * (max - min)) + min;
}
function toggleMenu() {
    document.body.classList.toggle('menu-open');
}
