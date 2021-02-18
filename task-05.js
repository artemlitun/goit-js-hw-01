let promptInput = prompt("Укажите страну доставки товара");
let newString;
let cost = 0;

if (promptInput === null) {
  alert("Отменено пользователем!");
} else {
  newString = promptInput[0].toUpperCase() + promptInput.slice(1).toLowerCase();

  switch (newString) {
    case "Китай":
      cost = 100;
      break;
    case "Чили":
      cost = 250;
      break;
    case "Австралия":
      cost = 170;

      break;
    case "Индия":
      cost = 80;
      break;
    case "Ямайка":
      cost = 120;
      break;
    default:
      alert("В вашей стране доставка не доступна");
  }
  if (cost > 0) {
    alert(`"Доставка в ${newString} будет стоить ${cost} кредитов"`);
  }
}
