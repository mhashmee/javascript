/*var a, b, c;
a = 18
b = 2
c = a + b;
document.write(c);

var age = 15;
switch (false) {
    case (age > 14 && age <= 20):
        document.write("you are not Eligble");
        break;
    case (age > 20 && age <= 30):
        document.write("You are eligble");
        break;
    default:
        document.write("enter the valid date")
        break;
}
var a = 20;
if (a > 30) {
    document.write("true");
} else {
    document.write("false");
}
var per = 50;
if (per >= 80 && per <= 100) {
    document.write("A+")
} else if (per >= 60 && per < 80) {
    document.write("A");
} else if (per >= 45 && per <= 59) {
    document.write("A-");
} else if (per >= 33 && per < 45) {
    document.write("b");
} else if (per < 33) {
    document.write("Fail");
} else {
    document.write(" please enter valid Number");
}
var day = 6;
switch (day) {
    case 1:
        document.write("today Is Monday");
        break;
    case 2:
        document.write("today Is wednesday");
        break;
    case 3:
        document.write("today Is tuesday");
        break;
    case 4:
        document.write("today Is thursday");
        break;
    case 5:
        document.write("today Is friday");
        break;
    case 6:
        document.write("today Is saturday");
        break;
    default:
        document.write("please enter valid date");
        break;
}
var age = 37;
switch (true) {
    case (age > 14 && age <= 20):
        document.write("you are not eligble");
        break;
    case (age > 20 && age <= 30):
        document.write("you are  eligble");
        break;
    default:
        document.write(" wrong valid")
        break;
}
var a = 10;
var b = 20;
if (a > b) {
    alert("a is greater");
} else {
    alert("b is greater");
}

// string ..number .. boolean .. null ..undefinied .. array.
//var a =10; 
//var a = "10, 20 , 30";
var a = [10, 20, 30, 40];
document.write(a[3]);
var ary = [
    ["rasel", "16", "year"],
    ["rakib", "45", "year"],
    ["akash", "24", "year"],
    ["zakir", "20", "year"]
];
for (var a = 2; a < 4; a++) {
    document.write(ary[a] + "<br>");
}

//ary.reverse();
//document.write(ary + "<br>");
//delete ary[1];
//document.write(ary);
//ary.sort();
//document.write(ary + "<br>");
//ary[2][2]=35;
//document.write(ary[2][2]);
//document.write(ary.length);
//document.write(ary[2][2]);
let a = document.getElementById("main");
console.log(a);
let a = document.getElementById("main");
console.log(a);
var ary = [
    ["rakib", "zain", "alif ", "sakib"],
    ["rasel", "zain", "alif ", "sakib"],
    ["fahim", "zain", "18 ", "sakib"],
    ["sayem", "zain", "alif ", "sakib"]
];
for (var a = 0; a < 4; a++) {
    document.write(ary[a] + "<br>");
} *
/
var a = document.getElementsByClassName("container");
console.log(a);
/*var a,b,c;
a=10;
b=3;
c=a+b;
document.write(c);
document.write("<br>");
a++;
c=a+b;
document.write(c);
const a=10;
 a= 15;
document.write(a);
var x="hello";
 x= 23;
 x=true;
 x=["html", "CSS", "js"];
 x={
     name:"obaid",
     id: "kak"
 };
x=undefined;
x;
x=null;
document.write(x);
document.write("<br>");
document.write(typeof x);
x+=y  ---x=x+y----
var x=10;
var y= 3;
x%=y;
document.write(x);
document.write(4=="4");
if(10>10){
    document.write("greater")
}else{
    document.write("lower")
}
let a, b, c;
 a=10;
 b=5;
 let a=7;
 c= a-b;
 document.write(c);
var a, b, c;
 a=10;
 b=5;
 var a=7;
 c= a-b;
 document.write(c);
 const a=10;
 const b=5;
 const c= a-b;
  const  a =7;
 document.write(c);
 var x;
 document.write(x);
 document.write("<br>");
 document.write( typeof x);
 var x=10;
 var y=2;
 x**=y;   // x=x**y
 document.write(x);
 var x = "30";
document.write(typeof x);
true false
var a, b;
a=10;
b= 20;
console.log(a<=b); // != means Not equal
var a= 10;
var b= 20;
if(a>b){
    document.write("b is greater ");
}else{
    document.write(" a is not greater than b")
}
var a=5;
if(a>10){
    document.write("a is greater");
}else{
    document.write("a is lower");
}
var per = 57;
if(per >= 80 && per <= 100){
    document.write("A+")
}else if(per >=60 && per <80){
    document.write("A")
}else if(per >=45 && per <60){
    document.write("A-")
 }else if(per >=33 && per <45){
    document.write("B")
 }else if(per <33){
    document.write("Fail")
 }else{
     document.write("please enter valid number");
 }



 sum();
var per = prompt("enter percentage");
if(per >= 80 && per <= 100){
    document.write("A+")
}else if(per >=60 && per <80){
    document.write("A")
}else if(per >=45 && per <60){
    document.write("A-")
 }else if(per >=33 && per <45){
    document.write("B")
 }else if(per <33){
    document.write("Fail")
 }else{
     document.write("please enter valid number");
 }
 
function hello() {
    document.write("Hello EveryOne");
    
}
var per = prompt("enter your percentage");
if (per >= 80 && per <= 100) {
    document.write("A+")
} else if (per >= 60 && per < 80) {
    document.write("A");
} else if (per >= 45 && per <= 59) {
    document.write("A-");
} else if (per >= 33 && per < 45) {
    document.write("b");
} else if (per < 33) {
    document.write("Fail");
} else {
    document.write(" please enter valid Number");
}
var a = prompt ("what is your name ?");
document.write(a);
function hello() {
    document.write("hello World");
    document.write("<br>");
    
}
hello();
hello();
hello();
hello();
hello(); 
function sum(a,b,c) {
    document.write(a-b+c);
    document.write("<br>");
    
}
sum(20,10,30);
function sum() {
    var a=10;
    document.write(a);
    document.write("<br>");
    
}
sum();
document.write(a);
function hello() {
    document.write("Welcome");
}




var day = 6;
switch (day) {
    case 1:
        document.write("today is  sunday");
        break;
    case 2:
        document.write("today is Monday");
        break;
    case 3:
        document.write("today is tuesday");
        break;
    case 4:
        document.write("today is wednesday");
        break;
    case 5:
        document.write("today is Thursday");
        break;
    case 6:
        document.write("today is friday");
        break;
    case 7:
        document.write("today is saturday");
        break;
    default:
        document.write("enter the valid date");
        break;
}

var a = prompt("what is your name ?");
  console.log(a);
  function hello() {
      document.write("Hello world ");
      document.write("<br>");
  }
hello();
hello();
hello();
hello();
hello();
hello();
function sum(a,b) {
    document.write(a+b);
    
}
sum(20,30);
function sum() {
    var a=30;
    document.write(a);
    
}

loop  
var a =10;
   initialization 
   condition  true increament decrement 
   statement 
   
     a++  a= a+1
   10 9 8 7 6 5 4 3
   if true false
   while loop
   do/while loop
   for loop
   for/inloop (objeact)
   for each (array)
document.write("hello world");
document.write("hello world");
document.write("hello world");
document.write("hello world");
document.write("hello world");
var a=10;
document.write("<ul>")
while (a >= 1) {
    document.write("<li>" + a +  ") hello world <br>" + "</li>");
    a=a-1
    
}
document.write("</ul>")
var a=1 ;
do {
    document.write(a + ") hello world <br>");
    a++;
} while (a<=10);
for ( var a=1 ; a<=10; a++ ){
    document.write(a + ") Hello World <br>")
}
for ( var a=1 ; a<=10; a++ ){
    if(a==3){
   document.write( a +") Hey <br>");
    }
    document.write(a + ") Hello World <br>")
}
for(var a=5; a<=10; a++){
    if(a%2==0){
        document.write(a+ "<br>");
    }
}
var a = [10,20,30,40,50,60];
document.write(a[3]);
var a= 10;
document.write("<ul>");
while (a>=1) {
    document.write( "<li>" + a + ") hello world <br>" + "</li>");
    a=a-1;
}
document.write("</ul>");
var a= 1;
do {
    document.write(a + ") Hello world <br>");
    a=a+1;
} while (a<=10);
for(var a=1; a<=10; a++){
    document.write(a + ") Hello world <br>");
}
for ( var a=1; a<=10; a++){
    if(a==6){
        document.write(a +") Hey <br>");
        break
    }
    document.write( a +") helloworld <br>");
}
for (var a=1; a<=10; a++){
    if(a%2==0){
        document.write(a + ") Even <br>");
    }
}

/*