var menu_btn = document.getElementsByClassName('btn-box')[0];
var mob_menu = document.getElementsByClassName('mob-menu')[0];
menu_btn.addEventListener('click', ()=> {
    var img = document.getElementById("btn-img")
    if (mob_menu.classList.contains('menu-show')){
        img.src = "./images/icon-hamburger.svg";
    }
    else {
        img.src = "./images/icon-close-menu.svg";
    }
    mob_menu.classList.toggle("menu-show")
})
