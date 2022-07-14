const pers = {
  name: "Маг",
  health: 90,
};

const indication = (pers) =>
  pers.health > 50 ? "healthy" : pers.health < 15 ? "critical" : "wounded";

const persInfo = [
  { name: "мечник", health: 10 },
  { name: "маг", health: 100 },
  { name: "лучник", health: 80 },
];

const sortPersInfo = (array) =>
  array.sort((a, b) =>
    a.health > b.health ? -1 : a.health < b.health ? +1 : 0
  );

export { sortPersInfo, indication };
