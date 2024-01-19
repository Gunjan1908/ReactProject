import React, { Component } from 'react'

 class EmployeeComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            Employee:[
                {id:101, empName:"Gunjan",empPost:"FullStack Developer", empSalary:"75000" ,empGender:"Female",empContact:8149679980},
                {id:101, empName:"Gunjan",empPost:"FullStack Developer", empSalary:"75000" ,empGender:"Female",empContact:8149679980},
                {id:101, empName:"Gunjan",empPost:"FullStack Developer", empSalary:"75000" ,empGender:"Female",empContact:8149679980},
                {id:101, empName:"Gunjan",empPost:"FullStack Developer", empSalary:"75000" ,empGender:"Female",empContact:8149679980},
                {id:101, empName:"Gunjan",empPost:"FullStack Developer", empSalary:"75000" ,empGender:"Female",empContact:8149679980}
            ]

             
        }
    }
    
    render() {
        const{Employee}= this.state;
        return (
            <div>
                <h1> Employee Details</h1>
                <table class ="table table-bordered table-striped">
                   <thead> <tr>
                        <th>EmpId</th><th>EmpName</th><th>EmpPost</th>
                        <th>EmpSalary</th><th>EmpGender</th><th>EmpContact</th>
                    </tr>
                    </thead>
                    <tbody>
                   { Employee.map((val,index) => {
                        return <tr key ={val.id}>
                            <td>{val.id}</td><td>{val.empName}</td><td>{val.empPost}</td>
                            <td>{val.empSalary}</td><td>{val.empGender}</td><td>{val.empContact}</td>
                            </tr>
                   }
                    
                    )}</tbody>
                </table>
            </div>
        )
    }
}

export default EmployeeComp
