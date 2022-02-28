function compute() {
  var principal = document.getElementById("principal").value;
  var rate = document.getElementById("rate").value;
  var years = document.getElementById("years").value;
  var year = new Date().getFullYear() + parseInt(years); //because years is a string we need to convert it to integer
  if (principal>0)
  {
  var amount = ((principal * rate) / 100) * years;
  document.getElementById("result").innerHTML =
    "If you deposit " + "\<mark>" + principal + "</mark>" + ",\<br\>at an interest rate of " + "\<mark>" + rate + "%" + "</mark>" + "." + "\<br\>You will receive an amount of " + "\<mark>" + amount + "</mark>" + ",\<br\>in the year " + "\<mark>" + year + "</mark>" + ".\<br\>"
  } else {
  	alert("Please introduce a number larger than 0");
    document.getElementById("principal").focus();
  }	
}

function updateRate() {
  var rateval = document.getElementById("rate").value;
  document.getElementById("rate_val").innerText = rateval + "%"; // so the slider shows the right percentage
}
