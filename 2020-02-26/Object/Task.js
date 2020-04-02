/* let deepHole = {
  "disappearing item 1": "Time",
  "disappearing item 2": "Money",
  "disappearing item 3": "My phone battery"
};

for (let key in deepHole) {
  const keyname = key;
  const value = deepHole[key];
  console.log(`${keyname}: ${value}`);
}
 */

/* Привет, object
важность: 5
Напишите код, выполнив задание из каждого пункта отдельной строкой:

Создайте пустой объект user.
Добавьте свойство name со значением John.
Добавьте свойство surname со значением Smith.
Измените значение свойства name на Pete.
Удалите свойство name из объекта.

let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name; 
С такой легкой хуитой больше даже не подходите ко мне, я чувствую power  */

/* Проверка на пустоту
важность: 5
Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.

Должно работать так:

let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false

Я пытался это сделать так:

function isEmpty(obj) {
    if (obj) {
        return true;
} else if (!isEmpty2) {
return false
}

}
 let schedule = {};
 obj = schedule

function isEmpty2(obj) {
    for (let key in obj) {
    }
      return true;
}
//но не понял как проверить условие - если объект имеет свойства.
//алсо ответ из учебника понял, он лаконичен, как я в 9-ом классе. */

/* Объекты-константы?
важность: 5
Можно ли изменить объект, объявленный с помощью const? Как вы думаете?

const user = {
  name: "John"
};// Саму переменную user изменить нельзя, а всё что лежит внутри объекта - можно

// это будет работать?
user.name = "Pete"; // да, будет. */

/* Сумма свойств объекта
важность: 5
У нас есть объект, в котором хранятся зарплаты нашей команды:

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.

Если объект salaries пуст, то результат должен быть 0.

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }

function getsalariessum(salaries) {
    let sum = 0
    for (let key in salaries) {
    sum += salaries[key]
    }
    return sum
}

getsalariessum(salaries)
//сделал через функцию методом проб и ошибок, но сам допедрил 
//(скорее всего в моем варианте не выполнено условие - сохраните результат в переменной sum) 
//Посмотрел ответ и там, конечно, без функции это сдлано красиво и быстро.  */

/* Умножаем все числовые свойства на 2
важность: 3
Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.

Например:

// до вызова функции
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

// после вызова функции
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};
Обратите внимание, что multiplyNumeric не нужно ничего возвращать. Следует напрямую изменять объект.

P.S. Используйте typeof для проверки, что значение свойства числовое. */

let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

function multiplyNumeric(menu) {
  for (let key in menu) {
    if (typeof menu[key] === "number") {
      menu[key] *= 2;
      console.log(menu[key]);
    } else {
      console.log(menu[key]);
    }
  }
}

multiplyNumeric(menu);

\\я тока не понял почему в ответе к заданию такая функция:

/* function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] == 'number') {
      obj[key] *= 2;
    }
  }
} */
//Ведь она не будет тогда выводить ключ title
//Или смысл в том, чтобы привести функцию, а вызвать её потом отдельно?

let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] == 'number') {
      obj[key] *= 2;
    }
  }
}


multiplyNumeric(menu)

for (key in menu)
alert(menu[key])
