
function compute(){

    //Get access to input values
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    //Calculate the interest
    var interest = principal * years * rate / 100;

    //Get the number of years by single digit number and convert it to the real year
    var year = new Date().getFullYear() + parseInt(years);

    if(principal <=0){
        alert("Enter a postitive number!");
        document.getElementById("principal").focus();

        return false;
    }else{

        //Print out the forcasted money to the user
    var result = document.getElementById("result")
    .innerHTML = "If you deposite <mark>" + principal + "</mark>,<br>" + 
    "at an interest rate of <mark>" + rate + "</mark>.<br>" + 
    "You will recieve an amount of <mark>" + interest + "</mark>,<br>" + 
    "in the years <mark>" + year + "</mark>";
    }
}

function updateRate(){
    var rateVal = document.getElementById("rate").value;
    rateVal += "%";
    document.getElementById("rate_val").innerHTML = rateVal;
}
