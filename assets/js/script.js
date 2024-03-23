const navHead=()=>{
    const logoWeb = document.querySelector('#logo');
    logoWeb.addEventListener('click',()=>{
        window.location.href='./index.html';
    });

    const user = document.querySelector('.user');
    const docLink = ['./acccount.html','./whislist.html','./cart.html']
    const images = user.querySelectorAll('img');
    const arrImages = Object.values(images);
    // console.log(typeof(arrImages))
    for(let i=0;i<images.length;i++){
        images[i].addEventListener('click',(e)=>{
            window.open(docLink[arrImages.indexOf(e.target,'_self')])
        })
    }
}
navHead();

const topBannerSwipe =(event)=>{
    const banner = document.querySelector('.trending');
    const bannerStyle = window.getComputedStyle(banner);
    let bannerUrl = bannerStyle.getPropertyValue('background-image');
    let start = bannerUrl.lastIndexOf('/')+1;
    let end = bannerUrl.lastIndexOf('"');
    const images =['banner-1.jpg','banner-2.jpg','banner-3.jpg'];
    if(event.target.parentElement.className==='left'){
        const index = images.indexOf(bannerUrl.slice(start,end));
        if(index==0){
            const image = bannerUrl.slice(start,end);
            bannerUrl=bannerUrl.replace(image,images[images.length-1]);
            banner.style.backgroundImage=bannerUrl;
        }
        else{
            const image = bannerUrl.slice(start,end);
            bannerUrl=bannerUrl.replace(image,images[index-1]);
            banner.style.backgroundImage=bannerUrl;
        }
    }
    if(event.target.parentElement.className==='right'){
        const index = images.indexOf(bannerUrl.slice(start,end));
        if(index==(images.length-1)){
            const image = bannerUrl.slice(start,end);
            bannerUrl=bannerUrl.replace(image,images[images.length-images.length]);
            banner.style.backgroundImage=bannerUrl;
        }
        else{
            const image = bannerUrl.slice(start,end);
            bannerUrl=bannerUrl.replace(image,images[index+1]);
            banner.style.backgroundImage=bannerUrl;
        }
    }
}

// add to card products function
function addToCart(){
    const buttons = document.querySelectorAll('button')
    for(let i=0;i<buttons.length;i++){
        buttons[i].addEventListener('click',(e)=>{
            if(e.target.innerText==='Add To Cart'){
                e.currentTarget.innerText='remove';
            }
            else if(e.target.innerText==='Remove'){
                e.currentTarget.innerText='add to cart';
            }
        })
    }
}
addToCart()

function cartButtonStyle(){
    const btn = document.querySelectorAll('button');
    for(let i=0;i<btn.length;i++){
        if(btn[i].innerText==='Add To Cart'){
            btn[i].style.boxShadow='0px 0px 0px 1px rgb(185, 180, 180)'
        }
    }
}
cartButtonStyle();

