let url = "	https://api.adviceslip.com/advice";
let btn = document.getElementById('btn');
let txt = document.getElementById('advice')

async function getAdvice() {
    const response = await fetch(url);
    const data = await response.json();
    return data.slip.advice;
}


btn.onclick = async function() {
    let val = await getAdvice();
    txt.innerText = val;
}