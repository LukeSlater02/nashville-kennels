const remoteURL = "http://localhost:8088"

export const getAnimalById = (animalId) => {
  //be sure your animals have good data and related to a location and customer
  return fetch(`${remoteURL}/animals/${animalId}?_expand=location&_expand=customer&_expand=employee`)
  .then(res => res.json())
}

export const getAllAnimals = () => {
  return fetch(`${remoteURL}/animals/?_expand=location&_expand=customer&_expand=employee`)
  .then(res => res.json())
}

export const deleteAnimal = id => {
  return fetch(`${remoteURL}/animals/${id}`, {
    method: "DELETE"
  }).then(res => res.json())
}

export const addAnimal = newAnimal => {
  return fetch(`${remoteURL}/animals`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newAnimal)
  }).then(res => res.json())
}

export const updateAnimal = editedAn => {
  return fetch(`${remoteURL}/animals/${editedAn.id}`, {
    method: "PATCH",
    body: JSON.stringify(editedAn),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => res.json())
}

export const getRandomId = () => {
  return fetch(`${remoteURL}/animals`)
  .then(res => res.json())
  .then(animals => {
    const randomAnimal = animals[Math.floor(Math.random() * animals.length)]
    return randomAnimal.id
  })
}