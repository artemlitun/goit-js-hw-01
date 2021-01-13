const credits = 23580;
const pricePerDroid = 3000;

let promptInput = prompt("Веддите количество дроидов");

let totalPrice;

if (promptInput === null) {
  console.log("Отменено пользователем!");
} else {
  let num = Number(promptInput);
  totalPrice = pricePerDroid * num;

  if (totalPrice > credits) {
    alert("Недостаточно средств на счету!");
  } else {
    let yourCredits = credits - totalPrice;
    console.log(
      `'Вы купили ${promptInput} дроидов, на счету осталось ${yourCredits} кредитов.`
    );
  }
}
