import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";

describe('Pruebas en 08-imp-exp', () => {

    test('getHeroeById debe de retornar un heroe por ID', () => {
        const id = 1;
        const hero = getHeroeById(id);
        expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' })
    });

    test('getHeroeById debe de retornar undefined si no existe el ID', () => {
        const id = 100;
        const hero = getHeroeById(id);
        expect(hero).toBeFalsy();
    });

    test('getHeroeById debe de retornar un arreglo con el heroes de DC', () => {
        const heroeDC = getHeroesByOwner('DC');
        const nHeroDC = heroeDC.length;
        expect(nHeroDC).toEqual(3);
    });

    test('getHeroeById debe de retornar un arreglo con el heroes de Marvel', () => {
        const heroeDC = getHeroesByOwner('Marvel');
        const nHeroDC = heroeDC.length;
        expect(nHeroDC).toEqual(2);
    });

})