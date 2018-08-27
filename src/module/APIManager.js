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

    getOwner: {
        value: function (id) {
            return fetch(`${remoteURL}/owners/${id}`).then(e => e.json())
        }
    },
    getAllOwner: {
        value: function () {
            return fetch(`${remoteURL}/owners`).then(e => e.json())
        }
    }
})