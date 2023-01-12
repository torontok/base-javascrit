import superHeroes from './data/heroes';

const getHeroes = (id) => superHeroes.find((item) => item.id === id);

console.log(getHeroes(5));

export const filterHeroesByOwners = (owner) => superHeroes.filter((hero)=> hero.id===owner);
console.log(filterHeroesByOwners("Marvel"));