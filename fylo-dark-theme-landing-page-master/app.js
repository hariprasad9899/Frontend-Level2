let input = document.getElementById('input');
let btn = document.getElementById('btn');
let error = document.getElementById('error');

btn.onclick = function() {
    let txt = input.value;
    let result = ValidateEmail(txt);
    if (result) {
        error.style.opacity = "0";
    } else {
        error.style.opacity = "1";
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

input.oninput = function() {
    error.style.opacity = "0";
}
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      btn.click();
    }
});
