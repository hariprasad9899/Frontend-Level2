var btn,top_menu,mob_options;

btn = document.getElementById('btn-img');
mob_menu = document.getElementsByClassName('mob-menu')[0];
mob_options = document.getElementsByClassName('mob-menu-options')[0];

function show() {
    mob_options.style.display = "block";
    mob_menu.classList.toggle('black-bg');
}
function hide() {
    mob_options.style.display = "none";
    mob_menu.classList.toggle('black-bg');
}

btn.onclick = function() {
    if (btn.classList.contains('change')){
        btn.src = "./images/icon-hamburger.svg";
        hide();
    }
    else { 
        btn.src = "./images/icon-close.svg"; 
        show();
    }
    btn.classList.toggle('change');
}
