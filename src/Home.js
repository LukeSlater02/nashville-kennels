import { Checkbox } from "@mui/material";
import React from "react";
import { PropsAndState } from "./components/PropsAndState";
import FormControlLabel from '@mui/material/FormControlLabel';
import { red } from '@mui/material/colors'
export const Home = () => (
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
        }}/>} label={"Click me coward, you wont"} />
    </>
)