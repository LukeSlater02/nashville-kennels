import React, { useState, useEffect } from 'react';
import { getAllAnimals } from '../../modules/AnimalManager';
import { DischargedCard } from './DischargedCard';

export const DischargedList = () => {
  // The initial state is an empty array
  const [animals, setAnimals] = useState([]);
  console.log("HELLO");
  const getAnimals = () => {
    // After the data comes back from the API, we
    // use the setAnimals function to update state
    return getAllAnimals().then(animalsFromAPI => {
        let filteredAnimals = animalsFromAPI.filter(animal => {
        return animal.isDischarged === true
      })
      setAnimals(filteredAnimals)
    });
  };

  // got the animals from the API on the component's first render
  useEffect(() => {
    getAnimals();
  }, []);

  // Finally we use .map() to "loop over" the animals array to show a list of animal cards
  return <>
    <div className="container-cards">
      {animals.map(animal => <DischargedCard 
      animal={animal} 
      key={animal.id}
      />)}
    </div>
  </>
};