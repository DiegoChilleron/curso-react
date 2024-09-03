import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['Naruto']);

  const onAddCategory = (newCategory) => {

    // Si ya esta en el listado, no lo incluye
    if (categories.includes(newCategory)) return;


    // categories.push(newCategory);
    setCategories([newCategory, ...categories]);
    // setCategories( cat => [...cat, 'Metal Gear']);
  }

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory
        onNewCategory={onAddCategory}
      />

      {
        categories.map((category) => (
          <GifGrid
            key={category}
            category={category}
          />
        ))
      }


    </>
  )
}
