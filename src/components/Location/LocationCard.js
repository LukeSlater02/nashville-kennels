import React from "react";
import "./Location.css"
import { Link } from "react-router-dom";

export const LocationCard = ({location, deleteLocation}) => (
    <section className="location">
        <h3 className="locaiton__name">{location.name}</h3>
        <div className="location__info">{location.address}</div>
        <button onClick={() => deleteLocation(location.id)}>Destroy</button>

        <Link to={`/locations/${location.id}`}>
        <button>Details</button>
        </Link>
    </section>
)