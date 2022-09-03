let outputdiv= document.querySelector('.output');



const outputnumber = (number) => {
    outputdiv.innerHTML += number;
}
const outputoperator = (operator) => {
    outputdiv.innerHTML += ` ${operator} `;
}

const calculate = () => {
    let startCalculate = outputdiv.innerHTML;
    let splittedNumbers = startCalculate.split(' ');
    let result = parseFloat(splittedNumbers[0]);
    for (let i=1; i< splittedNumbers.length / 2; i+=2){
        if (splittedNumbers[i] === '+'){
            result += parseFloat(splittedNumbers[i+1]);
        } else if (splittedNumbers[i] === '-'){
            result -= parseFloat(splittedNumbers[i+1]);
        } else if (splittedNumbers[i] === '*'){
            result *= parseFloat(splittedNumbers[i+1]);
        } else if (splittedNumbers[i] === '/'){
            result /= parseFloat(splittedNumbers[i+1]);
        } 
    }
    outputdiv.innerHTML = result;
}

document.querySelectorAll('.numbers').forEach((element) => {
    element.addEventListener('click',() => outputnumber(element.textContent));
});

document.querySelectorAll('.operator').forEach((element) => {
    element.addEventListener('click', () => outputoperator(element.textContent));
});

document.querySelector('.smallerButton').addEventListener('click', calculate);

document.querySelector('.bigButton').addEventListener('click', () => outputdiv.innerHTML= '');
