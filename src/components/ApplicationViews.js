import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './animal/AnimalList'
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'
import OwnerList from './owner/OwnerList'


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
            owners:[]
        
    }


    componentDidMount() {
        const newState = {}

        fetch("http://localhost:5002/animals")
            .then(r => r.json())
            .then(animals => newState.animals = animals)
            .then(() => fetch("http://localhost:5002/employees")
            .then(r => r.json()))
            .then(employees => newState.employees = employees)
            .then(() => fetch("http://localhost:5002/locations")
            .then(r =>r.json()))
            .then(locations => newState.locations = locations)
            .then(() => fetch("http://localhost:5002/owners")
            .then(r =>r.json()))
            .then(owners => newState.owners = owners)
            .then(() => this.setState(newState))
    }
    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <LocationList locations={this.state.locations} />
                }} />
                <Route exact path="/animals" render={(props) => {
                    return <AnimalList animals={this.state.animals} />
                }} />
                <Route exact path="/employees" render={(props) => {
                    return <EmployeeList employees={this.state.employees} />
                }} />
                 <Route exact path="/owners" render={(props) => {
                    return <OwnerList owners={this.state.owners} />
                }} />
                </React.Fragment>
        )
    }
}

//export default ApplicationViews