function sum() {
    
    let fno = parseInt(document.getElementById('firstNumber').value);
    let sno = parseInt(document.getElementById('secondNumber').value);

    document.getElementById('result').value = fno + sno;

}

function sub() {
    
    let fno = parseInt(document.getElementById('firstNumber').value);
    let sno = parseInt(document.getElementById('secondNumber').value);

    document.getElementById('result').value = fno - sno;

}

function div() {
    
    let fno = parseInt(document.getElementById('firstNumber').value);
    let sno = parseInt(document.getElementById('secondNumber').value);

    document.getElementById('result').value = fno / sno;

}

function mul() {
    
    let fno = parseInt(document.getElementById('firstNumber').value);
    let sno = parseInt(document.getElementById('secondNumber').value);

    document.getElementById('result').value = fno * sno;

}

function exp() {
    
    let fno = parseInt(document.getElementById('firstNumber').value);
    let sno = parseInt(document.getElementById('secondNumber').value);

    document.getElementById('result').value = fno ** sno;

}