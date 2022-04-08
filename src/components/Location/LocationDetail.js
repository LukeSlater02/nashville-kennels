import { deleteLocation, getLocationById } from "../../modules/LocationManager";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const LocationDetail = () => {
    const [location, setLocation] = useState({})

    const {locationId} = useParams()

    const navigate = useNavigate()

    useEffect(() => {
        getLocationById(locationId)
        .then(location => {
            console.log(location);
            setLocation(location)
        })
    }, [locationId])

    const handleDelete = () => {
        deleteLocation(locationId).then(() => {
          navigate("/locations")
        })
      }

    return (
        <section className="location">
            <h3>{location.name}</h3>
            <div>{location.address}</div>
            <button onClick={handleDelete}>Delete</button>
        </section>
    )
}