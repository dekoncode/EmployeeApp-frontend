import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

export default class EditEmployee extends Component {
    
    constructor(props) {
        super(props);

        this.onChangeEmpFirstName = this.onChangeEmpFirstName.bind(this);
        this.onChangeEmpSecondName = this.onChangeEmpSecondName.bind(this);
        this.onChangeEmpLogin = this.onChangeEmpLogin.bind(this);
        this.onChangeEmpWorkPhone = this.onChangeEmpWorkPhone.bind(this);
        this.onChangeEmpPersonalPhone = this.onChangeEmpPersonalPhone.bind(this);
        this.onChangeEmpWorkEmail = this.onChangeEmpWorkEmail.bind(this);
        this.onChangeEmpPersonalEmail = this.onChangeEmpPersonalEmail.bind(this);
        this.onChangeEmpLocation = this.onChangeEmpLocation.bind(this);
        this.onChangeEmpCompany = this.onChangeEmpCompany.bind(this);
        this.onChangeEmpRole = this.onChangeEmpRole.bind(this);
        this.onChangeEmpHourRate = this.onChangeEmpHourRate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            emp_firstname: '',
            emp_secondname: '',
            emp_login: '',
            emp_workphone: '',
            emp_personalphone: '',
            emp_workemail: '',
            emp_personalemail: '',
            emp_location: '',
            emp_company: '',
            emp_role: '',
            emp_hourrate:''
        }
    }

    componentDidMount () {

        axios.get('http://localhost:5000/'+ this.props.match.params.id)
        .then(res => {
            this.setState({
                emp_firstname: res.data.emp_firstname,
                emp_secondname: res.data.emp_secondname,
                emp_login: res.data.emp_login,
                emp_workphone: res.data.emp_workphone,
                emp_personalphone: res.data.emp_personalphone,
                emp_workemail: res.data.emp_workemail,
                emp_personalemail: res.data.emp_personalemail,
                emp_location: res.data.emp_location,
                emp_company: res.data.emp_company,
                emp_role: res.data.emp_role,
                emp_hourrate: res.data.emp_hourrate
            })
        }).catch(function(error) {console.log(error)})
    }

    onChangeEmpFirstName(e) {
        this.setState({emp_firstname: e.target.value})
    }

    onChangeEmpSecondName(e) {
        this.setState({emp_secondname: e.target.value})
    }

    onChangeEmpLogin(e) {
        this.setState({emp_login: e.target.value})
    }

    onChangeEmpWorkPhone(e) {
        this.setState({emp_workphone: e.target.value})
    }

    onChangeEmpPersonalPhone(e) {
        this.setState({emp_personalphone: e.target.value})
    }

    onChangeEmpWorkEmail(e) {
        this.setState({emp_workemail: e.target.value})
    }

    onChangeEmpPersonalEmail(e) {
        this.setState({emp_personalemail: e.target.value})
    }

    onChangeEmpLocation(e) {
        this.setState({emp_location: e.target.value})
    }

    onChangeEmpCompany(e) {
        this.setState({emp_company: e.target.value})
    }

    onChangeEmpRole(e) {
        this.setState({emp_role: e.target.value})
    }

    onChangeEmpHourRate(e) {
        this.setState({emp_hourrate: e.target.value})
    }

    onSubmit(e) {
        e.preventDefault();
        const { history } = this.props;
        if(history) {history.push('/')};

        console.log('Form submited')

        const newEmployee = {
            emp_firstname: this.state.emp_firstname,
            emp_secondname: this.state.emp_secondname,
            emp_login: this.state.emp_login,
            emp_workphone: this.state.emp_workphone,
            emp_personalphone: this.state.emp_personalphone,
            emp_workemail: this.state.emp_workemail,
            emp_personalemail: this.state.emp_personalemail,
            emp_location: this.state.emp_location,
            emp_company: this.state.emp_company,
            emp_role: this.state.emp_role,
            emp_hourrate:this.state.emp_hourrate
        }

        axios.post('http://localhost:5000/add', newEmployee)
            .then(res => console.log(res.data))

        this.setState({
            emp_firstname: '',
            emp_secondname: '',
            emp_login: '',
            emp_workphone: '',
            emp_personalphone: '',
            emp_workemail: '',
            emp_personalemail: '',
            emp_location: '',
            emp_company: '',
            emp_role: '',
            emp_hourrate:''
        })
    }
    
    
    render() {
        return (
            <div>
                <h2>Edit Employee</h2><br/>
                <h4>PERSONAL</h4>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>First Name:</label>
                        <input type="text"
                               className="form-control"
                               value={this.state.emp_firstname}
                               onChange={this.onChangeEmpFirstName}/>
                    </div>
                    <div className="form-group">
                        <label>Last Name:</label>
                        <input type="text"
                               className="form-control"
                               value={this.state.emp_secondname}
                               onChange={this.onChangeEmpSecondName}/>
                    </div>
                    <div className="form-group">
                        <label>Login:</label>
                        <input type="text"
                               className="form-control"
                               value={this.state.emp_login}
                               onChange={this.onChangeEmpLogin}/>
                    </div>

                <h4>CONTACT</h4>

                    <div className="form-group">
                        <label>Work Phone:</label>
                        <input type="text"
                               className="form-control"
                               value={this.state.emp_workphone}
                               onChange={this.onChangeEmpWorkPhone}/>
                    </div>
                    <div className="form-group">
                        <label>Personal Phone:</label>
                        <input type="text"
                               className="form-control"
                               value={this.state.emp_personalphone}
                               onChange={this.onChangeEmpPersonalPhone}/>
                    </div>
                    <div className="form-group">
                        <label>Work Email:</label>
                        <input type="text"
                               className="form-control"
                               value={this.state.emp_workemail}
                               onChange={this.onChangeEmpWorkEmail}/>
                    </div>
                    <div className="form-group">
                        <label>Personal Email:</label>
                        <input type="text"
                               className="form-control"
                               value={this.state.emp_personalemail}
                               onChange={this.onChangeEmpPersonalEmail}/>
                    </div>

                <h4>EMPLOYMENT</h4>

                    <div className="form-group">
                        <label>Business Location:</label>
                        <input type="text"
                               className="form-control"
                               value={this.state.emp_location}
                               onChange={this.onChangeEmpLocation}/>
                    </div>
                    <div className="form-group">
                        <label>Company:</label>
                        <input type="text"
                               className="form-control"
                               value={this.state.emp_company}
                               onChange={this.onChangeEmpCompany}/>
                    </div>
                    <div className="form-group">
                        <label>Role:</label>
                        <input type="text"
                               className="form-control"
                               value={this.state.emp_role}
                               onChange={this.onChangeEmpRole}/>
                    </div>
                    <div className="form-group">
                        <label>Hourly rate:</label>
                        <input type="text"
                               className="form-control"
                               value={this.state.emp_hourrate}
                               onChange={this.onChangeEmpHourRate}/>
                    </div>

                    <div className="form-group">
                      <input type="submit" value="Edit Employee" className="btn btn-primary"/>
                    </div>
                </form>


            </div>
        )
    }
}
