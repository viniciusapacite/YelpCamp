

    function AbrirMenu(){
        var menu = document.querySelector('.img-2')
        .addEventListener('click',()=>{
        var menuOrigin = document.querySelectorAll('.menu');
 
        for(var i = 0; i < menuOrigin.length;i++ ){
           if( menuOrigin[i].style.display == 'none'){
                menuOrigin[i].style.display = 'flex';
           }else {
                menuOrigin[i].style.display = 'none';
           }
                  
        }})
}

AbrirMenu();