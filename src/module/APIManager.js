const remoteURL =  "https://midstone-recipe-server.herokuapp.com/"

export default Object.create(null, {
    // getAnimal: {
    //     value: function (key,id) {
    //         return fetch(`${remoteURL}/animals/${id}`).then(e => e.json())
    //     }
    // },
    get: {
        value: (key, id) => {
            return fetch(`${remoteURL}/${key}/${id}`)
            .then(result => result.json())
        }
    },
    // getAllAnimal: {
    //     value: function () {
    //         return fetch(`${remoteURL}/animals`).then(e => e.json())
    //     }
    // },
    getAll: {
        value: (key) => {
            return fetch(`${remoteURL}/${key}`)
            .then(result => result.json())
        }
    },

    // removeAndList: {
    //     value: function (id) {
    //         return fetch(`http://localhost:5002/animals/${id}`, {
    //             method: "DELETE"
    //         })
    //             .then(() => this.getAllAnimal())
               
    //       }
    // },
    removeAndList: {
        value: (key, id) => {
            return fetch(`${remoteURL}/${key}/${id}`, {
                method: "DELETE"
            }).then(result => result.json())
        }
    },
    // postAnimal: {
    //     value: function (newAnimal) {
    //         return fetch(`${remoteURL}/animals`, {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json"
    //             },
    //             body: JSON.stringify(newAnimal)
    //         }).then(e => e.json())
    //     }
    // },
     post: {
        value: (key, object) => {
            return fetch(`${remoteURL}/${key}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(object)
            })
            .then(result => result.json())
        }
    },
    // EditAnimal:{
    //     value: function (key,id,object) {
    //         return fetch(`${remoteURL}/${key}/${id}`, {
    //             method: "PUT",
    //             headers: {
    //                 "Content-Type": "application/json"
    //             },
    //             body: JSON.stringify(object)
    //         }).then(e => e.json())
    //         .then(() => this.getAllData(key))

    //     }
    // },
    edit: {
        value: (key, id, object) => {
            return fetch(`${remoteURL}/${key}/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(object)
            })
            .then(result => result.json())
        }
    }
})
    
//     getLocation: {
//         value: function (id) {
//             return fetch(`${remoteURL}/locations/${id}`).then(e => e.json())
//         }
//     },
//     getAllLocation: {
//         value: function () {
//             return fetch(`${remoteURL}/locations`).then(e => e.json())
//         }
//     },
//     removeAndListLocation: {
//         value: function (id) {
//             return fetch(`http://localhost:5002/locations/${id}`, {
//                 method: "DELETE"
//             })
//                 .then(() => this.getAllLocation())
               
//           }
//     },

//     getEmployee: {
//         value: function (id) {
//             return fetch(`${remoteURL}/employees/${id}`).then(e => e.json())
//         }
//     },
//     getAllEmployee: {
//         value: function () {
//             return fetch(`${remoteURL}/employees`).then(e => e.json())
//         }
//     },
//     removeAndListEmployee: {
//         value: function (id) {
//             return fetch(`http://localhost:5002/employees/${id}`, {
//                 method: "DELETE"
//             })
//                 .then(() => this.getAllEmployee())
               
//           }
//     },
//     postEmployee: {
//         value: function (newEmployee) {
//             return fetch(`${remoteURL}/employees`, {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json"
//                 },
//                 body: JSON.stringify(newEmployee)
//             }).then(e => e.json())
//         }
//     },

//     getOwner: {
//         value: function (id) {
//             return fetch(`${remoteURL}/owners/${id}`).then(e => e.json())
//         }
//     },
//     getAllOwner: {
//         value: function () {
//             return fetch(`${remoteURL}/owners`).then(e => e.json())
//         }
//     },
//     removeAndListOwner: {
//         value: function (id) {
//             return fetch(`http://localhost:5002/owners/${id}`, {
//                 method: "DELETE"
//             })
//                 .then(() => this.getAllOwner())
               
//           }
//     },
// })