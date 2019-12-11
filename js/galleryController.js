'use strict'

function init() {
    createImgs();
    renderGallery();
}

function renderGallery() {
    var imgs = getImgs();
    var elImgs = document.querySelector('.gallery-grid');
    var strHtml= imgs.map(function(img) {
        return `<img class="img-gallery" onclick="openCanvas(${img.id})" src="${img.url}">`
    });
    elImgs.innerHTML=strHtml.join('');
}

function openCanvas(imgId) {
    debugger
    var img  = getImgById(imgId);
    saveToStorage('img',img);
    window.open('meme.html');
}
