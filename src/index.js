const indication = (pers) => (pers.health > 50 ? 'healthy' : pers.health < 15 ? 'critical' : 'wounded');

const sortingFunction = (a, b) => a.health > b.health ? -1 : a.health < b.health ? +1 : 0;
const sortPersInfo = (array) => array.sort(sortingFunction);

export { sortPersInfo, indication };
