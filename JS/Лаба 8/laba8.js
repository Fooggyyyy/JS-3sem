// 1. Объект user
let user = {
    name: 'Masha',
    age: 21
};
let deepCopyUser = { ...user };

// 2. Массив numbers
let numbers = [1, 2, 3];
let deepCopyNumbers = [...numbers];

// 3. Объект user1 с вложенным объектом
let user1 = {
    name: 'Masha',
    age: 23,
    location: {
        city: 'Minsk',
        country: 'Belarus'
    }
};
let deepCopyUser1 = { ...user1, location: { ...user1.location } };

// 4. Объект user2 с массивом
let user2 = {
    name: 'Masha',
    age: 28,
    skills: ["HTML", "CSS", "JavaScript", "React"]
};
let deepCopyUser2 = { ...user2, skills: [...user2.skills] };

// 5. Массив объектов array
const array = [
    { id: 1, name: 'Vasya', group: 10 },
    { id: 2, name: 'Ivan', group: 11 },
    { id: 3, name: 'Masha', group: 12 },
    { id: 4, name: 'Petya', group: 10 },
    { id: 5, name: 'Kira', group: 11 },
];
let deepCopyArray = array.map(item => ({ ...item }));

// 6. Объект user4 с вложенными объектами
let user4 = {
    name: 'Masha',
    age: 19,
    studies: {
        university: 'BSTU',
        speciality: 'designer',
        year: 2020,
        exams: {
            maths: true,
            programming: false
        }
    }
};
let deepCopyUser4 = {
    ...user4,
    studies: {
        ...user4.studies,
        exams: { ...user4.studies.exams }
    }
};

// 7. Объект user5 с массивами и вложенными объектами
let user5 = {
    name: 'Masha',
    age: 22,
    studies: {
        university: 'BSTU',
        speciality: 'designer',
        year: 2020,
        department: {
            faculty: 'FIT',
            group: 10,
        },
        exams: [
            { maths: true, mark: 8 },
            { programming: true, mark: 4 },
        ]
    }
};
let deepCopyUser5 = {
    ...user5,
    studies: {
        ...user5.studies,
        department: { ...user5.studies.department },
        exams: user5.studies.exams.map(exam => ({ ...exam }))
    }
};
deepCopyUser5.studies.department.group = 12;
deepCopyUser5.studies.exams.find(exam => exam.programming).mark = 10;

// 8. Объект user6 с вложенными объектами
let user6 = {
    name: 'Masha',
    age: 21,
    studies: {
        university: 'BSTU',
        speciality: 'designer',
        year: 2020,
        department: {
            faculty: 'FIT',
            group: 10,
        },
        exams: [
            {
                maths: true,
                mark: 8,
                professor: { name: 'Ivan Ivanov', degree: 'PhD' }
            },
            {
                programming: true,
                mark: 10,
                professor: { name: 'Petr Petrov', degree: 'PhD' }
            },
        ]
    }
};
let deepCopyUser6 = {
    ...user6,
    studies: {
        ...user6.studies,
        department: { ...user6.studies.department },
        exams: user6.studies.exams.map(exam => ({
            ...exam,
            professor: { ...exam.professor }
        }))
    }
};
deepCopyUser6.studies.exams.find(exam => exam.professor.name === 'Petr Petrov').professor.name = 'Updated Professor';

// 9. Объект user7 с вложенными массивами
let user7 = {
    name: 'Masha',
    age: 20,
    studies: {
        university: 'BSTU',
        speciality: 'designer',
        year: 2020,
        department: {
            faculty: 'FIT',
            group: 10,
        },
        exams: [
            {
                maths: true,
                mark: 8,
                professor: {
                    name: 'Ivan Petrov',
                    degree: 'PhD',
                    articles: [
                        { title: "About HTML", pagesNumber: 3 },
                        { title: "About CSS", pagesNumber: 5 },
                        { title: "About JavaScript", pagesNumber: 1 },
                    ]
                }
            },
            {
                programming: true,
                mark: 10,
                professor: {
                    name: 'Petr Ivanov',
                    degree: 'PhD',
                    articles: [
                        { title: "About HTML", pagesNumber: 3 },
                        { title: "About CSS", pagesNumber: 5 },
                        { title: "About JavaScript", pagesNumber: 1 },
                    ]
                }
            },
        ]
    }
};
let deepCopyUser7 = {
    ...user7,
    studies: {
        ...user7.studies,
        department: { ...user7.studies.department },
        exams: user7.studies.exams.map(exam => ({
            ...exam,
            professor: {
                ...exam.professor,
                articles: exam.professor.articles.map(article => ({ ...article }))
            }
        }))
    }
};
let cssArticle = deepCopyUser7.studies.exams.find(exam => exam.professor.name === 'Petr Ivanov').professor.articles.find(article => article.title === "About CSS");
cssArticle.pagesNumber = 3;

// 10. Заменить сообщения в объекте store на "Hello"
let store = {
    messages: ["Message 1", "Message 2", "Message 3"]
};
let deepCopyStore = {
    ...store,
    messages: store.messages.map(() => "Hello")
};

console.log(deepCopyStore.messages);
