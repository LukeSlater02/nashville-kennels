import React, { useState, useEffect } from 'react';
import { deleteAnimal, getAnimalById } from '../../modules/AnimalManager';
import './AnimalDetail.css';
import { useParams, useNavigate, Link } from "react-router-dom"

export const AnimalDetail = () => {
  const [animal, setAnimal] = useState({});
  const [isLoading, setIsLoading] = useState(true)

  const {animalId} = useParams();
  const navigate = useNavigate();

  console.log("USE PARAMS:",animalId)

  useEffect(() => {
    //getAnimalById(id) from AnimalManager and hang on to the data; put it into state
    console.log("useEffect", animalId)
    getAnimalById(animalId)
      .then(animal => {
        setAnimal(animal);
      });
      setIsLoading(false)
  }, [animalId]);

  const handleDelete = () => {
    setIsLoading(true)
    deleteAnimal(animalId).then(() => {
      navigate("/animals")
    })
  }

  return (
    <section className="animal">
      {console.log(animal)}
      <h3 className="animal__name">{animal.name}</h3>
      <div className="animal__breed">{animal.breed}</div>
      <div className="animal__location">Location: {animal.location?.name}</div>
      <div className="animal__owner">Customer: {animal.customer?.name}</div>
      <button onClick={handleDelete}>Delete</button>
    </section>
  );
}