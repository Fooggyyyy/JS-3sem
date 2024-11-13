//1 Задание
let arr_task1 = [1,2,3];
let [a] = arr_task1;
console.log("Первое значение arr_task1:", a);

//2 Задание
let user = {name: "Sanya", age: 52};
let admin = {...user, admin: true};

console.log("\nПоля admin: ");
for(element in admin)
{
    console.log(admin[element]);
}

console.log("");

//3 задание
let store = {
    state: { // 1 уровень
        profilePage: { // 2 уровень
            posts: [ // 3 уровень
                { id: 1, message: 'Hi', likesCount: 12 },
                { id: 2, message: 'By', likesCount: 1 }
            ],
            newPostText: 'About me'
        },
        dialogsPage: {
            dialogs: [
                { id: 1, name: 'Valera' },
                { id: 2, name: 'Andrey' },
                { id: 3, name: 'Sasha' },
                { id: 4, name: 'Viktor' }
            ],
            messages: [
                { id: 1, message: 'hi' },
                { id: 2, message: 'hi hi' },
                { id: 3, message: 'hi hi hi' }
            ]
        },
        sidebar: []
    }
};

const {
    state: {
        profilePage: {
            posts
        },
        dialogsPage: {
            dialogs,
            messages
        }
    }
} = store;

posts.forEach(post => {
    console.log(`ID: ${post.id}, Likes: ${post.likesCount}`);
});

const evenIdDialogs = dialogs.filter(dialog => dialog.id % 2 === 0);
evenIdDialogs.forEach(post => {console.log('Обновленные сообщения:', post)});

const updatedMessages = messages.map(msg => ({ ...msg, message: 'Hello user' }));
updatedMessages.forEach(post => {console.log('Обновленные сообщения:', post)});

//4 задание
console.log("");
let tasks = [
    { id: 1, title: "HTML&CSS", isDone: true },
    { id: 2, title: "JS", isDone: true },
    { id: 3, title: "ReactJS", isDone: false },
    { id: 4, title: "Rest API", isDone: false },
    { id: 5, title: "GraphQL", isDone: false }
  ];
  
  let newTask = { id: 6, title: "Node.js", isDone: false };
  
  let updatedTasks = [...tasks, newTask];
  updatedTasks.forEach(post => {console.log('Обновленные сообщения:', post)});

//5 задание
console.log("");
function sumValues(x, y, z) {
    return x + y + z;
  }
  
  let numbers = [1, 2, 3];
  
  let result = sumValues(...numbers);
  
  console.log(result);
  
  
