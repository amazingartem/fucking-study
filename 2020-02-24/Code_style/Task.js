Задание
/* Какие недостатки вы видите в стиле написания кода этого примера?

function pow(x,n)
{
  let result=1;
  for(let i=0;i<n;i++) {result*=x;}
  return result;
}

let x=prompt("x?",''), n=prompt("n?",'')
if (n<=0)
{
  alert(`Степень ${n} не поддерживается, введите целую степень, большую 0`);
}
else
{
  alert(pow(x,n))
} */

function pow(x, n) {
  let result = 1;

   for (let i = 0 ; i < n ; i++) {
       result *= x; 
    } // не стал вставлять пустую строчку после посолькуо посчитал, что return относится к функции
    return result;
}

let x = prompt("x?", ''),
n = prompt("n?", ''); // я сделал чере запятую

if ( n <= 0) { // в примере было <=, а в ответе просто <
  alert(`Степень ${n} не поддерживается, 
  введите целую степень, большую 0`); //не сделал тут 2 пробела в начале строки
} else {
  alert( pow(x,n) );
}

Это ответ из учебника
/* function pow(x, n) {
    let result = 1;
  
    for (let i = 0; i < n; i++) {
      result *= x;
    }
  
    return result;
  }
  
  let x = prompt("x?", "");
  let n = prompt("n?", "");
  
  if (n < 0) {
    alert(`Степень ${n} не поддерживается,
      введите целую степень, большую 0`);
  } else {
    alert( pow(x, n) );
  } */