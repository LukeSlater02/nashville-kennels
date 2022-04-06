const remoteURL = "http://localhost:8088"

export const GetAllLocations = () => {
    return fetch(`${remoteURL}/locations`).then(res => res.json())
}