import React, { useState, useEffect } from "react";
import {useNavigate, useParams} from "react-router-dom";
import { updateAnimal, getAnimalById } from "../../modules/AnimalManager"
import "./AnimalForm.css"

export const AnimalEditForm = () => {
    const [animal, setAnimal] = useState(
        {
            name: "",
            breed: "",
            locationId: 0,
            customerId: 0,
            employeeId: 0,
            date: ""
        }
    )

    const [isLoading, setIsLoading] = useState(false)

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

                <label htmlFor="date">Date Admitted</label>
                <input className="form-control" type="date" id="date" value={animal.date} readOnly></input>
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