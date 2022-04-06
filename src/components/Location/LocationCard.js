import React from "react";
import "./Location.css"

export const LocationCard = ({location}) => (
    <section className="location">
        <h3 className="locaiton__name">{location.name}</h3>
        <div className="location__info">{location.address}</div>
    </section>
)