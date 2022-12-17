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
