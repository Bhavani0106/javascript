/*var a=15
var b= "javascript"
console.log(a);
console.log(b);
console.log(a+b)
var c="welcome to data types"
console.log(c)
var d=true
console.log(d)
console.log(a+b+c+d);*/
let output = "";

for (let i = 1; i <= 5; i++) {
    output += i + ""+",";
}

console.log(output.trim());