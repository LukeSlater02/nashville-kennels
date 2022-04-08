import React, { useEffect, useState } from "react";
import { GetAllLocations } from "../../modules/LocationManager";
import { addEmployee } from "../../modules/EmployeeManager";
import { useNavigate } from "react-router-dom";


export const EmployeeForm = () => {

    const [employee, setEmployee] = useState(
        {
            name: "",
            locationId: 0
        }
    )

    const [locations, setLocations] = useState([])

    useEffect(() => {
        GetAllLocations().then(setLocations)
    }, [])

    let navigate = useNavigate()

    const handleInput = event => {
        let newEmploye = { ...employee }
        let selectedVal = event.target.value

        if (event.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }

        newEmploye[event.target.id] = selectedVal

        setEmployee(newEmploye)
    }

    const handleSave = event => {
        event.preventDefault()

        if (employee.locationId === 0) {
            window.alert("Please select a location.")
        } else {
            addEmployee(employee).then(() => navigate("/employees"))
        }
    }

    return (
        <form>
            <h2 className="animalForm__title">New Employee</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Employee Name:</label>
                    {/* consider formatting inputs with lots of elements like this */}
                    <input
                        type="text"
                        id="name"
                        onChange={handleInput}
                        required
                        autoFocus
                        className="form-control"
                        placeholder="Employee Name"
                        value={employee.name}
                    //this value command associates the value of the state with the value of the input
                    //so it says the value is === the value of the name key on the animal object, meaning as the name key
                    //is updated with every keystroke using our handle function, the value of the field on the DOM displays the
                    //keys that are being pressed & saved to the obj
                    />
                </div>
                <div className="form-group">
                    Assign to Location:
                    <select value={employee.locationId} id="locationId" onChange={handleInput}>
                        <option value="0">Select a Location</option>
                        {locations.map(l => (
                            <option key={l.id} value={l.id}>
                                {l.name}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <button onClick={handleSave}>Save</button>
        </form>
    )
}