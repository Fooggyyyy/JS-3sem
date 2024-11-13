//1

let a_task1 = 5;        // number
let name = "Name";      // string 
let i = 0;              // number
let double = 0.23;      // number
let result = 1 / 0;     // number, infinity
let answer = true;      // bool
let no = null;          // null 

//2

let square = Math.floor((45/5) * Math.floor(21/5))
console.log(square);

//3

let i_task3 = 2;
let a = ++i;
let b = i++;
if(a > b)
    console.log('a >')
else if(a < b)
    console.log('b >')
else
    console.log("==")

//4

let result1 = ("Котик" === "котик") ? "Равны" : "Не равны"; // Регистр имеет значение
let result2 = ("Котик" === "китик") ? "Равны" : "Не равны"; // Строки разные
let result3 = ("Кот" === "Котик") ? "Равны" : "Не равны"; // Одна строка является подстрокой другой
let result4 = ("Привет" === "Пока") ? "Равны" : "Не равны"; // Слова разные
let result5 = (73 == "53") ? "Равны" : "Не равны"; // 73 не равно 53
let result6 = (false == 0) ? "Равны" : "Не равны"; // false приводится к 0
let result7 = (54 == true) ? "Равны" : "Не равны"; // true = 1, 54 != 1
let result8 = (123 == false) ? "Равны" : "Не равны"; // false = 0, 123 != 0
let result9 = (true == "3") ? "Равны" : "Не равны"; // true = 1, "3" != 1
let result10 = (3 == "5мм") ? "Равны" : "Не равны"; // "5мм" не может быть приведено к числу
let result11 = (8 == "-2") ? "Равны" : "Не равны"; // Числа разные
let result12 = (34 == "34") ? "Равны" : "Не равны"; // Строка "34" приведется к числу 34
let result13 = (null == undefined) ? "Равны" : "Не равны"; // null и undefined считаются равными при нестрогом сравнении

console.log(result1);  
console.log(result2);  
console.log(result3);  
console.log(result4);  
console.log(result5);  
console.log(result6);  
console.log(result7);  
console.log(result8);  
console.log(result9);  
console.log(result10); 
console.log(result11); 
console.log(result12); 
console.log(result13); 

//5

//На HTML

//6

//На HTML

//7

let check1 = true + true;
let check2 = 0 + "5";
let check3 = 5 + "мм";
let check4 = 8/Infinity;
let check5 = 9 * "\n9";
let check6 = null - 1;
let check7 = "5" - 2;
let check8 = "5px" - 3;
let check9 = true - 3;
let check10 = 7 || 0;

console.log('check1 :>> ', check1);   // 1 + 1 = 2, true = 1
console.log('check2 :>> ', check2);   // str "0" + 5
console.log('check3 :>> ', check3);   // str 5 + "мм"
console.log('check4 :>> ', check4);   // 8/100000000000000000... +- = 0
console.log('check5 :>> ', check5);   // 9 * 9 = 81
console.log('check6 :>> ', check6);   // 0 - 1 = -1
console.log('check7 :>> ', check7);   // 5 - 2 = 3
console.log('check8 :>> ', check8);   // str - int !=
console.log('check9 :>> ', check9);   // 1 - 3 = 2
console.log('check10 :>> ', check10); // true || false = true

//8

let array = [1,2,3,4,5,6,7,8,9,10];
let array_number = 1;
while(array_number < 11)
{
    if(array_number % 2 == 0) {array[array_number-1] += 2; }
        
    else {array[array_number-1] += "мм";}
        
    array_number++;
}

array.forEach(element => console.log(element));

//9

//На HTML

//10

//На HTML

//11

//Function Declaration

function params(a, b) {
    if (a === b) {
        return 4 * a; 
    } else {
        return a * b; 
    }
}

//Function Expression

const params1 = function(a, b) {
    if (a === b) {
        return 4 * a; 
    } else {
        return a * b; 
    }
};

//Стрелочная функция

const params2 = (a, b) => {
    if (a === b) {
        return 4 * a; 
    } else {
        return a * b; 
    }
};