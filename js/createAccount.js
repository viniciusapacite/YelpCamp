const userName = document.querySelector('input[type=text]');
const password = document.querySelector('input[type=password]');
const btn = document.querySelector('input[type=submit]').
addEventListener('click', ()=>{
    if(userName.value == 'adm' || password.value == 'adm'){
        userName.value = '';
        password.value = ''
        confirm(`Now return to sign in`);
    }else{
        userName.value = '';
        password.value = ''
        confirm(` Username: adm \n Password: adm`);
    }
});

