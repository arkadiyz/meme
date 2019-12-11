'use strict'


let gCanvas;
let gCtx;
let gImg;
let currPosText = 50;
function initCanvas() {
    gCanvas = document.querySelector('#my-canvas');
    gCtx = gCanvas.getContext('2d');
    debugger
    var img = loadFromStorage('img')
    gImg = new Image()
    gImg.onload = () => {
        gCtx.drawImage(gImg, 0, 0, gCanvas.width, gCanvas.height)
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
    

    // var touch = ev;
    let offsetX = 50//ev.offsetX ;
    let offsetY = currPosText//ev.offsetY ;
    currPosText += 50;
    drawText( offsetX,offsetY); 
}

function drawText( x, y) {
    debugger
    var elText = document.querySelector('.input-text');
    gCtx.font = 'bold 70px Inpact';
    gCtx.fillText(elText.value, x, y);
    gCtx.strokeText(elText.value, x, y);
}
