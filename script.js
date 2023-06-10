let btn = document.getElementById('btn');
let str = "";
let count = 0;

let input = document.getElementById('input');

let insrt = document.getElementById('list');

let rmv;

btn.addEventListener('click', function () {
    str = str + (input.value);
    if (count < 8 && str != "") {
        insert(str);
        count = count + 1;
    }
    str = "";
    input.value = str;
    rmv = Array.from(document.getElementsByClassName('remove'));
    rmv.forEach(e => {
        e.addEventListener('click', (e) => {
            if (e.target.innerHTML == 'REMOVE') {
                e.target.parentElement.remove();
                count = count - 1;
            }
        })
    });


})

function insert(str) {
    insrt.innerHTML = `<div class = "inserted_element"> ${str}  <button class= "remove">REMOVE</button></div>` + insrt.innerHTML;
}

