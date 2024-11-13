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
