const result = document.querySelector('#result');
const input1 = document.querySelector('#input-num1');
const input2 = document.querySelector('#input-num2');
const btn = document.querySelector('#btn');

function getValue() {
    if(input1.value === '' || input2.value === '')
        alert('Please enter a value');
    result.textContent = Number(input1.value) + Number(input2.value);
}

btn.addEventListener('click', getValue);
