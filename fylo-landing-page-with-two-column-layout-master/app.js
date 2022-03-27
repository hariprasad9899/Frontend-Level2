// let input = document.getElementById('input');
// let btn = document.getElementById('btn');
// let error = document.getElementById('error');

let input = document.getElementsByClassName('input');
let btn = document.getElementsByClassName('btn');
let error = document.getElementsByClassName('error');


for (let i = 0; i < btn.length; i++) {
    btn[i].onclick = function() {
        let txt = input[i].value;
        let result = ValidateEmail(txt);
        if (result) {
            error[i].style.opacity = "0";
            input[i].style.outline = "1px solid black";
        } else {
            error[i].style.opacity = "1";
            input[i].style.outline = "1px solid red";
        }

    }
}

function ValidateEmail(val) {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (val.match(validRegex)) {
      return true;
    } else {
      return false;
    }
}

for (let i = 0; i < input.length; i++) {
    input[i].oninput = function() {
        error[i].style.opacity = "0";
        input[i].style.outline = "1px solid black";
    }
    
    input[i].addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
        event.preventDefault();
        btn[i].click();
        }
    });

}


