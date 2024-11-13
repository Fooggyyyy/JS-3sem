//Задание 1
console.log("Задание 1\n\n\n");

let Set_Task1 = new Set(["Product1", "Product2", "Product3", "Product4", "Product5"])

function HasProduct(product) {
    if (Set_Task1.has(product))
        return true; 
    else 
        return false;
    
}

function AddProduct(product)
{
    if(!HasProduct(product))
    {
        Set_Task1.add(product);
        console.log("Продукт добавлен AddProduct");
    }
    else
    {
        console.log("Данный продукт уже имеется AddProduct");
    }
    
}

function DeleteProduct(product)
{
    if(HasProduct(product))
    {
        Set_Task1.delete(product);
        console.log("Продукт удален DeleteProduct");
    }
    else
    {
        console.log("Данного продукта нет DeleteProduct");
    }
}

console.log("Изначальные продукты: ", Set_Task1);

HasProduct("Product3"); 
HasProduct("Product6");  

AddProduct("Product6"); 
AddProduct("Product3");  

DeleteProduct("Product2");  
DeleteProduct("Product6");  
DeleteProduct("Product6");

console.log("Текущие продукты: ", Set_Task1);

//Задание 2

console.log("Задание 2\n\n\n");

let students = new Set();

function addStudent(id, group, name) {
    let student = { id: id, group: group, name: name };
    if (!hasStudent(id)) {
        students.add(student);
        console.log(`Студент ${name} добавлен.`);
    } else {
        console.log(`Студент с номером зачетки ${id} уже существует.`);
    }
}

function hasStudent(id) {
    for (let student of students) {
        if (student.id === id) {
            return true;
        }
    }
    return false;
}

function deleteStudentById(id) {
    let found = false;
    students.forEach(student => {
        if (student.id === id) {
            students.delete(student);
            console.log(`Студент с номером зачетки ${id} удален.`);
            found = true;
        }
    });
    if (!found) {
        console.log(`Студент с номером зачетки ${id} не найден.`);
    }
}

function filterByGroup(group) {
    let filteredStudents = Array.from(students).filter(student => student.group === group);
    if (filteredStudents.length > 0) {
        console.log(`Студенты из группы ${group}:`);
        filteredStudents.forEach(student => {
            console.log(`${student.name} (№ зачетки: ${student.id})`);
        });
    } else {
        console.log(`Студентов из группы ${group} не найдено.`);
    }
}

function sortStudentsById() {
    let sortedStudents = Array.from(students).sort((a, b) => a.id - b.id);
    console.log('Студенты, отсортированные по номеру зачетки:');
    sortedStudents.forEach(student => {
        console.log(`${student.name} (№ зачетки: ${student.id})`);
    });
}

addStudent(101, "A", "Иван Иванов");
addStudent(102, "B", "Петр Петров");
addStudent(103, "A", "Сергей Сергеев");
addStudent(104, "C", "Дмитрий Дмитриев");

deleteStudentById(102);

filterByGroup("A");

sortStudentsById();


//Задание 3

console.log("Задание 3\n\n\n");

let productCart = new Map();

function addProduct(id, name, quantity, price) {
    if (productCart.has(id)) {
        console.log("Товар с данным id уже существует.");
    } else {
        productCart.set(id, { name, quantity, price });
        console.log("Товар добавлен: ", { id, name, quantity, price });
    }
}

function deleteProductById(id) {
    if (productCart.has(id)) {
        productCart.delete(id);
        console.log(`Товар с id ${id} был удален.`);
    } else {
        console.log(`Товар с id ${id} не найден.`);
    }
}

function deleteProductsByName(name) {
    let productsToDelete = Array.from(productCart).filter(([id, product]) => product.name === name);
    
    if (productsToDelete.length > 0) {
        productsToDelete.forEach(([id]) => productCart.delete(id));
        console.log(`Товары с названием "${name}" были удалены.`);
    } else {
        console.log(`Товары с названием "${name}" не найдены.`);
    }
}

function changeQuantity(id, newQuantity) {
    if (productCart.has(id)) {
        let product = productCart.get(id);
        product.quantity = newQuantity;
        productCart.set(id, product);  
        console.log(`Количество товара с id ${id} изменено на ${newQuantity}.`);
    } else {
        console.log(`Товар с id ${id} не найден.`);
    }
}

function changePrice(id, newPrice) {
    if (productCart.has(id)) {
        let product = productCart.get(id);
        product.price = newPrice;
        productCart.set(id, product);  // Обновляем товар с новой ценой
        console.log(`Цена товара с id ${id} изменена на ${newPrice}.`);
    } else {
        console.log(`Товар с id ${id} не найден.`);
    }   
}

function displayCart() {
    console.log("Список товаров в корзине:");
    productCart.forEach((product, id) => {
        console.log(`id: ${id}, Название: ${product.name}, Количество: ${product.quantity}, Цена: ${product.price}`);
    });
}

addProduct(1, "Молоко", 5, 100);
addProduct(2, "Хлеб", 2, 50);
addProduct(3, "Яблоко", 10, 30);
addProduct(4, "Молоко", 3, 90);  

displayCart(); 

deleteProductById(2);  

displayCart(); 

deleteProductsByName("Молоко");  

displayCart();  

changeQuantity(3, 15); 

changePrice(3, 25);  

displayCart();  

//Задание 4

console.log("Задание 4\n\n\n");

let cache = new WeakMap();

function calculateSum(a, b) {
    let key = { a, b };  

    if (cache.has(key)) {
        console.log("Результат взят из кэша:");
        return cache.get(key);
    } else {
        let result = a + b;
        cache.set(key, result);
        console.log("Результат вычислен и сохранен в кэш:");
        return result;
    }
}

console.log(calculateSum(5, 10)); 
console.log(calculateSum(5, 10));  
console.log(calculateSum(7, 3));   
console.log(calculateSum(7, 3));  
