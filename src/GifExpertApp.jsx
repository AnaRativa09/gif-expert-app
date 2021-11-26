import React, { useState } from 'react';

import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid'

const GifExpertApp = ({ defaultCategories = [] }) => {

  // const [categories, setCategories] = useState(['One Punch']);
  const [categories, setCategories] = useState(defaultCategories);

  /* const handleAdd = () => {
      setCategories([...categories, 'HunterXHunter']);
      setCategories((cats) => [...cats, 'HunterXHunter']); // Callback para cuando no accedemos al estado directamente
    }*/

  return (
    <>
      <h2>Gif Expert App</h2>
      <AddCategory setCategories={setCategories}/>
      <hr />

      <ol>
        {
          categories.map((category) => (
            <GifGrid
              key={category}
              category={category}
            />
          ))
        }
      </ol>
    </>
  )
}

export default GifExpertApp;