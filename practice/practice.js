function performCalculation()
{
    document.getElementById("addRes").innerHTML = "";
    document.getElementById("multiplyRes").innerHTML = "";
    document.getElementById("divideRes").innerHTML = "";
    document.getElementById("subtractRes").innerHTML = "";
    document.getElementById("moduloRes").innerHTML = "";

    if(document.getElementById("add").checked)
        add();
    if(document.getElementById("subtract").checked)
        subtract();
    if(document.getElementById("multiply").checked)
    multiply();
    if(document.getElementById("divide").checked)
        divide();
    if(document.getElementById("modulo").checked)
        modulo();
}   

function add()
{
    var var1 = parseFloat(document.calculatorForm.var1.value);
    var var2 = parseFloat(document.calculatorForm.var2.value);

    var result = "The Sum of " + var1 + " and " + var2 + " is: " + (var1+var2);
    document.getElementById("addRes").innerHTML = result;
}

function multiply()
{
    var var1 = parseFloat(document.calculatorForm.var1.value);
    var var2 = parseFloat(document.calculatorForm.var2.value);

    var result = "The Multiplcation of " + var1 + " and " + var2 + " is: " + (var1*var2);
    document.getElementById("multiplyRes").innerHTML = result;
}


function divide()
{
    var var1 = parseFloat(document.calculatorForm.var1.value);
    var var2 = parseFloat(document.calculatorForm.var2.value);
    var result = "The Division of " + var1 + " and " + var2 + " is: " + (var1/var2);
    document.getElementById("divideRes").innerHTML = result;
}


function subtract()
{
    var var1 = parseFloat(document.calculatorForm.var1.value);
    var var2 = parseFloat(document.calculatorForm.var2.value);

    var result = "The Subtraction of " + var1 + " and " + var2 + " is: " + (var1-var2);
    document.getElementById("subtractRes").innerHTML = result;
}

function modulo()
{
    var var1 = parseFloat(document.calculatorForm.var1.value);
    var var2 = parseFloat(document.calculatorForm.var2.value);

    var result = "The Modulo of " + var1 + " and " + var2 + " is: " + (var1%var2);
    document.getElementById("moduloRes").innerHTML = result;
}