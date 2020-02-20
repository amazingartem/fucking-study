/*<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
  </head>
  <body>
    <script>
      "use strict";
      let login = prompt("Введите ваш логин", "");
      let message =
        login == "Сотрудник"
          ? "Привет"
          : login == "Директор"
          ? "Здравствуйте"
          : "Нет логина";
      alert(message);
    </script>
  </body>
</html>*/

let login = prompt("Введите ваш логин", "");

let welcome;

if (login == "Сотрудник") {
  welcome = function() {
    alert("Привет!");
  };
} else if (login == "Директор") {
  welcome = function() {
    alert("Здравствуйте!");
  };
} else {
  welcome = function() {
    alert("Нет логина");
  };
}

welcome();
