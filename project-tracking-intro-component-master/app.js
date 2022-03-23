const btn = document.getElementById('btn');
const mob_menu = document.getElementsByClassName('mob-menu')[0];
const nav = mob_menu.getElementsByTagName('nav')[0];
const a = nav.getElementsByTagName('a')

const arr = Object.values(a);

btn.onclick = function() {
    if (btn.classList.contains('close')) {
        btn.src = "./images/icon-hamburger.svg";
        btn.classList.toggle('close');
        mob_menu.classList.toggle('show')
    } else {
        btn.src = "./images/icon-close.svg";
        btn.classList.toggle('close');
        mob_menu.classList.toggle('show')
    }
}

for(let i = 0; i < a.length;i++) {
    a[i].addEventListener('click', (event) => {
        event.preventDefault();
        arr.forEach(element => {
            element.classList.remove('highlight');
        })
        a[i].classList.add('highlight');
    })
}




