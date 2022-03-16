const nav_elem = document.getElementsByClassName('navigations')[0];
const mob_nav_elem = document.getElementsByClassName('mobmenus')[0];
const list_elem = nav_elem.getElementsByTagName('li');
const mob_list_elem = mob_nav_elem.getElementsByTagName('li');
const btn = document.getElementById('btn');
const dropdown_menu = document.getElementsByClassName('dropdown-menu')[0];



for (let i = 0; i < mob_list_elem.length; i++) {
    mob_list_elem[i].onclick = function() {
        console.log("Please give the output")
    }
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

myMobMenuArr = Object.values(mob_list_elem)





// myMobMenuArr.forEach(element => {
//     element.addEventListener('click', () => {
//         alert("Hello");
//         // myMobMenuArr.forEach(item => {
//         //     item.classList.remove("active");
//         // })
//         // element.classList.add("active");
//     })
// });




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