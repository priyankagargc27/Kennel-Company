import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './animal/AnimalList'
import AnimalDetail from './animal/AnimalDetail'
import AnimalForm from './animal/AnimalForm'
import LocationList from './location/LocationList'
import LocationDetail from './location/LocationDetail'
import EmployeeList from './employee/EmployeeList'
import EmployeeDetail from './employee/EmployeeDetail'
import EmployeeForm from './employee/EmployeeForm'


import OwnerList from './owner/OwnerList'
import './ApplicationView.css'
import APIManager from "../module/APIManager"

//import LocationManager from "../module/LocationManager"

//import './Animal.css'


export default class ApplicationViews extends Component {    // employeesFromAPI = [
    //     { id: 1, name: "Jessica Younker" },
    //     { id: 2, name: "Jordan Nelson" },
    //     { id: 3, name: "Zoe LeBlanc" },
    //     { id: 4, name: "Blaise Roberts" }
    // ]

    // locationsFromAPI = [
    //     { id: 1, name: "Nashville North", address: "500 Circle Way" },
    //     { id: 2, name: "Nashville South", address: "10101 Binary Court" }
    // ]

    // animalsFromAPI = [
    //     { id: 1, name: "Doodles" },
    //     { id: 2, name: "Jack" },
    //     { id: 3, name: "Angus" },
    //     { id: 4, name: "Henley" },
    //     { id: 5, name: "Derkins" },
    //     { id: 6, name: "Checkers" }
    // ]
    // ownersFromApi = [
    //     {id: 1, name: "Kaushal"},
    //     {id: 2, name: "Priyanka"},
    //     {id: 3, name: "Aryan"},
    //     {id: 4, name: "Sharad"},
    //     {id: 5, name: "Sunil"}
    // ]


    state = {


        locations: [],
        animals: [],
        employees: [],
        owners: []

    }


    componentDidMount() {
        APIManager.getAllAnimal().then(allAnimals => {
            this.setState({
                animals: allAnimals
            })
        })
        APIManager.getAllLocation().then(allLocations => {
            this.setState({
                locations: allLocations
            })
        })
        APIManager.getAllEmployee().then(allEmployees => {
            this.setState({
                employees: allEmployees
            })
        })
        APIManager.getAllOwner().then(allOwners => {
            this.setState({
                owners: allOwners
            })
        })


        //     const newState = {}

        //   fetch("http://localhost:5002/animals")
        //         .then(r => r.json())
        //         .then(animals => newState.animals = animals)
        //         .then(() => fetch("http://localhost:5002/employees")
        //         .then(r => r.json()))
        //         .then(employees => newState.employees = employees)
        //         .then(() => fetch("http://localhost:5002/locations")
        //         .then(r =>r.json()))
        //         .then(locations => newState.locations = locations)
        //         .then(() => fetch("http://localhost:5002/owners")
        //         .then(r =>r.json()))
        //         .then(owners => newState.owners = owners)
        //         .then(() => this.setState(newState),()=>{
        //             console.log("This state after fetch",this.state)
        //         })
    }


    // deleteAnimal = id => {
    //     fetch(`http://localhost:5002/animals/${id}`, {
    //         method: "DELETE"
    //     })
    //     .then(e => e.json())
    //     .then(() => fetch(`http://localhost:5002/animals`))
    //     .then(e => e.json())
    //     .then(animals => this.setState({
    //         animals: animals
    //     }))
    // }

    //Add the animal to api with the caretaker
    addAnimal = animal => APIManager.postAnimal(animal)
        .then(() => APIManager.getAllAnimal())
        .then(animals => this.setState({
            animals: animals
        }))

    addEmployee = employee => APIManager.postEmployee(employee)
        .then(() => APIManager.getAllEmployee())
        .then(employees => this.setState({
            employees: employees
        }))

    EditAnimal = animal => APIManager.EditAnimal(animal)
        .then(() => APIManager.getAllAnimal())
        .then(animals => this.setState({
            animals: animals
        }))


    // deleting the exesting animal
    deleteAnimal = id => APIManager.removeAndList(id)
        .then(animals => this.setState({
            animals: animals
        }))

    //deleting the exsiting location
    deleteLocation = id => APIManager.removeAndListLocation(id)
        .then(locations => this.setState({
            locations: locations
        }))

    deleteEmployee = id => APIManager.removeAndListEmployee(id)
        .then(employees => this.setState({
            employees: employees
        }))


    deleteOwner = id => APIManager.removeAndListOwner(id)
        .then(owners => this.setState({
            owners: owners
        }))
    // deleteLocation = id => {
    //     fetch(`http://localhost:5002/locations/${id}`, {
    //         method: "DELETE"
    //     })
    //     .then(e => e.json())
    //     .then(() => fetch(`http://localhost:5002/locations`))
    //     .then(e => e.json())
    //     .then(locations => this.setState({
    //         locations: locations
    //     }))
    // }


    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <Route exact path="/" render={(props) => {
                        return <LocationList deleteLocation={this.deleteLocation} locations={this.state.locations} />
                    }} />

                    <Route path="/locations/:locationId(\d+)" render={(props) => {
                        return <LocationDetail {...props} deleteLocation={this.deleteLocation} locations={this.state.locations} />
                    }} />
                    <Route exact path="/animals" render={(props) => {
                        return <AnimalList {...props} deleteAnimal={this.deleteAnimal} animals={this.state.animals} />
                    }} />

                    <Route path="/animals/:animalId(\d+)" render={(props) => {
                        return <AnimalDetail {...props} deleteAnimal={this.deleteAnimal} animals={this.state.animals} />
                    }} />
                    {/* <Route exact path="/animals" render={(props) => {
    return <AnimalList {...props}
                       deleteAnimal={this.deleteAnimal}
                       animals={this.state.animals} />
}} /> */}

                    <Route path="/animals/new" render={(props) => {
                        return <AnimalForm {...props}
                            addAnimal={this.addAnimal}
                            employees={this.state.employees} />
                    }} />

                    <Route path="/animals/Edit" render={(props) => {
                        return <AnimalForm {...props}
                            EditAnimal={this.EditAnimal}
                            employees={this.state.employees} />
                    }} />

                    <Route exact path="/employees" render={(props) => {
                        return <EmployeeList {...props} deleteEmployee={this.deleteEmployee} employees={this.state.employees} />
                    }} />
                    <Route path="/employees/:employeeId(\d+)" render={(props) => {
                        return <EmployeeDetail {...props} deleteEmployee={this.deleteEmployee} employees={this.state.employees} />
                    }} />

                    <Route path="/employees/new" render={(props) => {
                        return <EmployeeForm {...props}
                            addEmployee={this.addEmployee} />
                        //    employees={this.state.employees} />
                    }} />

                    <Route exact path="/owners" render={(props) => {
                        return <OwnerList deleteOwner={this.deleteOwner} owners={this.state.owners} />
                    }} />
                </div>
            </React.Fragment>
        )
    }
}

//export default ApplicationViews