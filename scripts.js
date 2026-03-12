const prevButton = window.document.getElementById('prev');
const nextButton = window.document.getElementById('next');
const items = window.document.querySelectorAll('.item');
const dots = window.document.querySelectorAll('.dot');

const numberIndicator = window.document.querySelector('.numbers');
const list = window.document.querySelector('.list');

let active = 0;
const total = items.length;

let timer;

function update(direction) {
    window.document.querySelector('.item.active').classList.remove('active');
    window.document.querySelector('.dot.active').classList.remove('active');

    if(direction > 0) {
        active = active + 1;

        if(active === total) {
            active = 0;
        }
    }     
    else if(direction < 0) {
        active = active - 1;

        if(active < 0) {
            active = total - 1;
        }
    }

    items[active].classList.add('active');
    dots[active].classList.add('active');

    numberIndicator.textContent = String(active + 1).padStart(2, '0');
}


clearInterval(timer);

timer = setInterval(() => {
        update(1)
    }, 5000);



prevButton.addEventListener('click', () => {
    update(-1);
});

nextButton.addEventListener('click', () => {
    update(1);
});