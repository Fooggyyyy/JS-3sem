class Task 
{
    static id_value = 1;
    constructor(name_task, ready)
    {
        this.id = Task.id_value; 
        Task.id_value++;

        this.name_task = name_task;

        if (ready !== "выполнено" && ready !== "не выполнено")
            throw new Error("не корректное введение статуса задачи");
        else
            this.ready = ready;
    }

    get name_task_getter()
    {
        return this.name_task;
    }

    get ready_getter()
    {
        return this.ready;
    }

    set name_task_setter(value)
    {
        this.name_task = value;
    }

    set ready_setter(value)
    {
        if (value === "выполнено" || value === "не выполнено") 
            this.ready = value;
        else 
            throw new Error("не корректное введение статуса задачи");
    }
}

try 
{
    const task1 = new Task("Покупка продуктов", "выполнено");
    console.log(`Задача ${task1.id}: ${task1.name_task_getter}, статус: ${task1.ready_getter}`);
  
    const task2 = new Task("Уборка комнаты", "не выполнено");
    console.log(`Задача ${task2.id}: ${task2.name_task_getter}, статус: ${task2.ready_getter}`);
  
    task1.ready_setter = "не выполнено";
    console.log(`Задача ${task1.id}: ${task1.name_task_getter}, новый статус: ${task1.ready_getter}`);
  
    const task3 = new Task("Подготовка отчета", "в процессе");
} 
catch (error) 
{
    console.error(error.message);
}

class Todolist 
{
    static id_value = 1;
  
    constructor(listName) 
    {
      this.id = Todolist.id_value; 
      Todolist.id_value++;
      this.listName = listName; 
      this.tasks = []; 
    }

    changeListName(newName) 
    {
      this.listName = newName;
    }

    addTask(task) 
    {
      if (task instanceof Task) 
        this.tasks.push(task);
      else 
        throw new Error("Можно добавлять только объекты класса Task");
    }
  
    filterTasksByStatus(status) {
      if (status !== "выполнено" && status !== "не выполнено") 
        throw new Error("Некорректный статус для фильтрации");
      
      return this.tasks.filter((task) => task.ready === status);
    }
}
  
try 
{
    const task1 = new Task("Покупка продуктов", "выполнено");
    const task2 = new Task("Уборка комнаты", "не выполнено");
    const task3 = new Task("Сделать домашнее задание", "выполнено");
  
    const myTodolist = new Todolist("Ежедневные задачи");
  
    myTodolist.addTask(task1);
    myTodolist.addTask(task2);
    myTodolist.addTask(task3);
  
    console.log(`Список "${myTodolist.listName}" содержит следующие задачи:`);
    myTodolist.tasks.forEach((task) => {
      console.log(`Задача ${task.id}: ${task.name_task_getter}, статус: ${task.ready_getter}`);
    });
  
    const completedTasks = myTodolist.filterTasksByStatus("выполнено");
    console.log("\nЗавершённые задачи:");
    completedTasks.forEach((task) => {
      console.log(`Задача ${task.id}: ${task.name_task_getter}`);
    });
  
    const pendingTasks = myTodolist.filterTasksByStatus("не выполнено");
    console.log("\nНезавершённые задачи:");
    pendingTasks.forEach((task) => {
      console.log(`Задача ${task.id}: ${task.name_task_getter}`);
    });
  
    myTodolist.changeListName("Задачи на неделю");
    console.log(`\nНовое название списка: ${myTodolist.listName}`);
} 
catch (error) 
{
    console.error(error.message);
}
  