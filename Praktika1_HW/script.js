//данные

const user = [
    {name: 'Анна', age: 16},
    {name: 'Ирина', age: 26},
    {name: 'Кирилл', age: 17},
    {name: 'Демид', age: 32},
    {name: 'Ульяна', age: 15},
    {name: 'Дарья', age: 20},
    {name: 'Марк', age: 18}
];

//получение элементов из DOM

let showAdultsButton = document.getElementById('showAdults');
let showChildrenButton = document.getElementById('showChildren');
let userList = document.getElementById('userList');
let showAllButton = document.getElementById('showAll');
let showSortedByAgeButton = document.getElementById('showSortedByAge');



// функция для отображения списка людей

function showUsers(userArray) {
    //сначала очищаем список
    userList.innerHTML = '';
    userArray.forEach(user => {
            //появляется новый тег li
        const listItem = document.createElement('li');
          //в него кладем данные
        listItem.textContent = `${user.name}, ${user.age} лет, ${user.status}` ;
               //указываем, что каждый ли выводится в конец родительского блока (ul)
        userList.appendChild(listItem);
    });
}


//обработчик события вывода взрослых
showAdultsButton.addEventListener('click', () => {
    const adults = user.filter(user => user.age >= 18);
    const adultsWithStatus = adults.map(user => ({
        ...user,
    status: 'Взрослый'
}));
    showUsers(adultsWithStatus);
});


//обработчик события вывода детей
showChildrenButton.addEventListener('click', () => {
    const children = user.filter(user => user.age < 18);
    const СhildrensWithStatus = children.map(user => ({
        ...user,
    status: 'Ребенок'
}));
    showUsers(СhildrensWithStatus);

})


// Добавьте третью кнопку, которая будет показывать всех людей из массива.
showAllButton.addEventListener('click', () => {
    //const allUsers = user;
const allUsersWithStatus = user.map(user => ({
    ...user,
    status: user.age >= 18 ? 'Взрослый' : 'Ребенок'
}));
    showUsers(allUsersWithStatus); 
})


// Измените вывод списка так, чтобы он включал дополнительное поле "Статус" (например, "Взрослый" или "Ребенок").
//добавила во всех списках отдельно метод присваивания статуса, но лучше будет,наверное, один раз сделать массив со статусами и уже с ним работать?

// (задача со звездочкой) Добавить возможность сортировать список по возрасту по нажатию на дополнительную кнопку.
showSortedByAgeButton.addEventListener('click', () => {
    const allUsersWithStatus = user.map(user => ({
    ...user,
    status: user.age >= 18 ? 'Взрослый' : 'Ребенок'
}));
    const sortedByAge = allUsersWithStatus.sort((a,b) => a.age - b.age); 
    showUsers(sortedByAge);
})