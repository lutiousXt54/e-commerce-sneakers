function navHead(){
    const navhead = document.querySelector('.nav-head');
    navhead.children[0].addEventListener('click',()=>{
        window.location.href='./index.html';
    });

    
}
navHead();

//load random bannerr when website is reloaded or opened
function loadBanner(){
    const backgroundImg = ['banner-1.jpg','banner-2.jpg','banner-3.jpg'];
    const index = Math.floor(Math.random()*backgroundImg.length);
    const img = document.querySelector('.trending');
    const styles = window.getComputedStyle(img);
    let backImg = styles.getPropertyValue('background-image');
    backImg=backImg.replace('name',backgroundImg[index]);
    img.style.backgroundImage=backImg;
}
loadBanner()

//trending banner swipe-up background
function swipeUp(event){
    const backgroundImg = ['banner-1.jpg','banner-2.jpg','banner-3.jpg'];
    const img = document.querySelector('.trending');
    const styles = window.getComputedStyle(img);
    let backImg = styles.getPropertyValue('background-image');
    let start = backImg.indexOf('banner');
    let end = backImg.length;
    const oneImg = backgroundImg[0];
    const twoImg = backgroundImg[1];
    const threeImg = backgroundImg[2];
    if(event.target.parentElement.className==='left'){
        if(backgroundImg.indexOf(backImg.slice(start,end-2))===0){
            backImg=backImg.replace(backImg.slice(start,end-2),threeImg);
            img.style.backgroundImage=backImg;
        }
        else if(backgroundImg.indexOf(backImg.slice(start,end-2))===1){
            backImg=backImg.replace(backImg.slice(start,end-2),oneImg);
            img.style.backgroundImage=backImg;
        }
        else if(backgroundImg.indexOf(backImg.slice(start,end-2))===2){
            backImg=backImg.replace(backImg.slice(start,end-2),twoImg);
            img.style.backgroundImage=backImg;
        }
    }
    else if(event.target.parentElement.className==='right'){
        if(backgroundImg.indexOf(backImg.slice(start,end-2))===0){
            backImg=backImg.replace(backImg.slice(start,end-2),twoImg);
            img.style.backgroundImage=backImg;
        }
        else if(backgroundImg.indexOf(backImg.slice(start,end-2))===1){
            backImg=backImg.replace(backImg.slice(start,end-2),threeImg);
            img.style.backgroundImage=backImg;
        }
        else if(backgroundImg.indexOf(backImg.slice(start,end-2))===2){
            backImg=backImg.replace(backImg.slice(start,end-2),oneImg);
            img.style.backgroundImage=backImg;
        }
    }
}