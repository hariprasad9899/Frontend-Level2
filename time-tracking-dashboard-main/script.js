var jsonData = [
    {
      "title": "Work",
      "timeframes": {
        "daily": {
          "current": 5,
          "previous": 7
        },
        "weekly": {
          "current": 32,
          "previous": 36
        },
        "monthly": {
          "current": 103,
          "previous": 128
        }
      }
    },
    {
      "title": "Play",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 2
        },
        "weekly": {
          "current": 10,
          "previous": 8
        },
        "monthly": {
          "current": 23,
          "previous": 29
        }
      }
    },
    {
      "title": "Study",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 7
        },
        "monthly": {
          "current": 13,
          "previous": 19
        }
      }
    },
    {
      "title": "Exercise",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 5
        },
        "monthly": {
          "current": 11,
          "previous": 18
        }
      }
    },
    {
      "title": "Social",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 3
        },
        "weekly": {
          "current": 5,
          "previous": 10
        },
        "monthly": {
          "current": 21,
          "previous": 23
        }
      }
    },
    {
      "title": "Self Care",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 2,
          "previous": 2
        },
        "monthly": {
          "current": 7,
          "previous": 11
        }
      }
    }
  ]

console.log(jsonData[0]['timeframes']['daily'].current)


var units,daily,weekly,monthly,chr,phr
units = document.getElementsByClassName('period');
chr = document.getElementsByClassName('chr');
phr = document.getElementsByClassName('phr')

for(let i = 0; i < units.length; i++){
  let period = units[i].id;
  units[i].addEventListener('click',()=>{
    for (let j = 0; j < chr.length; j++){
        let value_chr = jsonData[j]['timeframes'][period].current;
        let value_phr = jsonData[j]['timeframes'][period].previous;
        chr[j].innerText = value_chr;
        phr[j].innerText = value_phr;
    }
    for(let k = 0; k < units.length; k++){
      units[k].className = units[k].className.replace('active','');
    }
    units[i].className += ' active';
  })
}
