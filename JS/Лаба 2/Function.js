console.log("Задание 1")

function BasicOperation(operation, v1, v2)
{
    if(typeof(v1) != "number")
        return null;
    if(typeof(v2) != "number")
        return null;
    
    if(operation!= "+" && operation != "-" && operation != "*" && operation != "/")
        return null;
    

    if(operation == "+")
        return v1 + v2;
    else if(operation == "-")
        return v1 - v2
    else if(operation == "*")
        return v1 * v2
    else if(operation == "/")
        return v1 / v2
}

let BasicOperation_Test1 = BasicOperation("1", 1, 2);
console.log(BasicOperation_Test1);

let BasicOperation_Test2 = BasicOperation("+", "9", 2);
console.log(BasicOperation_Test2);

let BasicOperation_Test3 = BasicOperation("-", 8, 2);
console.log(BasicOperation_Test3);

let BasicOperation_Test4 = BasicOperation("/", 5, 2);
console.log(BasicOperation_Test4);

let BasicOperation_Test5 = BasicOperation("*", 4, 2);
console.log(BasicOperation_Test5);

console.log("Задание 2")

function SumToN(n)
{
    let sum = 0;
       
    for(i = 0;i <= Math.abs(n); i++)
        sum += i ** 3;

    if(n < 0)
        sum *= -1;

    return sum;
}

console.log(SumToN(3))
console.log(SumToN(-2))

console.log("Задание 3");

function ArrayMiddle(numbers)
{
    if (!Array.isArray(numbers) ) { throw new Error("Не массив");}

    let sum = 0;

    for(i = 0; i < numbers.length; i++)
        sum += numbers[i];

    return sum/numbers.length
}

console.log(ArrayMiddle([1,2,3,52]));

console.log("Задание 4");

function reverseString(str) {
    return str
        .split('') 
        .filter(char => /[a-zA-Z]/.test(char)) 
        .reverse() 
        .join('');  
}

let a = (str) => {return str
    .split('') 
    .filter(char => /[a-zA-Z]/.test(char)) 
    .reverse() 
    .join(''); }

console.log(a("Hello"));
console.log(reverseString("HEllo"));
console.log(reverseString("HEllo13ЙЦУHello"));


console.log("Задание 5");

function repeatString(n, s) {
    return s.repeat(n);
}

console.log(repeatString(3, "Hi"))

console.log("Задание 6");

function arrayDifference(arr1, arr2) {
    let result = [];

    for (let i = 0; i < arr1.length; i++) {
        if (!arr2.includes(arr1[i])) {
            result.push(arr1[i]);
        }
    }

    return result;
}

let arr1 = ["apple", "banana", "orange", "grape"];
let arr2 = ["banana", "grape"];
let result = arrayDifference(arr1, arr2);

console.log(result);

