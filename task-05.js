let promptInput = prompt("Укажите страну доставки товара");
let newString =
  promptInput[0].toUpperCase() + promptInput.slice(1).toLowerCase();

let cost = 0;

switch (newString) {
  case "Китай":
    cost = 100;
    alert(`"Доставка в ${newString} будет стоить ${cost} кредитов"`);
    break;
  case "Чили":
    cost = 250;
    alert(`"Доставка в ${newString} будет стоить ${cost} кредитов"`);
    break;
  case "Австралия":
    cost = 170;
    alert(`"Доставка в ${newString} будет стоить ${cost} кредитов"`);

    break;
  case "Индия":
    cost = 80;
    alert(`"Доставка в ${newString} будет стоить ${cost} кредитов"`);

    break;
  case "Ямайка":
    cost = 120;
    alert(`"Доставка в ${newString} будет стоить ${cost} кредитов"`);

    break;
  default:
    alert("В вашей стране доставка не доступна");
}
