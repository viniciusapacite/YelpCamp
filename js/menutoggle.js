

    function AbrirMenu(){
        var menu = document.querySelector('.menu-toggle')
        .addEventListener('click',()=>{
        var boxLeft = document.querySelectorAll('div.box-left');
        var boxRight = document.querySelectorAll('div.box-right ');
        for(var i = 0; i < boxRight.length;i++ ){
           if( boxRight[i].style.display == 'none' ){
                boxRight[i].style.display = 'block';
           }else {
                boxRight[i].style.display = 'none';
           }

           for(var i = 0; i < boxLeft.length;i++ ){
             if(boxLeft[i].style.display == 'none'){
                boxLeft[i].style.display = 'block';
             }else {
                boxLeft[i].style.display = 'none';
            }
            console.log(boxRight);
           }
          
        }
    })
}

AbrirMenu();