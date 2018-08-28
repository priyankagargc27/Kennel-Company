const remoteURL = "http://localhost:5002"

export default Object.create(null, {
    getAnimal: {
        value: function (id) {
            return fetch(`${remoteURL}/animals/${id}`).then(e => e.json())
        }
    },
    getAllAnimal: {
        value: function () {
            return fetch(`${remoteURL}/animals`).then(e => e.json())
        }
    },

    removeAndList: {
        value: function (id) {
            return fetch(`http://localhost:5002/animals/${id}`, {
                method: "DELETE"
            })
                .then(() => this.getAllAnimal())
               
          }
    },
    postAnimal: {
        value: function (newAnimal) {
            return fetch(`${remoteURL}/animals`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newAnimal)
            }).then(e => e.json())
        }
    },
    EditAnimal:{
        value: function (newAnimal) {
            return fetch(`${remoteURL}/animals`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newAnimal)
            }).then(e => e.json())
        }
    },
    
    
    getLocation: {
        value: function (id) {
            return fetch(`${remoteURL}/locations/${id}`).then(e => e.json())
        }
    },
    getAllLocation: {
        value: function () {
            return fetch(`${remoteURL}/locations`).then(e => e.json())
        }
    },
    removeAndListLocation: {
        value: function (id) {
            return fetch(`http://localhost:5002/locations/${id}`, {
                method: "DELETE"
            })
                .then(() => this.getAllLocation())
               
          }
    },

    getEmployee: {
        value: function (id) {
            return fetch(`${remoteURL}/employees/${id}`).then(e => e.json())
        }
    },
    getAllEmployee: {
        value: function () {
            return fetch(`${remoteURL}/employees`).then(e => e.json())
        }
    },
    removeAndListEmployee: {
        value: function (id) {
            return fetch(`http://localhost:5002/employees/${id}`, {
                method: "DELETE"
            })
                .then(() => this.getAllEmployee())
               
          }
    },
    postEmployee: {
        value: function (newEmployee) {
            return fetch(`${remoteURL}/employees`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newEmployee)
            }).then(e => e.json())
        }
    },

    getOwner: {
        value: function (id) {
            return fetch(`${remoteURL}/owners/${id}`).then(e => e.json())
        }
    },
    getAllOwner: {
        value: function () {
            return fetch(`${remoteURL}/owners`).then(e => e.json())
        }
    },
    removeAndListOwner: {
        value: function (id) {
            return fetch(`http://localhost:5002/owners/${id}`, {
                method: "DELETE"
            })
                .then(() => this.getAllOwner())
               
          }
    },
})