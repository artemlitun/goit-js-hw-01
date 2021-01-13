const ADMIN_PASSWORD = "password";
const promptMessage = prompt("Введите пароль");

let message;

if (promptMessage === null) {
  message = "Отменено пользователем!";
  alert(message);
} else if (ADMIN_PASSWORD === promptMessage) {
  message = "Добро пожаловать!";
  alert(message);
} else {
  message = "Доступ запрещен, неверный пароль!";
  alert(message);
}
