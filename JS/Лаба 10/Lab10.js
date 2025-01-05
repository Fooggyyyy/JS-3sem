//1 Задание
console.log("1 Задание");
const set = new Set([1,1,2,3,4]);
console.log(set);

//2 Задание
console.log("2 Задание");
const name = "Lydia";
age = 21;
console.log(delete name);
console.log(delete age);

//3 Задание
console.log("3 Задание");
const numbers =[1,2,3,4,5];
const [y]=numbers;
console.log(y);

//4 Задание
console.log("4 Задание");
const user ={name:"Lydia",age:21};
const admin={admin:true,...user};
console.log(admin);

//5 Задание
console.log("5 Задание");
const person ={name:"Lydia"};
Object.defineProperty(person,"age",{value:21});
console.log(person);
console.log(Object.keys(person));

//6 Задание
console.log("6 Задание");
const a={};
const b={key:"b"};
const c={key:"c"};

a[b]=123;
a[c]=456;
console.log(a[b]);

//7 Задание
console.log("7 Задание");
let num =10;
const increaseNumber=()=>num++;
const increasePassedNumber =number=>number++;

const num1=increaseNumber();
const num2=increasePassedNumber();

console.log(num1);
console.log(num2);

//8 Задание
console.log("8 Задание");
const value={number:10};
const multiply =(x={...value})=>{
    console.log((x.number*=2));
}

multiply();
multiply();
multiply(value);
multiply(value);


//9 Задание
console.log("9 Задание");
[1,2,3,4].reduce((x,y)=>console.log(x,y));