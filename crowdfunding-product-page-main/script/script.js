var menu_btn = document.getElementsByClassName('btn-box')[0];
var mob_menu = document.getElementsByClassName('mob-menu')[0];
var val = document.getElementById('val');
var detailbox = document.getElementsByClassName('detail-box');
var pledgebox =  document.getElementById('pledge');
var main = document.getElementsByClassName('main')[0];
var cover = document.getElementById('cover');
var closebtn = document.getElementById('closebtn');


closebtn.onclick = function(){
    pledgebox.style.display = 'none';
    cover.style.display = 'none';
}

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
    },60)
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
function showPay(el){
    var pay = document.getElementsByClassName('pay');
    var selection = document.getElementsByClassName('selection');
    for (let i = 0; i < pay.length; i++) {
        pay[i].style.display = "none";
        selection[i].style.border = "1px solid black";
    }
    var selection = el.parentElement.parentElement.parentElement;
    selection.style.border = "1.5px solid rgb(6, 226, 226)";
    var paybox = selection.getElementsByClassName('pay')[0];
    paybox.style.display = "flex";
}
for (let j = 0; j < detailbox.length; j++) {
    detailbox[j].addEventListener('click', () => {
        var radiobtn = detailbox[j].getElementsByClassName('radio-btn')[0];
        var clicked_btn = radiobtn.getElementsByClassName('btn')[0];
        clicked_btn.click();
    })
}
function selectReward() {
    cover.style.display = "block";
    pledgebox.style.display = "block";
    window.scrollTo(0, 0);
}
function submit(el) {
    var thank = document.getElementById('thank');
    thank.style.display = 'block';
    pledgebox.style.display = "none";
    window.scrollTo(0, 0);
}

function thankClose() {
    cover.style.display = "none";
    document.getElementById('thank').style.display = "none";
}