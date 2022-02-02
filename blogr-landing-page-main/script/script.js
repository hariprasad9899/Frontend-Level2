var btn,dropcontent,arrow,mobbtn,mob,menubtn;
btn = document.getElementsByClassName('btn')
mobbtn = document.getElementsByClassName('mob-btn')
dropcontent = document.getElementsByClassName('dropdown-content');
mobdrop = document.getElementsByClassName('mob');
arrow = document.getElementsByClassName('arrow');
menubtn = document.getElementById('menu-img')
mobilemenu = document.getElementsByClassName('mobile-menu')[0];

menubtn.addEventListener('click', () => {
    if (mobilemenu.classList.contains('mob-menu-show')){
        menubtn.src = "images/icon-hamburger.svg";
    }
    else {
        menubtn.src = "images/icon-close.svg";
    }
    mobilemenu.classList.toggle('mob-menu-show')
    for ( let k = 0; k < mobdrop.length;k++){
        mobdrop[k].classList.remove('mob-show')
        arrow[k].classList.remove('up');
    }
})


for (let i = 0; i < btn.length; i++){
    btn[i].addEventListener('click', () =>{
        for (let j = 0; j < dropcontent.length; j++) {
            if ( i != j){
                dropcontent[j].classList.remove('show');
                arrow[j].classList.remove('up')
            }
        }
        var dropdown = btn[i].nextElementSibling;
        dropdown.classList.toggle('show')
        arrow[i].classList.toggle('up')
    })
}


for (let i = 0; i < mobbtn.length; i++){
    mobbtn[i].addEventListener('click', () =>{
        for (let j = 0; j < mobdrop.length; j++) {
            if ( i != j){
                mobdrop[j].classList.remove('mob-show');
                arrow[j].classList.remove('up')
            }
        }
        var dropdown = mobbtn[i].nextElementSibling;
        dropdown.classList.toggle('mob-show')
        arrow[i].classList.toggle('up')
    })
}

window.addEventListener('click', (e) => {
    if (e.target != mobilemenu  && e.target.parentNode != mobilemenu
        && e.target.parentNode.parentNode != mobilemenu && 
        e.target.parentNode.parentNode.parentNode != mobilemenu
        && e.target != menubtn){
        mobilemenu.classList.remove('mob-menu-show')
        menubtn.src = "images/icon-hamburger.svg";
    }
})

