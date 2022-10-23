/*
You are given a non-empty list of integers (X).

For this task, you should return a list consisting of
only the non-unique elements in this list.

To do so you will need to remove all unique elements
(elements which are contained in a given list only once).

When solving this task, do not change the order of the list.

Example:

input (array of integers): [1, 2, 3, 1, 3]
output (iterable of integers): [1, 3, 1, 3]

1 and 3 are non-unique elements.

More examples:

nonUniqueElements([1, 2, 3, 1, 3]) == [1, 3, 1, 3]
nonUniqueElements([1, 2, 3, 4, 5]) == []
nonUniqueElements([5, 5, 5, 5, 5]) == [5, 5, 5, 5, 5]
nonUniqueElements([10, 9, 10, 10, 9, 8]) == [10, 9, 10, 10, 9]
 */

/*
Вам дан непустой список целых чисел (X).

Для этой задачи вы должны вернуть список, состоящий из
только неуникальные элементы в этом списке.

Для этого вам нужно будет удалить все уникальные элементы.
(элементы, которые содержатся в данном списке только один раз).

При решении этой задачи не меняйте порядок списка.

Пример:

ввод (массив целых чисел): [1, 2, 3, 1, 3]
вывод (итерируемый целыми числами): [1, 3, 1, 3]

1 и 3 — неуникальные элементы.

Еще примеры:

неуникальные элементы ([1, 2, 3, 1, 3]) == [1, 3, 1, 3]
неуникальные элементы ([1, 2, 3, 4, 5]) == []
неуникальные элементы ([5, 5, 5, 5, 5]) == [5, 5, 5, 5, 5]
неуникальные элементы ([10, 9, 10, 10, 9, 8]) == [10, 9, 10, 10, 9]
  */


export default function nonUniqueElements(data) {
  let num = Math.max.apply(null ,data);
  let list = Array(num).fill(0)
  
  data.forEach(function(elem) {
    list[elem - 1] += 1;
  });
  
  let resul = []
  data.forEach(function(elem){
    if(list[elem - 1] > 1) {
      resul.push(elem)
    }
  });
  return resul
}

