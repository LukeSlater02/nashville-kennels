import React from "react"
import { Route, Routes } from "react-router-dom"
import { Home } from "../Home.js"
import { AnimalList } from './animal/AnimalList'
import { CustomerList } from "./Customer/CustomerList.js"
import { LocationList } from "./Location/LocationList.js"
import { EmployeeList } from "./Employee/EmployeeList.js"

export const ApplicationViews = () => {
    return (
        <>
            <Routes>
                {/* Render the location list when http://localhost:3000/ */}
                <Route exact path="/" element={<Home />} />

                {/* Render the animal list when http://localhost:3000/animals */}
                <Route path="/animals" element={<AnimalList />} />

                <Route path="/locations" element={<LocationList />} />

                <Route path="/customers" element={<CustomerList />} />

                <Route path="/employees" element={<EmployeeList />} />
            </Routes>
        </>
    )
}