'use strict'

function init() {
    createImgs();
    renderGallery();
}

function renderGallery() {
    var imgs = getImgs();
    var elImgs = document.querySelector('.gallery-grid');
    var strHtml= imgs.map(function(img) {
        return `<img class="img-gallery" src="${img.url}">`
    });
    elImgs.innerHTML=strHtml.join('');
}
