function AbrirMenu(){
    var menu = document.querySelector('.menu-toggle')
    .addEventListener('click',()=>{
      var menuMobile = document.querySelectorAll('.menu-mobile > ul');
    for(var i = 0; i < menuMobile.length;i++ ){
       if( menuMobile[i].style.display == 'flex' ){
            menuMobile[i].style.display = 'none';
         trocarImg = document.querySelector('.menu-toggle > img').src = 'imagens/Hamburger Menu.svg'
       }else {
            menuMobile[i].style.display = 'flex';
            trocarImg = document.querySelector('.menu-toggle > img').src = 'imagens/close.svg'
       }     
    }
})
}

AbrirMenu();