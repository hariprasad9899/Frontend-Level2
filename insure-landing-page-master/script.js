
const nav_elem = document.getElementsByClassName('navigations')[0];
const list_elem = nav_elem.getElementsByTagName('li');
const btn = document.getElementById('btn');
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


btn.addEventListener('click', () => {
    if(btn.classList.contains("open")) {
        btn.src = "./images/icon-close.svg";
        btn.classList.toggle('open');
        dropdown_menu.classList.toggle('show');
    } else {
        btn.src = "./images/icon-hamburger.svg";
        btn.classList.toggle('open');
        dropdown_menu.classList.toggle('show');
    }
})


const check = document.getElementById("check");

console.log(check.parentElement);






