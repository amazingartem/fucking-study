/* Замените код Function Expression стрелочной функцией:

 function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Вы согласны?",
  function() { alert("Вы согласились."); },
  function() { alert("Вы отменили выполнение."); }
); */

let ask = confirm("Вы согласны?");
let message = ask
  ? () => alert("Вы согласились.")
  : () => alert("Вы отменили выполнение.");
message();

//Я написал чуть по другому, чем в ответе, но у меня тоже работает.
