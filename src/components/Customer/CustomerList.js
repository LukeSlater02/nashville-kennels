import React, { useEffect, useState } from "react";
import { CustomerCard } from "./CustomerCard";
import { getAllCustomers } from "../../modules/CustomerManager";

export const CustomerList = () => {
    //The initial state is an empty array
    const [customers, setCustomers] = useState([])

    const getCustomers = () => {
        //After the data comes back from the API, we
        //use the setCustomers function to update state
        return getAllCustomers().then(data => setCustomers(data))
    }

    // got the cusomters from the API on the component's first render
    useEffect(() => {
        getCustomers()
    }, [])

    return (
        <div className="container-cards">
            {customers.map(customer => <CustomerCard customer={customer} key={customer.id}/>)}
        </div>
    )
}