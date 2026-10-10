

let secretNumber = 7;

for (let i = 1; i <= 3; i++) {

  let uNumber = Number(prompt("Угадай число от 1 до 10:"));

  if (uNumber === secretNumber) {
    alert("Правильно");
    break;

  } else if (i === 3) {
    alert("Попытки закончились");

  } else if (uNumber < secretNumber) {
    alert("Число больше");

  } else {
    alert("Число меньше");
    
  }
}



