import React, { useEffect, useState } from "react";
import { EmployeeCard } from "./EmployeeCard";
import { GetAllEmployees } from "../../modules/EmployeeManager";
import { useNavigate } from "react-router-dom";

export const EmployeeList = () => {
    const [employees, setEmployees] = useState([])

    let navigate = useNavigate()

    const getEmployees = () => {
        GetAllEmployees().then(data => setEmployees(data))
    }

    useEffect(() => {
        getEmployees()
    }, [])

    return <>
        <button type="button"
            className="btn"
            onClick={() => { navigate("/employees/create") }}>
            Add Employee
        </button>

        <div className="container-cards">
            {employees.map(employee => <EmployeeCard employee={employee} key={employee.id} />)}
        </div>
    </>





}