const menuFunc =()=>{
    const menu = document.createElement('div');
    const option = document.querySelector('.option');
    menu.className='menu-bar';
    const categories = document.querySelector('.categories');
    const socialMedia = document.querySelector('.social');
    const heading=document.createElement('div');
    heading.className='head';
    const h2Node = document.createElement('h2');
    h2Node.textContent='menu';
    const imgCancel = document.createElement('img');
    imgCancel.className='remove';
    imgCancel.src='./assets/images/cross.svg';
    heading.appendChild(h2Node);
    heading.appendChild(imgCancel);
    menu.appendChild(heading);
    menu.appendChild(categories);
    if(screen.width < 490){
        menu.appendChild(option);
    }
    menu.appendChild(socialMedia);
    document.body.appendChild(menu)
    const width = window.innerHeight;
    menu.style.height=`${width}`;
    imgCancel.addEventListener('click',()=>{
        menu.style.display='none';
    });
    console.log(menu,heading,width);
}