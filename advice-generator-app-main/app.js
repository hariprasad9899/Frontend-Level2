let url = "https://api.adviceslip.com/advice";
let btn = document.getElementById('btn');
let txt = document.getElementById('advice')
let ad_id = document.getElementById('ad-id');

async function getAdvice() {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}


btn.onclick = async function() {
    let val = await getAdvice();
    txt.innerText = val.slip.advice;
    ad_id.innerText = val.slip.id;
}