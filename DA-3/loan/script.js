function calculateEMI() {
    var fullAmt = document.getElementById("fullAmt").value;
    var initialAmt = document.getElementById("initialPayment").value;
    var numMonths = document.getElementById("numMonths").value;
    var roi = document.getElementById("roi").value/(12 * 100);

    console.log(fullAmt)

    var principle = fullAmt - initialAmt;
    var x = Math.pow(roi + 1, numMonths)
    var emi = principle*roi*x/(x-1);
    
    document.getElementById("result").innerHTML = "Your Monthly Payment will be Rs." +emi;

} 