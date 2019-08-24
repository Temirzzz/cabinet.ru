document.addEventListener('DOMContentLoaded', function () {
    let elems = document.querySelectorAll('.datepicker');
    let instances = M.Datepicker.init(elems, {
        "format": "yyyy-mm-dd"
    });
});

let btn = document.querySelector('.btn2');
let btn1 = document.querySelector('.btn1');
let wrap = document.querySelector('.modal-wrap1');


btn.onclick = () => {
  wrap.classList.remove('hide');
};

btn1.onclick = function hideModal() {
    event.preventDefault();
    wrap.classList.add('hide');
};

document.onclick = (event) => {
    if (event.target == wrap) {
        wrap.classList.add('hide');
    }
}

document.onkeydown = (event) => {
    if(event.keyCode == 27){
        wrap.classList.add('hide');
    }
}

document.querySelector('.read-rules').onclick = function(){
    let rulesL = document.querySelector('.left-50');
    rulesL.style.marginLeft = -350 + 'px';
}

document.querySelector('.read-rules-back').onclick = function(){
    let rulesL = document.querySelector('.left-50');
    rulesL.style.marginLeft = 0;
}

document.querySelector('#read-rules').onchange = function(){
   if(this.checked){
    document.querySelector('#signup-submit').classList.remove('disabled');
   }
   else{
    document.querySelector('#signup-submit').classList.add('disabled');
   }
};