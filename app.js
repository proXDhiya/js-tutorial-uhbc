const result = document.querySelector('#result');
const input1 = document.querySelector('#input-num1');
const input2 = document.querySelector('#input-num2');
const btn = document.querySelector('#btn');

function getValue() {
    if(input1.value === '' || input2.value === '')
        alert('One or more fields are empty, please fill them out');
    result.textContent = Number(input1.value) + Number(input2.value);
}

btn.addEventListener('click', getValue);
