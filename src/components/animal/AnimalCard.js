import React from "react"
import "./Animal.css"
import { Link } from "react-router-dom"

export const AnimalCard = ({ animal, deleteAnimal }) => {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
              <img src={'/images/dog.svg'} alt="My Dog" />
            </picture>
          <h3>Name: <span className="card-petname">
            {animal.name}
          </span></h3>
          <p>Breed: {animal.breed}</p>
          <p>Location: {animal.location.address}, {animal.location.name}</p>
          <p>Owner: {animal.customer.name}</p>
        </div>
        <button type="button" onClick={() => deleteAnimal(animal.id)}>Discharge</button>
        <Link to={`/animals/${animal.id}`}>
        <button>Details</button>
        </Link>
      </div>
    );
}

