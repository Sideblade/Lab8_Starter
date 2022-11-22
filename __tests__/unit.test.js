// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

test('Check isPhoneNumber', () => {
    expect(functions.isPhoneNumber("(858)375-3852")).toBe(true);
});
test('Check isPhoneNumber', () => {
  expect(functions.isPhoneNumber("8583753852")).toBe(true);
});
test('Check isPhoneNumber', () => {
    expect(functions.isPhoneNumber()).toBe(true);
});
test('Check isPhoneNumber', () => {
    expect(functions.isPhoneNumber("(adw)-231-2134")).toBe(true);
});

test('Check isEmail', () => {
    expect(functions.isEmail("dajdwkl@gmail.com")).toBe(true);
});
test('Check isEmail', () => {
    expect(functions.isEmail()).toBe(true);
});
test('Check isEmail', () => {
    expect(functions.isEmail("dajdwklgmail.com")).toBe(true);
});
test('Check isEmail', () => {
    expect(functions.isEmail("dajdwkl@ahgahwa.net")).toBe(true);
});

test('Check isStrongPassword', () => {
    expect(functions.isStrongPassword("dad242424D")).toBe(true);
});
test('Check isStrongPassword', () => {
    expect(functions.isStrongPassword("DWADWADWADAWDWDAWDWA")).toBe(true);
});
test('Check isStrongPassword', () => {
    expect(functions.isStrongPassword("413adwadwad")).toBe(true);
});
test('Check isStrongPassword', () => {
    expect(functions.isStrongPassword("DWDAW")).toBe(true);
});

test('Check isDate', () => {
    expect(functions.isDate("11/21/2022")).toBe(true);
});
test('Check isDate', () => {
    expect(functions.isDate()).toBe(true);
});
test('Check isDate', () => {
    expect(functions.isDate("11/212022")).toBe(true);
});
test('Check isDate', () => {
    expect(functions.isDate("1/1/2222")).toBe(true);
});

test('Check isHexColor', () => {
    expect(functions.isHexColor("#ffffff")).toBe(true);
});
test('Check isHexColor', () => {
    expect(functions.isHexColor()).toBe(true);
});
test('Check isHexColor', () => {
    expect(functions.isHexColor("#fffffj")).toBe(true);
});
test('Check isHexColor', () => {
    expect(functions.isHexColor("#000")).toBe(true);
});

  