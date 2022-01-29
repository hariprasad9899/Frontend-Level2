var menu = document.getElementById('menus')
var options = document.getElementsByClassName('options');
var container = document.getElementById('bar');


for ( let i = 0; i < options.length; i++) {
    options[i].addEventListener('click', () => {
        for ( let j = 0; j < options.length; j++) {
            options[j].id = "";
            var text = options[j].innerText.toLowerCase();
            var lower = text.charAt(0).toUpperCase() + text.slice(1);
            options[j].innerText = lower;
        }
        options[i].id = "active";
        var upper = options[i].innerText.toUpperCase();
        options[i].innerText = upper;
    })
}


function myFunction(){
    menu.classList.toggle('show');
}
window.addEventListener('mouseup', function(e) {
    var x = document.querySelector('#menus');
    if ((e.target !== document.querySelector(".container"))){
        if (x.classList.contains('show')) {
            x.classList.remove('show')
        }
    }
});