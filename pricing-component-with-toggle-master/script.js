const wrapper = document.getElementsByClassName('wrapper')[0];
const ball = document.getElementsByClassName('ball')[0];
const val = document.getElementsByClassName('val');

monthly_price = ['19.99','24.99','39.9'];
annual_price = ['199.99','249.99','399.9'];


wrapper.onclick = function() {
    ball.classList.toggle('move');
    wrapper.classList.toggle('gray-bg');

    if (wrapper.classList.contains('gray-bg')) {
        for (let i = 0; i < val.length; i++) {
            val[i].innerText = monthly_price[i];
        }
    } else {
        for (let i = 0; i < val.length; i++) {
            val[i].innerText = annual_price[i];
        }
    }
}

