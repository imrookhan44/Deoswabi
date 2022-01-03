import React, { useState, useEffect } from "react";

const ContactForm = (props) => {
    const initialFieldValues = {
        schoolName: '',
        totalStudent: '',
        firstDoss: '',
        remainingFirstDoss: '',
        secondDoss:'',
        remainingSecondDoss:'',
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
               
                <input className="form-control" placeholder="School Name" name="schoolName"
                    value={values.schoolName}
                    onChange={handleInputChange}
                />
            </div>
            <div className="form-row">
                <div className="form-group input-group col-md-6">
                    
                    <input className="form-control" placeholder="Total Student" name="totalStudent"
                        value={values.totalStudent}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group input-group col-md-6">
                   
                    <input className="form-control" placeholder="firstDoss" name="firstDoss"
                        value={values.firstDoss}
                        onChange={handleInputChange}
                    />
                </div>
            </div>
            <div className="form-group">
                <input className="form-control" placeholder="remainingFirstDoss" name="remainingFirstDoss"
                    value={values.remainingFirstDoss}
                    onChange={handleInputChange}
                />
            </div>
            <div className="form-group input-group col-md-6">
                   
                    <input className="form-control" placeholder="Second Doss" name="secondDoss"
                        value={values.secondDoss}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group input-group col-md-6">
                   
                    <input className="form-control" placeholder="Remaining in Second Doss" name="remainingSecondDoss"
                        value={values.remainingSecondDoss}
                        onChange={handleInputChange}
                    />
                </div>
            <div className="form-group">
                <input type="submit" value={props.currentId == '' ? "Save" : "Update"} className="btn btn-primary btn-block" />
            </div>
        </form >
    );
}

export default ContactForm;