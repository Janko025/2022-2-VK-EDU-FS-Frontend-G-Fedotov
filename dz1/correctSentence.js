/*
For the input of your function, you will be given one sentence.
You have to return a corrected version,
that starts with a capital letter and ends with a period (dot).

Example:

input (string): "hey, friend"
output (string): "Hey, friend."

Updated first 'h' to 'H', added '.'.

More examples:

correctSentence("greetings, friends") == "Greetings, friends."
correctSentence("Greetings, friends") == "Greetings, friends."
correctSentence("Greetings, friends.") == "Greetings, friends."
 */

/*
Для ввода вашей функции вам будет дано одно предложение.
Вы должны вернуть исправленную версию,
которое начинается с заглавной буквы и заканчивается точкой (точкой).

Пример:

ввод (строка): "привет, друг"
вывод (строка): "Привет, друг."

Обновлен первый «h» до «H», добавлено «.».

Еще примеры:

correctSentence("Приветствую, друзья") == "Приветствую, друзья."
correctSentence("Приветствую вас, друзья") == "Приветствую вас, друзья."
correctSentence("Приветствую вас, друзья.") == "Приветствую вас, друзья."
   */


export default function correctSentence(text) {
  let resulText = text.charAt(0).toUpperCase() + text.slice(1)
  if (resulText[resulText.length - 1] != '.') {
    return resulText + '.'
  }
  else {
    return resulText
  }
}

