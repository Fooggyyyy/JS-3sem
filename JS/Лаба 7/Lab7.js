// Задание 1
console.log("Задание 1");
let person = {
    Name: "Богдан",
    Lastname: "Кавецкий",
    age: 18,
    greet() {
        console.log(`Привет, ${this.Name} ${this.Lastname}!!!`);
    },
    ageAfterYears(years) {
        return this.age + years;
    }
};
person.greet();
console.log(`Возраст через 5 лет: ${person.ageAfterYears(5)}`);

// Задание 2
console.log("Задание 2");
let car = {
    model: "Tesla",
    year: 2023,
    getInfo() {
        console.log(`Модель машины: ${this.model}, Год выпуска: ${this.year}`);
    }
};
car.getInfo();

// Задание 3
console.log("Задание 3");
function Book(title, author) {
    this.title = title;
    this.author = author;

    this.getTitle = function () {
        return this.title;
    };

    this.getAuthor = function () {
        return this.author;
    };
}
let book = new Book("Мастер и Маргарита", "Булгаков");
console.log(`Название книги: ${book.getTitle()}`);
console.log(`Автор книги: ${book.getAuthor()}`);

// Задание 4
console.log("Задание 4");
let team = {
    players: ["Иван", "Алексей", "Сергей"],
    getInfo() {
        this.players.forEach(function(player) {
            console.log(`Игрок: ${player}`);
        });
    }
};
team.getInfo();

// Задание 5
console.log("Задание 5");
let counter = (function () {
    let count = 0;
    return {
        increment() {
            count++;
            return count;
        },
        decrement() {
            count--;
            return count;
        },
        getCount() {
            return count;
        }
    };
})();
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.getCount());

// Задание 6
console.log("Задание 6");
let price = {};
Object.defineProperty(price, 'value', {
    value: 100,
    writable: false,
    configurable: true,
    enumerable: true
});
console.log(`Цена: ${price.value}`);
try {
    price.value = 200;
} catch (e) {
    console.log("Нельзя изменить цену!");
}
console.log(`Цена после попытки изменения: ${price.value}`);

// Задание 7
console.log("Задание 7");
let circle = {
    _radius: 0,
    set radius(value) {
        this._radius = value;
    },
    get radius() {
        return this._radius;
    }
};
circle.radius = 5;
console.log(`Радиус окружности: ${circle.radius}`);

// Задание 8
console.log("Задание 8");
let array = [1, 2, 3];
Object.defineProperty(array, 'sum', {
    get() {
        return this.reduce((acc, val) => acc + val, 0);
    }
});
console.log(`Сумма массива: ${array.sum}`);

// Задание 9: Переопределение дескрипторов
console.log("Задание 9");
let car = {};
Object.defineProperties(car, {
    make: {
        value: "Tesla",
        writable: true,
        configurable: true,
        enumerable: true,
    },
    model: {
        value: "Model S",
        writable: true,
        configurable: true,
        enumerable: true,
    },
    year: {
        value: 2023,
        writable: true,
        configurable: true,
        enumerable: true,
    },
});

// Переопределяем дескрипторы, чтобы свойства стали неизменяемыми
Object.defineProperties(car, {
    make: { writable: false, configurable: false },
    model: { writable: false, configurable: false },
    year: { writable: false, configurable: false },
});

console.log(car);
try {
    car.make = "Ford";
} catch (e) {
    console.log("Нельзя изменить свойство make!");
}

// Задание 10: получение площади в прямоугольнике
console.log("Задание 10");
let rectangle = {
    _width: 0,
    _height: 0,

    get width() {
        return this._width;
    },
    set width(value) {
        if (value > 0) this._width = value;
        else console.log("Ширина должна быть положительным числом!");
    },

    get height() {
        return this._height;
    },
    set height(value) {
        if (value > 0) this._height = value;
        else console.log("Высота должна быть положительным числом!");
    },

    get area() {
        return this._width * this._height;
    },
};

rectangle.width = 5;
rectangle.height = 10;
console.log(`Ширина: ${rectangle.width}, Высота: ${rectangle.height}, Площадь: ${rectangle.area}`);

// Задание 11: Получение полного имени
console.log("Задание 11");
let user = {
    _firstName: "Иван",
    _lastName: "Петров",

    get firstName() {
        return this._firstName;
    },
    set firstName(value) {
        this._firstName = value;
    },

    get lastName() {
        return this._lastName;
    },
    set lastName(value) {
        this._lastName = value;
    },

    get fullName() {
        return `${this._firstName} ${this._lastName}`;
    },
    set fullName(value) {
        let parts = value.split(" ");
        if (parts.length === 2) {
            this._firstName = parts[0];
            this._lastName = parts[1];
        } else {
            console.log("Введите полное имя в формате 'Имя Фамилия'.");
        }
    },
};

console.log(user.fullName); // Иван Петров
user.fullName = "Алексей Иванов";
console.log(user.fullName); // Алексей Иванов
console.log(`Имя: ${user.firstName}, Фамилия: ${user.lastName}`);

