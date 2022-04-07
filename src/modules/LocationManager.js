const remoteURL = "http://localhost:8088"

export const GetAllLocations = () => {
    return fetch(`${remoteURL}/locations`).then(res => res.json())
}

export const getLocationById = id => {
    return fetch(`${remoteURL}/locations/${id}`).then(res => res.json())
}

export const deleteLocation = id => {
    return fetch(`${remoteURL}/locations/${id}`, {
        method: "DELETE"
    }).then(res => res.json())
}