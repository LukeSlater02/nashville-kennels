import React, { useEffect, useState } from "react";
import { LocationCard } from "./LocationCard";
import { GetAllLocations } from "../../modules/LocationManager";

export const LocationList = () => {
    const [locations, setLocation] = useState([])

    const getLocations = () => {
        GetAllLocations().then(data => setLocation(data))
    }

    useEffect(() => {
        getLocations()
    }, [])

    return (
        <div className="container-cards">
            {locations.map(location => <LocationCard location={location} key={location.id}/>)}
        </div>
    )
}