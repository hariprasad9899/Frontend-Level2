var reset,buttons,total_amount,total_res,all_total_res,people,custom,zero,tip
reset = document.getElementById('reset');
buttons = document.getElementsByClassName('per')
total_amount = document.getElementById('totalamount');
total_res = document.getElementById('total');
all_total_res = document.getElementById('alltotal');
people = document.getElementById('people');
custom = document.getElementById('custom');
zero = document.getElementsByClassName('zero')[0];
tip = 0;

// Assiging tip value (select) to the tip variable
for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click',()=>{
        tip = parseInt(buttons[i].value);
    })
}
// Assiging tip value (custom) to the tip variable
custom.addEventListener('input', ()=>{
    tip = custom.value;
})

// Converting the value to dollar currency format
function formatDollar(num) {
    var p = num.toFixed(2).split(".");
    return p[0].split("").reverse().reduce(function(acc, num, i, orig) {
        return num + (num != "-" && i && !(i % 3) ? "," : "") + acc;
    }, "") + "." + p[1];
}

// adding event lisneter for the result to the no of people input listener
people.addEventListener('input', () =>{
    if (people.value == 0){
        zero.style.display = 'block';
        people.style.border = '1px solid red';
    }
    else{
        zero.style.display = 'none';
        people.style.border = 'none';
        var tip_amount,total_tip,val1,val2;
        tip_amount = (total_amount.value*(tip/100))/people.value;
        total_tip = tip_amount * people.value;
        val1 = formatDollar(tip_amount);
        val2 = formatDollar(total_tip);
        total_res.innerText = val1;
        all_total_res.innerText = val2;
    }
    
})
// Reseting things
reset.addEventListener('click', () =>{
    total_amount.value = "";
    people.value = "";
    custom.value = "";
    zero.style.display = 'none';
    people.style.border = 'none';
    total_res.innerText = "0.00";
    all_total_res.innerText = "0.00";
})