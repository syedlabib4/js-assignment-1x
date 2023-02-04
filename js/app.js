
//Q1
var num1 =3
var num2=5
 var total=num1+num2;
console .log(total)
document.write("<h1>sum of 3 and 5 is 8 </h1>")
//Q2
var num1 =3
var num2=5
 var total=num1-num2;
console .log(total)

var num1 =3
var num2=5
 var total=num1*num2;
console .log(total)

var num1 =3
var num2=5
 var total=num1/num2;
console .log(total)

//Q3
var variableName= "value";
document.write("<h1>value after variable declaration is:</h1></br>" + variableName);
console.log(variableName)
var variableName= 5;
document.write("<h1>value after variable declaration is:</h1></br>" + variableName);
console.log(variableName)
var variableName=5;
variableName+=1;
console.log(variableName)
document.write("<h1>value after variable declaration is:</h1></br>"+ variableName);

var variableName=5;
variableName+=7;
console.log(variableName)
document.write("<h1>value after variable declaration is:</h1></br>" + variableName);

var variableName=5;
variableName-=1;
console.log(variableName)
document.write("<h1>value after variable declaration is:</h1></br>" + variableName);

var variableName=12;
var remainder=variableName % 3;
console.log("remainder after division is:"+remainder);
document.write("<h1>value after variable declaration is:</h1></br>"+remainder)
//Q4
var ticketPrice=600;
var numberofTickets=5;
var totalCost=ticketPrice * numberofTickets;
console .log ("the cost of buying"+ numberofTickets +"ticketS is"+ totalCost +"PKR.");
document.write("<h1>total cost to buy 5 tickets to a movie is 3000pkr</h1>")

//Q5
var number = prompt("Enter a number to generate its multiplication table:");
var table = "";
for (let i = 1; i <= 10; i++) {
    table += number + " x " + i + " = " + (number * i) + "<br>";
}
document.write("<b>Multiplication table of " + number + ":</b><br>" + table);

//Q6
// a. Store a Celsius temperature into a variable
let celsiusTemperature = 25;

// b. Convert it to Fahrenheit and output "NNoC is NNoF"
let fahrenheitTemperature = (celsiusTemperature * 9/5) + 32;
console.log(celsiusTemperature + "°C is " + fahrenheitTemperature + "°F");

// c. Store a Fahrenheit temperature into a variable
fahrenheitTemperature = 70;

// d. Convert it to Celsius and output "NNoF is NNoc"
celsiusTemperature = (fahrenheitTemperature - 32) * 5/9;
console.log(fahrenheitTemperature + "°F is " + celsiusTemperature + "°C");
document.write("<h1>The Temperature Converter</h1>")
document.write("<h1>C=(F-32)*5/9</h1>")
document.write("<h1>F=(C+32)*9/5</h1>")

//Q7
var item1_price = 10.50;
var item2_price = 5.00;
var item1_quantity = 2;
var item2_quantity = 3;
var shipping_charges = 5.00;

var total_cost = (item1_price * item1_quantity) + (item2_price * item2_quantity) + shipping_charges;

document.write("<h1>Shopping Cart</h1>" + "<br>");
document.write("Item 1: $" + item1_price + " x " + item1_quantity + " = $" + (item1_price * item1_quantity) + "<br>");
document.write("Item 2: $" + item2_price + " x " + item2_quantity + " = $" + (item2_price * item2_quantity) + "<br>");
document.write("Shipping Charges: $" + shipping_charges + "<br>");
document.write("Total Cost: $" + total_cost + "<br>");

//Q8
var total_marks = 500;
var marks_obtained = 450;
var percentage = (marks_obtained / total_marks) * 100;
document.write("<h1>Marksheet</h1>")
document.write("Total Marks: " + total_marks + "<br>");
document.write("Marks Obtained: " + marks_obtained + "<br>");
document.write("Percentage: " + percentage + "%" + "<br>");

//Q9
var usd = 10;
var sar = 25;
var pkr = (usd * 104.80) + (sar * 28);
document.write("<h1>Currency in PKR</h1>")
document.write("Total Currency in Pakistani Rupees: " + pkr + " PKR");

var num = 10;
var result = ((num + 5) * 10) / 2;

document.write("Result: " + result);

//Q10
var current_year = 2023;
var birth_year = 1995;
var age1 = current_year - birth_year;
var age2 = age1 - 1;
document.write("<h1>Age Calculator</h1>")
document.write("They are either " + age2 + " or " + age1 + " years old");

//Q11
var radius = 5;
var pi = 3.142;
var circumference = 2 * pi * radius;
var area = pi * (radius * radius);
document .write("<h1>The Geometrizer</h1>")
document.write("The circumference is " + circumference + "<br>");
document.write("The area is " + area);


//Q12
var snack = "chocolate";
var current_age = 28;
var max_age = 70;
var amount_per_day = 2;
var total_amount = (max_age - current_age) * 365 * amount_per_day;

document.write("You will need " + total_amount + " " + snack + " to last you until the ripe old age of " + max_age);

