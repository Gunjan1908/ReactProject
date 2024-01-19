import React, { Component } from 'react'
import './external.css'
 class UserFormComp extends Component {
    ucourse = ["angular", "react", "java", "python", "nodejs"]

    constructor(props) {
        super(props)

        this.state = {
            fname: " ",
            password: "",
            email: " ",
            courses: ""

        }
    }
    inputChangeHandler = (event) => {
        // console.log(event.target.type)
        // console.log(event.target.name)
        // console.log(event.target.value)
        const { type, name, value } = event.target;
        this.setState({ [name]: value })

    }
    checkData = (event) => {
        event.preventDefault();
        if (this.state.fname === "") {
            window.alert("full name required");
            return false;
        }
        if (!this.state.fname.match("^[a-zA-Z ]{3,20}$")) {
            window.alert("full name must contain only character min-3 and max-20");
            return false;
        }
        if (this.state.password === "") {
            window.alert("password required");
            return false;
        }
        if (!this.state.password.match("^[a-zA-Z ]{3,20}$")) {
            window.alert("full password must contain only character min-3 and max-20");
            return false;
        }
        if (this.state.email === "") {
            window.alert("Email required");
            return false;
        }
        if (!this.state.email.match("^[a-zA-Z ]{3,20}$")) {
            window.alert("Email must contain only character min-3 and max-20");
            return false;
        }

        if (this.state.contact === "") {
            window.alert("contact no required");
            return false;
        }
        if (!this.state.contact.match("^[0-9]{10}$")) {
            window.alert("contact number wrong");
            return false;
        }
        if (this.state.courses === "") {
            window.alert("courses required");
            return false;
        }
        window.alert(JSON.stringify(this.state))
    }

    render() {
        const { fname } = this.state;
        const { password } = this.state;
        const { email } = this.state;
        const { contact } = this.state;
        const { courses } = this.state;
        return (
            <div className='container text-center'>
                <h1>This is User Form component</h1>
                <form className='myform' onSubmit={this.checkData}>
                    <label className='form-label'>Enter the FullName : </label>
                    <input value={fname} className='form-control' type='text' name='fname' onChange={this.inputChangeHandler}></input>
                    <label className='form-label'>Enter password : </label>
                    <input value={password} className='form-control' type='password' name='password' onChange={this.inputChangeHandler}></input>

                    <label className='form-label'>Enter email : </label>
                    <input value={email} className='form-control' type='text' name='email' onChange={this.inputChangeHandler}></input>

                    <label className='form-label'>Enter contact : </label>
                    <input value={contact} className='form-control' type='text' name='contact' onChange={this.inputChangeHandler}></input>

                    <div className='form-group'>
                        <label className='form-label'>select your course</label>
                        <select name='courses' className='form-control' onChange={this.inputChangeHandler}>
                            <option value="">select your course</option>
                            {
                                this.ucourse.map((val, index) => {
                                    return <option value={val} key={index}>{val}</option>
                                })
                            }
                        </select>
                    </div>

                    <div className='text-center'>
                        <button type='submit' className='btn btn-success mt-2 ' >submit</button>
                    </div>
                </form>

            </div>
        )
    }
}

export default UserFormComp