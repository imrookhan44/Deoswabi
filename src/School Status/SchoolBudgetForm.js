import React, { useState, useEffect } from "react";

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
        <form autoComplete="off" onSubmit={handleFormSubmit} style={{padding:"20px"}}>
            <div className="form-group input-group">
               
                <input className="form-control" placeholder="School Name" name="schoolNames"
                    value={values.schoolNames}
                    onChange={handleInputChange}
                />
            </div>
            <div className="form-row">
                <div className="form-group input-group col-md-6">
                    
                    <input className="form-control" placeholder="Total Student" name="totalBudget"
                        value={values.totalBudget}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group input-group col-md-6">
                   
                    <input className="form-control" placeholder="Spending Buget" name="spendingBudget"
                        value={values.spendingBudget}
                        onChange={handleInputChange}
                    />
                </div>
            </div>
            <div className="form-group">
                <input className="form-control" placeholder="Remaining Budget" name="remainingBudget"
                    value={values.remainingBudget}
                    onChange={handleInputChange}
      SA          />
            </div>
            <div className="form-group">
                <input type="submit" value={props.currentId == '' ? "Save" : "Update"} className="btn btn-primary btn-block" />
            </div>
           
        </form >
    );
}

export default SchoolBudgetForm;