var slider,val,toggle;

slider = document.getElementsByClassName('slider')[0];
toggle_btn = document.getElementsByClassName('toggle')[0];
inner_round = document.getElementsByClassName('inner')[0];

slider.oninput = function() {
    cyan_calc = this.value;
    gray_calc = 0 - this.value;

    // this will change the slider track 
    slider.style.setProperty('--webkitProgressCyanPercent',`${cyan_calc}%`);
    slider.style.setProperty('--webkitProgressGrayPercent',`${gray_calc}%`);  

    // this will change the color of the thumb when movin
    if (this.value%2 == 0) {
        rgb_value = 240 - this.value;
        var thumb_color_value = getComputedStyle(slider);
        thumb_color = thumb_color_value.getPropertyValue('--WebkitThumbColorValue'); 
        slider.style.setProperty('--WebkitThumbColorValue',`${rgb_value}`);
        console.log(this.value,rgb_value)
    }   
}


// transition for toggle button
toggle_btn.onclick = function() {
    toggle_btn.classList.toggle('bright');
    inner_round.classList.toggle('round-move');
}