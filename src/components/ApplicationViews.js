import React from "react"
import { Route, Routes, Navigate } from "react-router-dom"
import { Home } from "../Home.js"
import { AnimalList } from './animal/AnimalList'
import { CustomerList } from "./Customer/CustomerList.js"
import { LocationList } from "./Location/LocationList.js"
import { EmployeeList } from "./Employee/EmployeeList.js"
import { AnimalDetail } from "./animal/AnimalDetail.js"
import { LocationDetail } from "./Location/LocationDetail.js"
import { AnimalForm } from './animal/AnimalForm.js'
import { EmployeeForm } from "./Employee/EmployeeForm.js"
import { Login } from "./auth/Login.js"
import { Register } from "./auth/Register"
import { AnimalEditForm } from "./animal/AnimalEditForm.js"
import { MadLib } from "./MadLib.js"

export const ApplicationViews = ({ isAuthenticated, setIsAuthenticated }) => {
    const PrivateRoute = ({ children }) => {
        return isAuthenticated ? children : <Navigate to="/login" />;
    }

    const setAuthUser = (user) => {
        sessionStorage.setItem("kennel_customer", JSON.stringify(user))
        setIsAuthenticated(sessionStorage.getItem("kennel_customer") !== null)
    }

    return (
        <>
            <Routes>
                <Route exact path="/login" element={<Login setAuthUser={setAuthUser} />} />
                <Route exact path="/register" element={<PrivateRoute><Register /></PrivateRoute>} />

                <Route path="/madLib" element={<MadLib />}></Route>

                {/* Render the location list when http://localhost:8088/ */}
                <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />

                {/* Render the animal list when http://localhost:8088/animals */}
                <Route exact path="/animals" element={
                    <PrivateRoute>
                        <AnimalList />
                    </PrivateRoute>
                } />

                <Route path="/animals/:animalId/edit" element={
                    <PrivateRoute>
                        <AnimalEditForm />
                    </PrivateRoute>
                } />

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