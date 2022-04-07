import React, { useEffect, useState } from "react";
import { LocationCard } from "./LocationCard";
import { GetAllLocations, deleteLocation } from "../../modules/LocationManager";

export const LocationList = () => {
    const [locations, setLocation] = useState([])

    const getLocations = () => {
        GetAllLocations().then(data => setLocation(data))
    }

    const handleDelete = (id) => {
        deleteLocation(id)
        .then(() => GetAllLocations().then(setLocation))
    }

    useEffect(() => {
        getLocations()
    }, [])

    return (
        <div className="container-cards">
            {locations.map(location => <LocationCard 
            location={location} 
            key={location.id}
            deleteLocation={handleDelete}
            />)}
        </div>
    )
}