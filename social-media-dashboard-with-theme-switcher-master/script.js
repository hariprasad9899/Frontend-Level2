const toggle_btn = document.getElementById("toggle-btn");
const toggle_ball = document.getElementById("toggle-ball");
const body = document.getElementsByTagName('body')[0];
const follower_cards = document.getElementsByClassName('follower-cards');
const overview_cards = document.getElementsByClassName('overview-cards');
const h1 = document.getElementsByTagName("H1");
const h2 = document.getElementsByTagName("H2");


toggle_btn.onclick = function() {
    toggle_ball.classList.toggle('move');
    toggle_btn.classList.toggle('white-background');
    body.classList.toggle("white-background");
    for (let i = 0; i < follower_cards.length; i++) {
        if (i != 2) {
            follower_cards[i].classList.toggle("white-background");
        } else {
            follower_cards[2].classList.toggle("special-white");
        }
    }

    for (let i = 0; i < overview_cards.length; i++) {
        overview_cards[i].classList.toggle("white-background");
    }

    for (let i = 0; i < h1.length; i++) {
        h1[i].classList.toggle("white-background");
    }

    for (let i = 0; i < h2.length; i++) {
        h2[i].classList.toggle("white-background");
    }

    
}