'use strict'

var gKeywords ={};
var pathImg = '../img/meme-imgs/'
var gNextIdImgs = 1;
var imgs=['003.jpg','004.jpg','005.jpg','5.jpg','006.jpg','8.jpg','9.jpg','12.jpg','Ancient-Aliens.jpg','img5.jpg','img11.jpg','img12.jpg','leo.jpg','meme1.jpg'
,'One-Does-Not-Simply.jpg','patrick.jpg','putin.jpg','X-Everywhere.jpg'];
var gImgs = [];

function createImg(url,keyWords){
    
    return {
        
        id:gNextIdImgs++,
        url,
        keyWords
    }
}

function createImgs() {
    
    imgs.forEach( function(img){
        gImgs.push(createImg(pathImg+img,'happy'));
    }); 
}


function getImgs(){
    return gImgs;
}
