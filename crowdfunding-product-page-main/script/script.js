var menu_btn = document.getElementsByClassName('btn-box')[0];
var mob_menu = document.getElementsByClassName('mob-menu')[0];
var val = document.getElementById('val');
console.log(val.innerText);
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


function exec() {
    setInterval( function addval(){
        value = parseInt(val.innerText);
        if (value != 56){
            value = value + 1;
            val.innerText = value;
        }
        else {
            val.innerText = value;
        }
    },100)
}
function bookmark() {
    var _bookmark = document.getElementById('bookmark');
    var head = document.getElementsByTagName("HEAD")[0];
    var link = document.createElement('link');
    link.rel = "stylesheet";
    link.href = "style/spl_style.css";
    head.append(link);
    _bookmark.style.color = "hsl(176, 72%, 28%)";
    _bookmark.style.backgroundColor = "white";
}