
const nav_elem = document.getElementsByClassName('navigations')[0];
const list_elem = nav_elem.getElementsByTagName('li');
const open_btn = document.getElementById('open-btn');
const close_btn = document.getElementById('close-btn');
const dropdown_menu = document.getElementsByClassName('dropdown-menu')[0];

const mobmenus = document.getElementsByClassName('mobmenus')[0];
const ul = mobmenus.getElementsByTagName("UL")[0];
const lis = ul.getElementsByTagName("LI")

let test = document.getElementsByClassName('test');
testArr = Object.values(test);

for (let i = 0; i < test.length; i++) {
    test[i].addEventListener('click', () => {
        testArr.forEach(item => {
            item.classList.remove("active");
        }) 
        test[i].classList.add("active");
    })

}

myMenuArr = Object.values(list_elem)
myMenuArr.forEach(element => {
    element.addEventListener('click', () => {
        myMenuArr.forEach(item => {
            item.classList.remove("active");
        })
        element.classList.add("active");
    })
});

open_btn.onclick = function() {
    dropdown_menu.style.display = "block";
    document.body.classList.add("stop-scrolling");
}
close_btn.onclick = function() {
    dropdown_menu.style.display = "none";
    document.body.classList.remove("stop-scrolling");
}











