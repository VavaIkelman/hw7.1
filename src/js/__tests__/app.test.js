import Validator from '../app';

const validator = new Validator();

test('successful authorization', () => {
  const received = validator.validateUserName('vava_ikelman');// буквы и нижнее подчеркивание
  expect(received).toBe(true);
});

test('successful authorization', () => {
  const received = validator.validateUserName('vava-ikelman');// буквы и тире
  expect(received).toBe(true);
});

test('successful authorization', () => {
  const received = validator.validateUserName('va-va_1k3lman');// буквы, тире, цифры и нижнее подчеркивание
  expect(received).toBe(true);
});

test('successful authorization', () => {
  const received = validator.validateUserName('vava123ikelman');// цифры в теле name
  expect(received).toBe(true);
});
test('successful authorization', () => {
  const received = validator.validateUserName('va-va_123ikelman');// буквы, тире, нижнее подчеркивание, цифры в теле имени
  expect(received).toBe(true);
});

test('unsuccessful authorization', () => {
  const received = validator.validateUserName('123vavaikelman');// цифры в начале никнейма
  expect(received).toBe(false);
});

test('unsuccessful authorization', () => {
  const received = validator.validateUserName('vavaikelman123');// цифры в конце никнейма
  expect(received).toBe(false);
});

test('unsuccessful authorization', () => {
  const received = validator.validateUserName('vava1234ikelman');// более трех цифр подряд
  expect(received).toBe(false);
});

test('unsuccessful authorization', () => {
  const received = validator.validateUserName('_vavaikelman');// начинается с нижнего подчеркивания
  expect(received).toBe(false);
});

test('unsuccessful authorization', () => {
  const received = validator.validateUserName('-vavaikelman');// начинается с тире
  expect(received).toBe(false);
});
