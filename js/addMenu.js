

    function AbrirMenu(){
        var menu = document.querySelector('.img-2')
        .addEventListener('click',()=>{
        var menuMobile = document.querySelectorAll('.menu-mobile ul');
 
        for(var i = 0; i < menuMobile.length;i++ ){
           if( menuMobile[i].style.display == 'flex'){
                menuMobile[i].style.display = 'none';
                var trocarImg = document.querySelector('.img-2 > img').src = 'imagens/Hamburger Menu.svg';
           }else {
                menuMobile[i].style.display = 'flex';
                var trocarImg = document.querySelector('.img-2 > img').src = 'imagens/close.svg';
           }
                  
        }})
}

AbrirMenu();