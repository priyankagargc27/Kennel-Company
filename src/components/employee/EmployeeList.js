import React, { Component } from 'react'


export default class EmployeeList  extends Component {
    render() {
        return (
            <div className="emploee">
                <h1>Employee List</h1>
                {
                this.props.employees.map(employee =>
                    <div id={'employee--${employee.id}'} key={employee.id}>
                       <h4> {employee.name}</h4>
                    </div>
        )
    }
    </div>
        )
}

    }