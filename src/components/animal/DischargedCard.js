import React from "react"
import "./Animal.css"

export const DischargedCard = ({ animal }) => {
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
        <p>Date Discharged: {animal.dischargedDate}</p>
      </div>
    </div>
  );
}