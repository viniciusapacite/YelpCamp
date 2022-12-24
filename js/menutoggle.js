 function AbrirMenu(){
        var menu = document.querySelector('.menu-toggle')
        .addEventListener('click',()=>{
        var menuMobile = document.querySelectorAll('.menu-mobile ul');
        console.log(menuMobile)
        for(var i = 0; i < menuMobile.length;i++ ){
           if( menuMobile[i].style.display == 'flex' ){
                menuMobile[i].style.display = 'none';
                var trocarImg = document.querySelector('.menu-toggle > img').src = 'imagens/Hamburger Menu.svg';
           }else {
                menuMobile[i].style.display = 'flex';
                var trocarImg = document.querySelector('.menu-toggle > img').src = 'imagens/close.svg';
           }
        }
    })
}

AbrirMenu();

const filterElement = document.querySelector('.campus > input[type=search]');
const cards = document.querySelectorAll('.boxeOne');
filterElement.addEventListener('input', filterCards);

function filterCards() {
    if(filterElement != ''){
        for(let card of cards){
            let title = card.querySelector('h4');
            title = title.textContent.toLowerCase();
            let filterText = filterElement.value.toLowerCase() 
            if(!title.includes(filterText)){
                card.style.display = 'none';
            }
            else {
                card.style.display = 'block';
            }
        }
    }else {
        for (let card of cards){
            card.style.display = 'block';
        }
    }
}
