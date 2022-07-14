import { indication, sortPersInfo } from "./index";

test("больше 50 - healthy", () => {
  const input = {
    name: "Маг",
    health: 90,
  };
  const expected = "healthy";
  const received = indication(input);
  expect(received).toBe(expected);
});

test("меньше 15 - critical", () => {
  const input = {
    name: "Маг",
    health: 10,
  };
  const expected = "critical";
  const received = indication(input);
  expect(received).toBe(expected);
});

test("от 15 до 50 - wounded", () => {
  const input = {
    name: "Маг",
    health: 38,
  };
  const expected = "wounded";
  const received = indication(input);
  expect(received).toBe(expected);
});

test("сортировка массива по убыванию", () => {
  const input = [
    { name: "мечник", health: 10 },
    { name: "маг", health: 100 },
    { name: "лучник", health: 80 },
  ];
  const expected = [
    { name: "маг", health: 100 },
    { name: "лучник", health: 80 },
    { name: "мечник", health: 10 },
  ];

  const received = sortPersInfo(input);
  expect(received).toEqual(expected);
});
