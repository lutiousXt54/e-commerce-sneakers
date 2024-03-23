function Fetch(){
    fetch('./index.html')
    .then(response =>{
        if(!response.ok){
            throw new Error('network issu');
        }
        return response.text();
    }).then(html=>{
        console.log(html)
        const parse = new DOMParser();
        const otherDoc = parse.parseFromString(html,'text/html');
        console.log(typeof(otherDoc))
        const buttonNodes = otherDoc.querySelectorAll('button');
        const container = document.createElement('div');
        container.className='container';
        document.body.appendChild(container)
        console.log(buttonNodes);
        for(let i=0;i<buttonNodes.length;i++){
            buttonNodes[i].addEventListener('click',(e)=>{
                if(e.target.innerText==='Add To Cart'){
                    const btn = e.target.parentElement.parentElement;
                    console.log(btn)
                    container.appendChild(btn)
                }
                console.log(e.target)
            })
        }
    }).catch(error=>{
        console.log('there was a problem with fetch error:',error)
    })
}
Fetch();


const navHead=()=>{
    const logoWeb = document.querySelector('#logo');
    logoWeb.addEventListener('click',()=>{
        window.location.href='./index.html';
    });

    const user = document.querySelector('.user');
    const docLink = ['./acccount.html','./whislist.html','./cardt.html']
    const images = user.querySelectorAll('img');
    console.log(typeof(images))
    console.log()
}
navHead();