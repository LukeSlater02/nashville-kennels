import React from "react";
import "./Employee.css"

export const EmployeeCard = ({employee}) => (
    <section className="employee">
        <h2 className="employee__name">{employee.name}</h2>
        <div className="employee__location">Location: {employee.location.name}</div>
    </section>
)