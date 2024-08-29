import  heroes , {owners} from '../data/heroes';

// console.log(owners);

// console.log(heroes);
// console.table(heroes);

export const getHeroeById = (id) => heroes.find((heroes) => heroes.id === id);

// console.log(getHeroeById(2));


// Filter()
export const getHeroesByOwner = (owner) => heroes.filter((heroes) => heroes.owner === owner);

// console.log(getHeroesByOwner('Marvel'));