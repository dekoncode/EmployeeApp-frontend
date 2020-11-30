import React, { Component } from 'react';
import axios from 'axios';
import EmpTableRow from './EmpTableRow';
import { Link } from 'react-router-dom';


export default class EmployeesList extends Component {
    constructor(props) {
        super(props);
        this.pickEmployee = this.pickEmployee.bind(this);
        this.unpickEmployee = this.unpickEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);

        this.state = {
            employees: [],
            choosedEmp: []
        };
    }

    deleteEmployee() {
        let i;
        for (i= 0; i < this.state.choosedEmp.length; i++) {
            axios.delete('http://localhost:5000/delete/' + this.state.choosedEmp[i])
            .then(res => {
                console.log('Employee successfully deleted')
            })
            .catch(function(e) {
                console.log(e)
            })
        }
    }

    
    componentDidMount() {axios.get('http://localhost:5000/').then(res => {this.setState({employees: res.data})})}


    employeesList() {
        return this.state.employees.map((currentEmployee, i) => {
            return <EmpTableRow employee={currentEmployee} key={i} pick={this.pickEmployee} unpick={this.unpickEmployee}/>
        })
    }

    pickEmployee(id) {
        this.setState({
            choosedEmp: [...this.state.choosedEmp, id]
        })
    }

    unpickEmployee(id) {
        this.setState({
            choosedEmp:this.state.choosedEmp.filter((filterID) => {
                return id !== filterID
            })
        })
    }


    render() {
        console.log(this.state.choosedEmp)
        return (
            <div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Full Name</th>
                        <th scope="col">Role</th>
                        <th scope="col">Company</th>
                        <th scope="col">Bussines Location</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Hour Rate</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.employeesList()}
                    </tbody>
                </table>
                <button onClick={this.deleteEmployee} className="btn btn-danger">Delete</button>
                <Link to={"/edit/"+this.state.choosedEmp[0]}><button className="btn btn-primary">Edit</button></Link>
            </div>
        )
    }
}
