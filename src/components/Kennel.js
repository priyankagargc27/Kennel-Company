

import React, { Component } from "react"
import NavBar from "./nav/NavBar"
import ApplicationViews from "./ApplicationViews"

import "./Kennel.css"
import "bootstrap/dist/css/bootstrap.min.css"


class Kennel extends Component {
    render() {
        return (
            
            <React.Fragment>
                <NavBar />
                <ApplicationViews />
            </React.Fragment>
        )
    }
}

export default Kennel

// import React, { Component } from 'react'
// //import App from './App'
// import OwnerList from "./owner/OwnerList"
// import EmployeeList from "./employee/EmployeeList" 
// import LocationList from "./location/LocationList" 
// import AnimalList from "./animal/AnimalList"

// import './Kennel.css'


// export default class Kennel extends Component {

//     employeesFromAPI = [
//         { id: 1, name: "Jessica Younker" },
//         { id: 2, name: "Jordan Nelson" },
//         { id: 3, name: "Zoe LeBlanc" },
//         { id: 4, name: "Blaise Roberts" }
//     ]

//     // This will eventually get pulled from the API
//     locationsFromAPI = [
//         { id: 1, name: "Nashville North", address: "500 Circle Way" },
//         { id: 2, name: "Nashville South", address: "10101 Binary Court" }
//     ]

//     animalsFromAPI = [
//         { id: 1, name: "Doodles" },
//         { id: 2, name: "Jack" },
//         { id: 3, name: "Angus" },
//         { id: 4, name: "Henley" },
//         { id: 5, name: "Derkins" },
//         { id: 6, name: "Checkers" }
//     ]
//     ownersFromAPI = [
//         { id: 1, name: "Ryan Tanay" },
//         { id: 2, name: "Emma Beaton" },
//         { id: 3, name: "Dani Adkins" },
//         { id: 4, name: "Adam Oswalt" },
//         { id: 5, name: "Fletcher Bangs" },
//         { id: 6, name: "Angela Lee" }
//     ]
//     state = {
//         owners: this.ownersFromAPI,
//         employees: this.employeesFromAPI,
//         locations: this.locationsFromAPI,
//           animals: this.animalsFromAPI
//     }






//     render() {
//         return (
        
            
//             <article className="kennel">
//                  <OwnerList   owners={this.state.owners} />
//                 <EmployeeList employees={this.state.employees} />
//                 <LocationList locations={this.state.locations} />
//                 <AnimalList   animals={this.state.animals} />

//             </article>
        
            
//         );
//     }
// }

