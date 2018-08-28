import React, { Component } from 'react'
import './employee.css'
import businessman from "./businessman_edit.png"
import {Link} from 'react-router-dom'

export default class EmployeeList  extends Component {
    render() {
        return (



            <React.Fragment>
                <div className="employeeButton">
                    <button type="button"
                            className="btn btn-success"
                            onClick={() => {
                                this.props.history.push("/employees/new")}
                            }>
                        Admit Employee
                    </button>
                </div>
            <section className="employee">
            {
                this.props.employees.map(employee =>
                    <div key={employee.id} className="card">
                        <div className="card-body">
                            <h5 className="card-title">
                                <img src={businessman} alt="businessman" className="icon--employee" />
                                {employee.name}
                                <Link className="nav-link" to={`/employees/${employee.id}`}>Details</Link>
        
                                <a href="#"
                                    onClick={() => this.props.deleteEmployee(employee.id)}
                                    className="card-link">Delete</a>
                            </h5>
                        </div>
                    </div>
                )
            }
            </section>
            </React.Fragment>
        )
}

    }