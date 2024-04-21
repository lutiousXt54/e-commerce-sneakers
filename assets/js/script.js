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

//item categories
const itemCategories=(event)=>{
    const productsBar = document.createElement('div');
    productsBar.className='product-bar';
    const items = document.querySelector('.items');
    productsBar.appendChild(items);
    const discount =  document.querySelector('.discount');
    productsBar.appendChild(discount);
    const heading = items.querySelector('.heading');
    heading.textContent='';
    const removeImg = document.createElement('img');
    removeImg.src='./assets/images/cross.svg';
    removeImg.className='remove';
    const head2 = document.createElement('div');
    head2.className='h2';
    head2.textContent='categories';
    heading.appendChild(head2);
    heading.appendChild(removeImg);
    document.body.appendChild(productsBar);
    removeImg.addEventListener('click',()=>{
        productsBar.style.display='none';
    });
    event.target.addEventListener('click',()=>{
        productsBar.style.display='none';
    });
}

function timer(){
    
}