var btn,dropcontent,arrow;
btn = document.getElementsByClassName('btn')
dropcontent = document.getElementsByClassName('dropdown-content');
arrow = document.getElementsByClassName('arrow');

for (let i = 0; i < btn.length; i++){
    btn[i].addEventListener('click', () =>{
        for (let j = 0; j < dropcontent.length; j++) {
            if ( i != j){
                dropcontent[j].classList.remove('show');
                arrow[j].classList.remove('up')
            }
        }
        var dropdown = btn[i].nextElementSibling;
        dropdown.classList.toggle('show')
        arrow[i].classList.toggle('up')
    })
}
