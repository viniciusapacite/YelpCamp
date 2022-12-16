function AbrirMenu(){
    var menu = document.querySelector('.menu-toggle')
    .addEventListener('click',()=>{
    var menuLog = document.querySelectorAll('div.logo a');
      var menuOrigin = document.querySelectorAll('.menu');
    for(var i = 0; i < menuLog.length;i++ ){
       if( menuLog[i].style.display == 'none' ){
            menuLog[i].style.display = 'block';
       }else {
            menuLog[i].style.display = 'none';
       }

       console.log(menuOrigin);
       for(var i = 0; i < menuOrigin.length;i++ ){
         if(menuOrigin[i].style.display == 'none'){
            menuOrigin[i].style.display = 'flex';
         }else {
            menuOrigin[i].style.display = 'none';
        }
       }
      
    }
})
}

AbrirMenu();