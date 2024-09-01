import { usContext } from "../../src/base-pruebas/06-deses-obj";

describe('Pruebas en 06-deses-obj', () => {

    test('Debe devolver clave, edad, latlng', () => {

        const clave = 'usuario';
        const edad = 34;

        const testUsContext = {
            nombreClave: clave,
            anios: edad,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        }

        const context = usContext({ clave, edad });

        expect(context).toEqual(testUsContext);
    });
});