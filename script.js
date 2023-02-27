// There are two method used - If you are used first method then result is same.
// 1. const countvalue = document.getElementById('counter');
// 2. const countvalue = document.querySelecto('#counter');

const countvalue = document.getElementById('counter');

function increment() {
    // get the value from UI
    let value = parseInt(countvalue.innerText);
    // update the value
    value = value + 1;
    // set the value onto UI
    countvalue.innerText = value;
};


function decrement() {
    // get the calue from UI
    let value = parseInt(countvalue.innerText);
    // update the value
    value = value  - 1;
    // set the value onto UI
    countvalue.innerText = value;
};

// Two method --
// const reset = () => {
//     let value = 5;
//     countvalue.innerText = value;
// };

function reset () {
    let value = 0;
    countvalue.innerText = value;
};