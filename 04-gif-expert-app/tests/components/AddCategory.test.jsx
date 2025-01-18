import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from "../../src/components/AddCategory";

describe('Pruebas en <AddCategory />', () => {

    test('debe de cambiar el valor de la caja de texto', () => {
        render(<AddCategory onNewCategory={() => { }} />);
        const input = screen.getByRole('textbox');

        fireEvent.input(input, { target: { value: 'Sasuke' } });

        expect(input.value).toBe('Sasuke');

        // screen.debug();
    });

    // test('debe de llamar onNewCategory si el input tiene un valor', () => {

    // });





});