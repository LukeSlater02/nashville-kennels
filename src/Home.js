import { Checkbox, useForkRef } from "@mui/material";
import React, { useEffect, useState } from "react";
import { PropsAndState } from "./components/PropsAndState";
import FormControlLabel from '@mui/material/FormControlLabel';
import { red } from '@mui/material/colors'
import { AnimalSpotlight } from "./components/animal/AnimalSpotlight";
import { getAnimalById, getRandomId } from "./modules/AnimalManager";

export const Home = () => {
    const [spotlightId, setSpotlightId] = useState(0)

    const refreshSpotlightAnimal = () => {
        getRandomId().then(setSpotlightId)
    }

    useEffect(() => {
        refreshSpotlightAnimal()
    }, [])

    return (
        <>
            <h2>Nashville Kennels</h2>
            <small>Loving care when you're not there.</small>

            <address>
                <div>Visit Us at the Nashville North Location</div>
                <div>500 Puppy Way</div>
            </address>
            <PropsAndState yourName={"Luke"} myCohort={"55"} />
            <FormControlLabel control={<Checkbox sx={{
                color: "black",
                '&.Mui-checked': {
                    color: red[600],
                }
            }} />} label={"Click me coward, you wont"} />
            <h1>Animal Spotlight</h1>
            <button onClick={refreshSpotlightAnimal}>Reload &#x27f3;</button>
            {
                spotlightId && <AnimalSpotlight animalId={spotlightId} />
            }
        </>
    )
}