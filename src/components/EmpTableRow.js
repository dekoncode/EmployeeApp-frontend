import React, { Component } from 'react'

export default class EmpTableRow extends Component {


    onChange(e) {
        const id = this.props.employee._id;
        if (e.target.checked) {
            this.props.pick(id)    
        } else {
            this.props.unpick(id)
        }
    }
    
    render() {
        return (
                <tr>
                    <td><input type="checkbox" onChange={this.onChange.bind(this)}/></td>
                    <td>{this.props.employee.emp_firstname + ' ' + this.props.employee.emp_secondname}</td>
                    <td>{this.props.employee.emp_role}</td>
                    <td>{this.props.employee.emp_company}</td>
                    <td>{this.props.employee.emp_location}</td>
                    <td>{this.props.employee.emp_workemail}</td>
                    <td>{this.props.employee.emp_workphone}</td>
                    <td>{this.props.employee.emp_hourrate}/h</td>
                </tr>
        )
    }
}
