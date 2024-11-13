 // Задание 1: Объединение двух массивов с вложенностью используя reduce()
 const arr1 = [1, [2, 3], 4];
 const arr2 = [[5, 6], 7, 8];
 
 const mergedArray = [arr1, arr2].reduce((acc, val) => 
    acc.concat(Array.isArray(val) ? val.reduce((a, v) => a.concat(Array.isArray(v) ? v : [v]), []) : val), []
  );
 
 console.log("Задание 1: Объединение двух массивов");
 console.log(mergedArray); 
 
 // Задание 2: Нахождение суммы элементов массива, если вложенность массива неизвестна
 const nestedArray = [1, [2, [3, 4]]];
 
 const arrrray = [1,2,3,4,5];

 const sum = (arr) => arr.reduce((acc, val) => 
   Array.isArray(val) ? acc + sum(val) : acc + val, 0);

 const sum1 = (arr) => arr.reduce((acc, val) => 
 acc*val, 1);

 console.log("Задание 2: Сумма элементов массива");
 console.log(sum(nestedArray)); 
 console.log(sum1(arrrray)); 
 
 // Задание 3: Группировка студентов по номеру группы и фильтрация по возрасту > 17
 const students = [
   {name: "John", age: 18, groupId: 101},
   {name: "Jane", age: 17, groupId: 102},
   {name: "Jim", age: 19, groupId: 101},
   {name: "Jake", age: 16, groupId: 103},
   {name: "Jill", age: 20, groupId: 102}
 ];
 
 const groupByGroupId = (students) => {
   return students
     .filter(student => student.age > 17)
     .reduce((acc, student) => {
       acc[student.groupId] = acc[student.groupId] || [];
       acc[student.groupId].push(student);
       return acc;
     }, {});
 };
 
 console.log("Задание 3: Группировка студентов по номерам групп");
 const groupedStudents = groupByGroupId(students);

for (const groupId in groupedStudents) {
  console.log(`Group ${groupId}:`);
  groupedStudents[groupId].forEach(student => console.log(student));
}

// Задание 4: Преобразование строки в коды ASCII, замена цифр и вычисление разности
const processString = (str) => {
    const total1 = str.split('').map(char => char.charCodeAt(0)).join('');
    const total2 = total1.replace('7', '1');
    const result = Number(total1) - Number(total2);
    
    console.log(`total1 = ${total1}, total2 = ${total2}, result = ${result}`);
    return result;
  };
  
  console.log("Задание 4: Преобразование строки в коды ASCII");
  processString('ABC'); 

 // Задание 5: Объединение нескольких объектов с использованием Object.assign
 const extend = (...objects) => {
   return Object.assign({}, ...objects);
 };
 
 let oob = {};
 oob.name = "Lexa";
 let oob1 = oob;
 oob1.age = 15;
 console.log(oob1.name);
 console.log("Задание 5: Объединение нескольких объектов");
 console.log(extend({a: 1, b: 2}, {c: 3})); 
 let ext = extend({a: 1, b: 2}, {c: 3});
 for (let key in ext) {
  console.log(ext[key]);
}
 console.log(extend({a: 1, b: 2}, {c: 3}, {d: 4})); 
 
 console.log(extend({a: 1, b: 2}, {a: 3, c: 3})); 

// Задание 6: Создание башни-пирамиды из символов "*"
const towerBuilder = (nFloors) => {
    const tower = [];
    for (let i = 0; i < nFloors; i++) {
      const spaces = ' '.repeat(nFloors - i - 1);
      const stars = '*'.repeat(2 * i + 1);
      tower.push(spaces + stars + spaces);
    }
    return tower;
  };
   
  console.log("Задание 6: Башня-пирамида");
  towerBuilder(3).forEach(line => console.log(line));