import React, { useState, useEffect } from "react";
import {useNavigate, useParams} from "react-router-dom";
import { updateAnimal, getAnimalById } from "../../modules/AnimalManager"
import { GetAllEmployees } from "../../modules/EmployeeManager";
import { GetAllLocations } from "../../modules/LocationManager";
import "./AnimalForm.css"

export const AnimalEditForm = () => {
    const [animal, setAnimal] = useState(
        {
            name: "",
            breed: "",
            locationId: 0,
            customerId: 0,
            employeeId: 0
        }
    )

    const [isLoading, setIsLoading] = useState(false)
    const [locations, setLocations] = useState([])
    const [employees, setEmployees] = useState([])

    const {animalId} = useParams()
    const navigate = useNavigate()

    const handleFieldChange = evt => {
        const stateToChange = {...animal}
        stateToChange[evt.target.id] = evt.target.value
        setAnimal(stateToChange)
    }

    const updateExistingAnimal = evt => {
        evt.preventDefault()
        setIsLoading(true)

        const editedAnimal = {
            id: animalId,
            name: animal.name,
            breed: animal.breed,
            locationId: animal.locationId,
            customerId: animal.customerId,
            employeeId: animal.employeeId
        }

        updateAnimal(editedAnimal).then(() => navigate("/animals"))
    }

    useEffect(() => {
        getAnimalById(animalId)
        .then(animal => {
            setAnimal(animal)
            setIsLoading(false)
        })
    }, [])

    useEffect(() => {
      GetAllEmployees().then(setEmployees)
    }, [])

    useEffect(() => {
      GetAllLocations().then(setLocations)
    }, [])

    return (
        <>
          <form>
            <fieldset>
              <div className="formgrid">
                <input
                  type="text"
                  required
                  className="form-control"
                  onChange={handleFieldChange}
                  id="name"
                  value={animal.name}
                />
                <label htmlFor="name">Animal name</label>
    
                <input
                  type="text"
                  required
                  className="form-control"
                  onChange={handleFieldChange}
                  id="breed"
                  value={animal.breed}
                />
                <label htmlFor="breed">Breed</label>
                
                <label htmlFor="locationId">Location</label>
                <select className="form-control" id="locationId" onChange={handleFieldChange} value={animal.locationId}>
                  <option value="0">Select Location</option>
                  {locations.map(l => {
                    return <option value={l.id} key={l.id}>{l.name}</option>
                  })}
                </select>

                <label htmlFor="employeeId">Assign to Employee</label>
                <select className="form-control" id="employeeId" onChange={handleFieldChange} value={animal.employeeId}>
                  <option value="0">Select Employee</option>
                  {employees.map(e => {
                    return <option value={e.id} key={e.id}>{e.name}</option>
                  })}
                </select>
              </div>
              {/* Be sure to include location and customer */}
              <div className="alignRight">
                <button
                  type="button" disabled={isLoading}
                  onClick={updateExistingAnimal}
                  className="btn btn-primary"
                >Submit</button>
              </div>
            </fieldset>
          </form>
        </>
    );
    }