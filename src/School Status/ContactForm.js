import React, { useState, useEffect } from "react";
import './ContactForm.css'

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
        <div className="contactformfulldiv">
        <form autoComplete="off" onSubmit={handleFormSubmit} className=" contactformfulldivform">
            <div className="form">

            <div className="form-group input-group ">
               
                <input className="form-control textfieldnameforstyle"  placeholder="School Name" name="schoolName" 
                    value={values.schoolName}
                   required
                    onChange={handleInputChange}
                    />
                </div>
                
            
            <br/>
           
                <div className="form-group input-group ">
                    
                    <input className="form-control textfieldnameforstyle"  placeholder="Total Student" name="totalStudent" 
                        value={values.totalStudent}
                       required
                        onChange={handleInputChange}
                    />
                </div>
                <br/>
                <div className="form-group input-group ">
                   
                    <input className="form-control textfieldnameforstyle"  placeholder="firstDoss" name="firstDoss"
                        value={values.firstDoss}
                       required
                        onChange={handleInputChange}
                    />
                </div>
            
            <br/>
            <div className="form-group">
                <input className="form-control textfieldnameforstyle"  placeholder="remainingFirstDoss" name="remainingFirstDoss"
                    value={values.remainingFirstDoss}
                   required
                    onChange={handleInputChange}
                />
            </div>
            <br/>
            <div className="form-group input-group ">
                   
                    <input className="form-control textfieldnameforstyle"  placeholder="Second Doss" name="secondDoss"
                        value={values.secondDoss}
                       required
                        onChange={handleInputChange}
                    />
                </div>
                <br/>
                <div className="form-group input-group ">
                   
                    <input className="form-control textfieldnameforstyle"  placeholder="Remaining in Second Doss" name="remainingSecondDoss"
                        value={values.remainingSecondDoss}
                       required
                        onChange={handleInputChange}
                    />
                </div>
                </div>
                <br/>
            <div className="form-group contactFormsavebtn">
                <input type="submit" value={props.currentId == '' ? "Save" : "Update"} className="btn  btn-block saveupdatecontactformbtn" />
            </div>
        </form >
        </div>
    );
}

export default ContactForm;