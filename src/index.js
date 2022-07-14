const pers = {
  name: "Маг",
  health: 90,
};

const indication = (pers) =>
  pers.health > 50 ? "healthy" : pers.health < 15 ? "critical" : "wounded";

export default indication