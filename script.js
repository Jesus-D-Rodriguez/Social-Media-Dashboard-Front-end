const checkbox = document.getElementById('checkbox');
const label = document.querySelector('.label');
const ball = document.querySelector(".ball");
const topbox = document.querySelectorAll(".top-box");
const smallbox = document.querySelectorAll('.small-box');
const backgorund = document.querySelector('.container');
const backgorund2 = document.querySelector('.background-2')
checkbox.addEventListener('change', ()=> {
    backgorund.classList.toggle('light');
    backgorund2.classList.toggle('light');
    label.classList.toggle('light');
    ball.classList.toggle('light');
    topbox.forEach(function(box) {
        box.classList.toggle('light');
    })
    smallbox.forEach(function(box2) {
        box2.classList.toggle('light');
    })

})