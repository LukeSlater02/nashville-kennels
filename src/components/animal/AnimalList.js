import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
//import the components we will need
import { AnimalCard } from './AnimalCard';
import { getAllAnimals, deleteAnimal } from '../../modules/AnimalManager';
import { updateAnimal } from '../../modules/AnimalManager';

export const AnimalList = () => {
  // The initial state is an empty array
  const [animals, setAnimals] = useState([]);
  const navigate = useNavigate();

  const getAnimals = () => {
    // After the data comes back from the API, we
    // use the setAnimals function to update state
    return getAllAnimals().then(animalsFromAPI => {
      let filteredAnimals = animalsFromAPI.filter(animal => {
        return animal.isDischarged === undefined
      })
      setAnimals(filteredAnimals)
    });
  };

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();

  today = yyyy + "-" + mm + "-" + dd
  
  const DischargeAnimal = ani => {
    ani.isDischarged = true
    ani.dischargedDate = today

    updateAnimal(ani).then(() => getAnimals())
  }


  // got the animals from the API on the component's first render
  useEffect(() => {
    getAnimals();
  }, []);

  // Finally we use .map() to "loop over" the animals array to show a list of animal cards
  return <> 
    <section className="section-content">
  <button type="button"
      className="btn"
      onClick={() => {navigate("/animals/create")}}>
      Admit Animal
  </button>
</section>

    <div className="container-cards">
      {animals.map(animal => <AnimalCard 
      animal={animal} 
      key={animal.id}
      discharge={DischargeAnimal}
      />)}
    </div>
  </>
};