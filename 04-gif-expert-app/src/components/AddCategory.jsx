import { useState } from "react";


export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('Sasuke');

    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();

        // que no se haga intro con valor menores a 2 caracteres,sin contar espacios
        if (inputValue.trim().length <= 1) return;

        // setCategories(categories => [inputValue, ...categories]);
        onNewCategory(inputValue.trim());
        // Borra despues de ejecutar
        setInputValue('');
    }

    return (

        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>

    )
}
