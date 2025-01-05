// Базовый объект для фигуры
const Shape = {
    type: "generic",
    color: null,
    size: "medium",
    lines: 0
};

// Создаем объект Square с помощью __proto__
const Square = {
    __proto__: Shape,
    type: "square",
    color: "yellow"
};

// Создаем SmallSquare как наследника Square
const SmallSquare = {
    __proto__: Square,
    size: "small"
};

// Создаем объект Circle
const Circle = {
    __proto__: Shape,
    type: "circle",
    color: "white"
};

// Создаем GreenCircle как наследника Circle
const GreenCircle = {
    __proto__: Circle,
    color: "green"
};

// Создаем объект Triangle
const Triangle = {
    __proto__: Shape,
    type: "triangle"
};

// Создаем TriangleWithLines как наследника Triangle
const TriangleWithLines = {
    __proto__: Triangle,
    lines: 3
};

// Вывод информации
console.log("Свойства Зеленого Круга:", Object.keys(GreenCircle)); 
console.log("Свойства Треугольника с Тремя Линиями:", Object.keys(TriangleWithLines)); 
console.log("Цвет Маленького Квадрата:", SmallSquare.color);


//task2
// Класс Human
class Human {
    constructor(firstName, lastName, birthYear, address) {
        this.firstName = firstName;  // Имя
        this.lastName = lastName;    // Фамилия
        this.birthYear = birthYear;  // Год рождения
        this.address = address;      // Адрес
    }

    // Геттер для возраста (вычисляется на основе текущего года)
    get age() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.birthYear;
    }

    // Сеттер для изменения года рождения (возраст пересчитывается)
    set age(newAge) {
        const currentYear = new Date().getFullYear();
        this.birthYear = currentYear - newAge;
    }

    // Метод для изменения адреса
    changeAddress(newAddress) {
        this.address = newAddress;
    }
}

// Класс Student, наследуется от Human
class Student extends Human {
    constructor(firstName, lastName, birthYear, address, faculty, course, group, idNumber) {
        super(firstName, lastName, birthYear, address);
        this.faculty = faculty;      
        this.course = course;        
        this.group = group;         
        this.idNumber = idNumber;    
    }

    // Метод для изменения курса
    changeCourse(newCourse) {
        this.course = newCourse;
    }
        
    // Метод для изменения группы
    changeGroup(newGroup) {
        this.group = newGroup;
    }

    // Метод для вывода полного имени
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

// Класс Faculty
class Faculty {
    constructor(name, numberOfGroups, numberOfStudents) {
        this.name = name;              // Название факультета
        this.numberOfGroups = numberOfGroups; // Количество групп
        this.numberOfStudents = numberOfStudents; // Количество студентов
        this.students = [];            // Список студентов
    }

    // Метод для изменения количества групп
    changeNumberOfGroups(newNumber) {
        this.numberOfGroups = newNumber;
    }

    // Метод для изменения количества студентов
    changeNumberOfStudents(newNumber) {
        this.numberOfStudents = newNumber;
    }

    // Метод для добавления студента в список
    addStudent(student) {
        this.students.push(student);
    }

    // Метод для подсчета студентов специальности ДЭВИ
    getDev() {
        return this.students.filter(student => student.idNumber[1] === '3').length;
    }

    // Метод для вывода списка студентов заданной группы
    getGroupe(group) {
        return this.students.filter(student => student.group === group);
    }
}

// Создаем студента
const student1 = new Student(
    "Иван",
    "Иванов",
    2002,               // Год рождения
    "г. Минск",         // Адрес
    "ФИТ",              // Факультет
    2,                  // Курс
    "POIT-22",          // Группа
    "71201301"          // Номер зачетки
);

const student2 = new Student(
    "Петр",
    "Петров",
    2003,
    "г. Витебск",
    "ФИТ",
    1,
    "DEV-11",
    "71301302"
);

// Проверяем методы класса Human
console.log(student1.getFullName()); // Иван Иванов
console.log(student1.age);           // Вычисляет возраст

// Меняем возраст и адрес
student1.age = 23;                   // Возраст станет 23, год рождения пересчитается
student1.changeAddress("г. Гродно");
console.log(student1);

// Создаем факультет
const faculty = new Faculty("ФИТ", 5, 100);
faculty.addStudent(student1);
faculty.addStudent(student2);

// Выводим количество студентов специальности ДЭВИ
console.log(faculty.getDev()); // 1 (только Петр с номером зачетки 71301302)

// Выводим список студентов в группе POIT-22
console.log(faculty.getGroupe("POIT-22"));

