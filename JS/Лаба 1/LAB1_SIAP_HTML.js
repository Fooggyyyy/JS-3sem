function checkTeacherName() {
    let teacherFullName = "Николай Иванович Белодед".toLowerCase();
    let userInput = prompt("Введите имя преподавателя:").toLowerCase();
    
    userInput = userInput.trim();

    debugger;
    if (userInput === teacherFullName || userInput.includes("николай") || userInput.includes("николай иванович")) {
        alert("Введенные данные верны.");
    } else {
        alert("Введенные данные неверны.");
    }
}

function checkExams() {

    let russian = prompt("Введите результат экзамена по русскому языку (сдал/не сдал):").toLowerCase();
    let math = prompt("Введите результат экзамена по математике (сдал/не сдал):").toLowerCase();
    let english = prompt("Введите результат экзамена по английскому языку (сдал/не сдал):").toLowerCase();

    let allPassed = russian === "сдал" && math === "сдал" && english === "сдал";
    let nonePassed = russian === "не сдал" && math === "не сдал" && english === "не сдал";
    let atLeastOneFailed = russian === "не сдал" || math === "не сдал" || english === "не сдал";

    if (allPassed) {
        alert("Вы переведены на следующий курс.");
    } else if (nonePassed) {
        alert("Вы отчислены.");
    } else if (atLeastOneFailed) {
        alert("Вам нужно пересдать экзамены.");
    }
}

function getDayOfWeekArray() {
    let userInput = prompt("Введите номер дня недели (1-7):");
    const daysOfWeekArray = ["", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
    alert(daysOfWeekArray[userInput]);
}

function getDayOfWeekObject(dayNumber) {
    const daysOfWeek = {
        1: "Понедельник",
        2: "Вторник",
        3: "Среда",
        4: "Четверг",
        5: "Пятница",
        6: "Суббота",
        7: "Воскресенье"
    };

    return daysOfWeek[dayNumber] || "Некорректный номер дня недели.";
}

function checkDayOfWeek() {
    let userInput = prompt("Введите номер дня недели (1-7):");
    let day = getDayOfWeekObject(userInput);
    alert(`День недели: ${day}`);
}

function createString(param1 = "default", param2, param3) {
    return `${param1}, ${param2}, ${param3}`;
}