import React, { useState, useEffect } from "react";
import './ContactForm.css'

const SchoolBudgetForm = (props) => {
    const initialFieldValues = {
        schoolNames: '',
        totalBudget: '',
        remainingBudget: '',
        spendingBudget:'',
       
    }

    var [values, setValues] = useState(initialFieldValues)

    useEffect(() => {
        if (props.currentId == '')
            setValues({
                ...initialFieldValues
            })
        else
            setValues({
                ...props.contactObjects[props.currentId]
            })
    }, [props.currentId, props.contactObjects])

    const handleInputChange = e => {
        var { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }
    const handleFormSubmit = e => {
        e.preventDefault();
        props.addOrEdit(values)
    }
    

    return (
        <div className="contactformfulldiv " style={{padding:'20px'}}>
        <form autoComplete="off" onSubmit={handleFormSubmit} className="contactformfulldivform" >
            <div className="form-row">
            

            <div className="form-group input-group ">
               
                <input className="form-control textfieldnameforstyle " placeholder="School Name" name="schoolNames"
                    value={values.schoolNames}
                required
                    onChange={handleInputChange}
                    />
            </div>
                    
                <div className="form-group input-group ">
                    
                    <input className="form-control textfieldnameforstyle" placeholder="Total Student" name="totalBudget"
                        value={values.totalBudget}
                    required
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group input-group ">
                   
                    <input className="form-control textfieldnameforstyle" placeholder="Spending Buget" name="spendingBudget"
                        value={values.spendingBudget}
                    required
                        onChange={handleInputChange}
                    />
                </div>
            
            <div className="form-group ">
                <input className="form-control textfieldnameforstyle" placeholder="Remaining Budget" name="remainingBudget"
                    value={values.remainingBudget}
                required
                    onChange={handleInputChange}
                />
            </div>
            </div>
            <br/>
            <div className="form-group ">
                <input type="submit" value={props.currentId == '' ? "Save" : "Update"} className="btn saveupdatecontactformbtn btn-block" />
            </div>
           
        </form >
        </div>
    );
}

export default SchoolBudgetForm;