const counter = document.getElementById('counter');
const decreaseBtn = document.getElementById('decreaseBtn');
const resetBtn = document.getElementById('resetBtn');
const increaseBtn = document.getElementById('increaseBtn');
let count = 0;

increaseBtn.onclick = () => {
    count++;
    counter.textContent = count;
}

decreaseBtn.onclick = () => {
    count--;
    counter.textContent = count;
}

resetBtn.onclick = () => {
    count = 0;
    counter.textContent = count;
}