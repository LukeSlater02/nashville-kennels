import React from "react"
import "./Animal.css"

export const AnimalCard = ({animal}) => (
    <section className="animal" id={`animal__${animal.id}`}>
        <h3 className="animal__name">{animal.name}</h3>
        <div className="animal__breed">
            <p>Breed: {animal.breed}</p>
            <p>Location: {animal.location.address}, {animal.location.name}</p>
            <p>Owner: {animal.customer.name}</p>
            </div>
    </section>
)