/*
 * Необходимо покрыть все возможные
 * и невозможные кейсы. Например,
 * convertBytesToHuman(-1) === false,
 * convertBytesToHuman(-1) !== '1 B',
 * convertBytesToHuman('string') === false
 * convertBytesToHuman(5) === '5 B'
 */

import convertBytesToHuman from './convertBytesToHuman';

test('Возвращает false для неправильного типа данных', () => {
  expect(convertBytesToHuman(-1)).toBe(false)
});

test('Возвращает корректное значение для чисел', () => {
  expect(convertBytesToHuman(7777)).toBe('7.59 KB')
});

test('Возвращает false для неправильного типа данных', () => {
  expect(convertBytesToHuman('sdsdsdsd')).toBe(false)
});

test('Возвращает целое число для типа данных', () => {
  expect(convertBytesToHuman(1024)).toBe('1 KB')
});