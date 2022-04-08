import React from "react"
import { Route, Routes } from "react-router-dom"
import { Home } from "../Home.js"
import { AnimalList } from './animal/AnimalList'
import { CustomerList } from "./Customer/CustomerList.js"
import { LocationList } from "./Location/LocationList.js"
import { EmployeeList } from "./Employee/EmployeeList.js"
import { AnimalDetail } from "./animal/AnimalDetail.js"
import { LocationDetail } from "./Location/LocationDetail.js"
import { AnimalForm } from './animal/AnimalForm.js'
import { EmployeeForm } from "./Employee/EmployeeForm.js"

export const ApplicationViews = () => {
    return (
        <>
            <Routes>
                {/* Render the location list when http://localhost:8088/ */}
                <Route path="/" element={<Home />} />

                {/* Render the animal list when http://localhost:8088/animals */}
                <Route path="/animals" element={<AnimalList />} />
                <Route path="/animals/animal__:animalId" element={<AnimalDetail />} />

                <Route path="/animals/create" element={<AnimalForm />} />

                <Route path="/locations" element={<LocationList />} />
                <Route path="/locations/:locationId" element={<LocationDetail />} />

                <Route path="/employees/create" element={<EmployeeForm />} />

                <Route path="/customers" element={<CustomerList />} />

                <Route path="/employees" element={<EmployeeList />} />
            </Routes>
        </>
    )
}