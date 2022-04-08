import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { addAnimal } from "../../modules/AnimalManager";
import { getAllCustomers } from "../../modules/CustomerManager";
import { GetAllEmployees } from "../../modules/EmployeeManager";
import { GetAllLocations } from "../../modules/LocationManager";
import './AnimalForm.css'

export const AnimalForm = () => {
    //State will contain both animal data as well as an isLoading flag
    //Define the initial state of the form inputs with useState()

    const [animal, setAnimal] = useState({
        name: "",
        breed: "",
        locationId: 0,
        customerId: 0,
        employeeId: 0
    })

    const [isLoading, setisLoading] = useState(false)

    //you will need the 'getAll' in the LocationsManager and Cusomters manage to complete this section
    const [locations, setLocations] = useState([])
    const [customers, setCustomers] = useState([])
    const [employees, setEmployees] = useState([])

    const navigate = useNavigate()

    //when a field changes, update state. The return wil re-render and display based on the values in state
    // NOTE! What's happening in this function can be very difficult to grasp. Read it over many times and ask
    //a lot of questions
    //Controlled component

    const handleControlledInputChange = event => {
        //When changing a state object or array,
        //always create a copy, make changes, and then set state
        const newAnimal = { ...animal }
        let selectedVal = event.target.value
        // forms always provide values as strings. But we want to save the ids as numbers
        if (event.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }
        /*Animal is an object with properties.
        Set the property to the new value
        using object bracket notation. */

        //event.target.id is the id given to the input, so Animal name:'s id is "name", because the input id === the name of one
        // of the keys on our newAnimal obj, we can use that input id to target that key and set its value to be equal to the value of the input
        newAnimal[event.target.id] = selectedVal
        //update state
        setAnimal(newAnimal)
    }


    useEffect(() => {
        GetAllLocations().then(setLocations)
    }, [])

    useEffect(() => {
        getAllCustomers().then(setCustomers)
    }, [])


    useEffect(() => {
        GetAllEmployees().then(setEmployees)
    }, [])

    const handleClickSaveAnimal = event => {
        event.preventDefault()

        const locationId = animal.locationId
        const customerId = animal.customerId
        const employeeId = animal.employeeId

        if (locationId === 0 || customerId === 0 || employeeId === 0) {
            window.alert("Please select a location, a customer and an employee.")
        } else {
            //invoke addAnimal passing animal as an argument
            //once complete, change the url and display the animal list
            addAnimal(animal)
                .then(() => navigate("/animals"))
        }
    }

    return (
        <form className="animalForm">
            <h2 className="animalForm__title">New Animal</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Animal name:</label>
                    {/* consider formatting inputs with lots of elements like this */}
                    <input
                        type="text"
                        id="name"
                        onChange={handleControlledInputChange}
                        required
                        autoFocus
                        className="form-control"
                        placeholder="Animal name"
                        value={animal.name}
                    //this value command associates the value of the state with the value of the input
                    //so it says the value is === the value of the name key on the animal object, meaning as the name key
                    //is updated with every keystroke using our handle function, the value of the field on the DOM displays the
                    //keys that are being pressed & saved to the obj
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="breed">Animal breed:</label>
                    <input type="text" id="breed" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Animal breed" value={animal.breed} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="location">Assign to location: </label>
                    <select value={animal.locationId} name="locationId" id="locationId" onChange={handleControlledInputChange} className="form-control" >
                        <option value="0">Select a location</option>
                        {locations.map(l => (
                            <option key={l.id} value={l.id}>
                                {l.name}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="customerId">Customer: </label>
                    <select value={animal.customerId} name="customer" id="customerId" onChange={handleControlledInputChange} className="form-control" >
                        <option value="0">Select a customer</option>
                        {customers.map(c => (
                            <option key={c.id} value={c.id}>
                                {c.name}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="employeeId">Assign to an Employee: </label>
                    <select value={animal.employeeId} name="employee" id="employeeId" onChange={handleControlledInputChange} className="form-control">
                        <option value="0">Select an employee</option>
                        {employees.map(e => (
                            <option key={e.id} value={e.id}>
                                {e.name}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <button type="button" className="btn btn-primary"
                onClick={handleClickSaveAnimal}>
                Save Animal
            </button>
        </form>
    )
}