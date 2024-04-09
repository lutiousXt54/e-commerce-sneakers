//function for banner reload
function bannerReload(){
    const banner = document.querySelector('.banner-section');
    const offer = banner.querySelector('.offer');
    const Head3 = banner.querySelector('h3');
    const Head2 = banner.querySelector('h2');
    const Span = banner.querySelector('span');

    const bannerInfo = [
        {
            head3:'trending item',
            head2:"women's latest fashion sale",
            spanText:'20',
            img:'./assets/images/banner-1.jpg'
        },
        {
            head3:'trending accessories',
            head2:'modern sunglasses',
            spanText:'15',
            img:'./assets/images/banner-2.jpg'
        },
        {
            head3:'sale offer',
            head2:'new fashion summer sale',
            spanText:'29',
            img:'./assets/images/banner-3.jpg'
        }
    ];
    let index = Math.floor(Math.random()*bannerInfo.length);
    banner.style.backgroundImage=`url(${bannerInfo[index].img})`;
    Head3.innerText=bannerInfo[index].head3;
    Head2.innerText=bannerInfo[index].head2;
    Span.innerText=bannerInfo[index].spanText;
    Object.values(banner.querySelectorAll('img:not(.offer)')).forEach((e)=>{
        e.addEventListener('click',()=>{
            if (e.classList.contains('left')) {
                index = (index - 1 + bannerInfo.length) % bannerInfo.length;
            } else if (e.classList.contains('right')) {
                index = (index + 1) % bannerInfo.length;
            }
            banner.style.backgroundImage = `url(${bannerInfo[index].img})`;
            Head3.innerText = bannerInfo[index].head3;
            Head2.innerText = bannerInfo[index].head2;
            Span.innerText = bannerInfo[index].spanText;
        });
    });
}
bannerReload();

