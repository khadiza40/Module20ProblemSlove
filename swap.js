var num1 = 4;
var num2 =7;
console.log(num1,num2);
//swaping process 1
var temp = num1;
 num1 =num2;
 num2 = temp;
console.log(num1,num2);
//swaping process 2
// destructing
[num1, num2] = [num2, num1];
console.log(num1,num2);

