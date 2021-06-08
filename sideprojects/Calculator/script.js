function sum(){
    let num1 = document.getElementById("inputFirstnumber").value;
    let num2 = document.getElementById("inputSecondnumber").value;
    
        var result = parseInt(num1) + parseInt(num2);
        
        let test = document.querySelector("#result").value = result ;
        
    
}

function diff() {
    let num1 = parseInt(document.getElementById("inputFirstnumber").value);
    let num2 = parseInt(document.getElementById("inputSecondnumber").value);
    var result = num1-num2;
    
    let test = document.querySelector("#result").value = result ;
    
}

function multiply() {
        let num1 = parseInt(document.getElementById("inputFirstnumber").value);
        let num2 = parseInt(document.getElementById("inputSecondnumber").value);
        var result = num1*num2;
        
        let test = document.querySelector("#result").value = result ;
        
}

function divide() {
    let num1 = parseInt(document.getElementById("inputFirstnumber").value);
    let num2 = parseInt(document.getElementById("inputSecondnumber").value);
    var result = num1/num2;
    
    let test = document.querySelector("#result").value = result ;
    
}