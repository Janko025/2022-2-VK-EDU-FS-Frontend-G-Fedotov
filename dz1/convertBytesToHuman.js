/*
 * В этом задании надо разработать функцию
 * `convertBytesToHuman`. Эта функция  должна принимать
 * аргумент `bytes` только числового типа.
 * На выходе функция должна отдать
 * человекопонятную строку, которая будет
 * отражать размер файла. Примеры использования:
 * `convertBytesToHuman(1024) === '1 KB';`
 * `convertBytesToHuman(123123123) === '117.42 MB';`
 * Необходимо предусмотреть защиту от
 * передачи аргументов неправильного типа
 * и класса (например, отрицательные числа)
 */


export default function convertBytesToHuman(bytes) {
  if(typeof(bytes) != 'number' || bytes < 0) {
    return false
  };
  let resul
  let razmer = ['KB', 'MB', 'GB', 'TB']
  let indexRazmera = 0

  if (bytes < 1024) {
    resul = bytes + ' ' + 'B'
  }
  else{
    while (bytes >= 1024) {
      bytes /= 1024;
      indexRazmera += 1;
    }
    if(bytes % 1 == 0) {
      resul = bytes + ' ' + razmer[indexRazmera - 1]   
    }
    else {
      resul = bytes.toFixed(2) + ' ' +  razmer[indexRazmera - 1]
    }
  }
  return resul
}


