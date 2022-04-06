import React from "react";
import "./Customer.css"

export const CustomerCard = ({customer}) => (
    <section className="customers">
        <h3 className="customer__name">{customer.name}</h3>
        <div className="customer__address">Address: {customer.address}</div>
    </section>
)