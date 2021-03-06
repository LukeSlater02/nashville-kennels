import React from "react"
import "./Animal.css"
import { Link } from "react-router-dom"

export const AnimalCard = ({ animal, discharge }) => {
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
        <p>Assigned To: {animal.employee.name}</p>
        <p>Date Admitted: {animal.date}</p>
      </div>
      <button type="button" onClick={() => discharge(animal)}>Discharge</button>
      <Link to={`/animals/animal__${animal.id}`}>
        <button>Details</button>
      </Link>
      <Link to={`/animals/${animal.id}/edit`}>
        <button>Edit</button>
      </Link>
    </div>
  );
}

