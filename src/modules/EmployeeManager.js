const remoteURL = "http://localhost:8088"

export const GetAllEmployees = () => {
    return fetch(`${remoteURL}/employees?_expand=location`).then(res => res.json())
}

export const addEmployee = empObj => {
    return fetch(`${remoteURL}/employees`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(empObj)
    }).then(res => res.json())
}