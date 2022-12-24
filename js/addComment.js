function AbrirMenu(){
    var menu = document.querySelector('.menu-toggle')
    .addEventListener('click',()=>{
    var menumobile = document.querySelectorAll('.menu-mobile ul');
    console.log(menumobile);
    for(var i = 0; i < menumobile.length;i++ ){
       if( menumobile[i].style.display == 'flex' ){
            menumobile[i].style.display = 'none';
            var trocarImg = document.querySelector('.menu-toggle > img').src = 'imagens/Hamburger Menu.svg';
       }else {
            menumobile[i].style.display = 'flex';
            var trocarImg = document.querySelector('.menu-toggle > img').src = 'imagens/close.svg';
       }
    }
})
}
AbrirMenu();