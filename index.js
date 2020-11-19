// Add your code here
const url = 'http://localhost:3000/users'

const body = document.querySelector('body')

function generateObj(name, email) {

    const configurationObject = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({name: name, email: email})
      };

    return configurationObject

}

function submitData(userName, userEmail) {
    
    const configObj = generateObj(userName, userEmail)

    // console.log(configObj)

    return fetch(url, configObj)
        .then(resp => resp.json())
        .then(json => {
            const p = document.createElement('p')
            p.textContent = json.id
            body.appendChild(p)
        })
        .catch(error => {
            // console.log(error.message)
            const err = document.createElement('p')
            err.textContent = error.message
            body.appendChild(err)
        })
};
