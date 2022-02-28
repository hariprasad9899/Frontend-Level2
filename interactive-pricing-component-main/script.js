var slider,val;

slider = document.getElementsByClassName('slider')[0];

slider.oninput = function() {
    cyan_calc = this.value;
    gray_calc = 100 - this.value;

    console.log(cyan_calc,gray_calc)

    slider.style.setProperty('--webkitProgressCyanPercent',`${cyan_calc}%`);
    slider.style.setProperty('--webkitProgressGrayPercent',`${gray_calc}%`);
}