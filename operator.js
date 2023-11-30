var a=5
var b=5
console.log(a==b || b>a)

let i=1;
const multiplier = 6
while (i<= 10){
    let result = multiplier +i
    console.log('${multiplier} +${i})=${result}')
    i++;
}

let num = 1
const target = 24
console.log ("The factors of 24 are:")
while(num <= target){
    if (target % num=== 0){
        console.log(num)
    }
    num++;
}

function reverseDigits(number){
    let reverse =0;
    while (number > 0){
        reverse = reverse * 10 + (number % 10);
        number =math.floor(number/ 10)
    }
    return reverse;
}

//do-while loop
let c = 0;
do {
    console.log(c);
    a++;
} while (c < 5);




