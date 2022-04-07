const remoteURL = "http://localhost:8088"

export const GetAllEmployees = () => {
    return fetch(`${remoteURL}/employees?_expand=location`).then(res => res.json())
}