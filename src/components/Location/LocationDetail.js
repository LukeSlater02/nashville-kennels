import { getLocationById } from "../../modules/LocationManager";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const LocationDetail = () => {
    const [location, setLocation] = useState({})

    const {locationId} = useParams()

    useEffect(() => {
        getLocationById(locationId)
        .then(location => {
            console.log(location);
            setLocation(location)
        })
    }, [locationId])

    return (
        <section className="location">
            <h3>{location.name}</h3>
            <div>{location.address}</div>
        </section>
    )
}