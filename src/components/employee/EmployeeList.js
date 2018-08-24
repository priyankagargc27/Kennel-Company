import React, { Component } from 'react'


export default class EmployeeList  extends Component {
    render() {
        return (
            <div className="emploee">
                <h3>Employee List</h3>
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