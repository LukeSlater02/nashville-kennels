import React from "react"
import "./Kennel.css"
import { AnimalCard } from "./animal/AnimalCard"
import { LocationCard } from "./Location/Location"
import { CustomerCard } from "./Customer/Customer"
import { EmployeeCard } from "./Employee/Employee"
import { PropsAndState } from "./PropsAndState"

export const Kennel = () => (
    <>
        <PropsAndState yourName={"Luke"} myCohort="55"></PropsAndState>
        <h2>Nashville Kennels</h2>
        <small>Loving care when you're not there.</small>
        <address>
            <div>Visit Us at the Nashville North Location</div>
            <div>500 Puppy Way</div>
        </address> 
       
       <h2>Animals</h2>
       <AnimalCard />
       <AnimalCard />
       <AnimalCard />

       <h2>Locations</h2>
       <LocationCard />
       <LocationCard />

       <h2>Customers</h2>
       <CustomerCard />
       <CustomerCard />
       <CustomerCard />
       <CustomerCard />

       <h2>Employees</h2>
       <EmployeeCard />
       <EmployeeCard/>
       <EmployeeCard/>
    </>
)