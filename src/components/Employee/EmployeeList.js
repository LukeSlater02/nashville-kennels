import React, { useEffect, useState } from "react";
import { EmployeeCard } from "./EmployeeCard";
import { GetAllEmployees } from "../../modules/EmployeeManager";

export const EmployeeList = () => {
    const [employees, setEmployees] = useState([])

    const getEmployees = () => {
        GetAllEmployees().then(data => setEmployees(data))
    }

    useEffect(() => {
        getEmployees()
    }, [])

    return (
        <div className="container-cards">
            {employees.map(employee => <EmployeeCard employee={employee} key={employee.id}/>)}
        </div>
    )
}