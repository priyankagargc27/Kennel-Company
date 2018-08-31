import React, { Component } from "react"
import "./Animal.css"


export default class AnimalEditForm extends Component {

    // componentDidMount() {
   
   
    //     const animal = this.props.animals.find(a => a.id === parseInt(this.props.match.params.animalId)) || {}

   
    // }

    state = {
        name: "",
        breed: "",
        employee:""
    }


    //  constructor() {
    //      super();
    //      this.state={
    //          search: this.props.
    //      };
    //  }
    // updateValue(event){
    //     this.setState({search: event.target.value.substr(0,20)})
    //     //console.log(event.target.value)
    // }

     // Update state whenever an input field is edited
     handleFieldChange = evt => {
        console.log("handlefieldchange",evt)
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }
    
    
    
    constructEditAnimal = evt => {
        evt.preventDefault()
        if (this.state.name === "") {
            window.alert("Please enter Animal Name")
        } else {
            const editanimal = {
                name: this.state.name,
                breed: this.state.breed,
                employee: this.props.employees.find(e => e.name === this.state.employee).id
            }

            // Create the animal and redirect user to animal list
            this.props.EditAnimal(this.props.match.params.animalId, editanimal).then(() => 
            this.props.history.push("/animals")
            //this.props.EditAnimal(animal).then(() => this.props.history.push("/animals"))
            )}
    }
    componentDidMount(){
    const animal = this.props.animals.find(a => a.id === parseInt(this.props.match.params.animalId)) || {}
    const employee = this.props.employees.find(e => e.id === animal.employee)
    console.log(employee)
        console.log(this.props);

    this.setState({
        name:animal.name,
        breed:animal.breed,
       employee:animal.employee
    })
    }
    render() {

        return (
            <React.Fragment>
                <form className="animalForm">
                    <div className="form-group">
                        <label htmlFor="animalName">Animal name</label>
                        <input type="text" required="true"
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="name"
                               value={this.state.name}
                               placeholder="Animal Name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="breed">Breed</label>
                        <input type="text" required="true"
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="breed" 
                               value={this.state.breed}
   
                              placeholder="Breed" />
                    </div>
                     <div className="form-group">
                        <label htmlFor="employee">Edit to caretaker</label>
                        <select defaultValue={this.state.employee} name="employee" id="employee"
                                onChange={this.handleFieldChange}>
                            <option value="">Select an employee</option>
                        {
                            
                            this.props.employees.map(employee => <option key={employee.id}>{employee.name}</option>)
                        }
                        </select>
                    </div> 
                    <button type="submit" onClick={this.constructEditAnimal} className="btn btn-primary">Submit</button>
                </form>
            </React.Fragment>
        )
    }





}

