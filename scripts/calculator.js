function clickHandler() {
    let num1 = document.getElementById("firstNum").value;
    let num2 = document.getElementById("secondNum").value;
    let calcTypes = document.getElementById("calcType").value; 
    console.log(calcTypes);

    let add = `${num1} + ${num2} = ${parseFloat(num1)+parseFloat(num2)}`;
    let subtract = `${num1} - ${num2} = ${num1-num2}`
    let multiply = `${num1} * ${num2} = ${num1*num2}`
    let divide = `${num1} / ${num2} = ${(num1/num2).toFixed(3)}`
    let remainder = `${num1} % ${num2} = ${num1%num2}`

    if (!num1 || !num2) {
        calcTypes = "error";
    }

    document.getElementById("title").innerHTML = `Your Results:`;

    switch(calcTypes) {
        case "add": 
            document.getElementById("results").innerHTML = `${add}`;
            break;
        case "subtract": 
            document.getElementById("results").innerHTML = `${subtract}`;
            break;
        case "multiply": 
            document.getElementById("results").innerHTML = `${multiply}`;
            break;
        case "divide": 
            document.getElementById("results").innerHTML = `${divide}`;
            break;
        case "modulo": 
            document.getElementById("results").innerHTML = `${remainder}`;
            break;
        case "error":
            document.getElementById("title").innerHTML = `Error Code:`;
            document.getElementById("results").innerHTML = `#69 Please select both numbers.`;
            break;
        default: 
            document.getElementById("title").innerHTML = `Error Code:`;
            document.getElementById("results").innerHTML = `#2137 Please select the calculation type.`;
            break;
    }
}
