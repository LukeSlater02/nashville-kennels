import React, { useState, useEffect } from 'react';
//import the components we will need
import { AnimalCard } from './AnimalCard';
import { getAllAnimals, deleteAnimal } from '../../modules/AnimalManager';

export const AnimalList = () => {
  // The initial state is an empty array
  const [animals, setAnimals] = useState([]);

  const getAnimals = () => {
    // After the data comes back from the API, we
    // use the setAnimals function to update state
    return getAllAnimals('?_expand=location&_expand=customer').then(animalsFromAPI => {
      setAnimals(animalsFromAPI)
    });
  };
  
  const handleDeleteAnimal = id => {
    deleteAnimal(id)
    .then(() => getAllAnimals('?_expand=location&_expand=customer').then(setAnimals));
  };

  // got the animals from the API on the component's first render
  useEffect(() => {
    getAnimals();
  }, []);

  // Finally we use .map() to "loop over" the animals array to show a list of animal cards
  return (
    <div className="container-cards">
      {animals.map(animal => <AnimalCard 
      animal={animal} 
      key={animal.id}
      deleteAnimal={handleDeleteAnimal}
      />)}
    </div>
  );
};