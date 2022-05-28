const fcon = document.getElementsByClassName('fcon');
const ccon = document.getElementsByClassName('ccon');
const dmn = document.getElementsByClassName('dmn');
const arrow = document.getElementsByClassName("arrow");
const mclose = document.getElementById("mclose");
const mobMenu = document.getElementsByClassName('mobMenu')[0];
const wrapper = document.getElementsByClassName('wrapper')[0];


function activate(elem1,elem2) {
    elem1.classList.toggle("active")
    elem2.classList.toggle("invert")
}

fcon[0].onclick = function() {
    activate(dmn[0],arrow[0])
}
ccon[0].onclick = function() {
    activate(dmn[1],arrow[1])
}
fcon[1].onclick = function() {
    activate(dmn[2],arrow[2])
}
ccon[1].onclick = function() {
    activate(dmn[3],arrow[3])
}

function getMobMenu() {
    const line = document.getElementsByClassName("line");
    const overlay = document.getElementsByClassName("overlay")[0];
    line[0].classList.toggle('one');
    line[1].classList.toggle('two');
    line[2].classList.toggle('three');
    overlay.classList.toggle("active");
    mobMenu.classList.toggle("cl")
    document.body.classList.toggle("stop-scrolling");
}

wrapper.onclick = function() {
    getMobMenu();
}
mclose.onclick = function() {
    getMobMenu();
}