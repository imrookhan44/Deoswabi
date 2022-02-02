import React, { useState, useEffect } from 'react';
import firebaseDb from "firebase";
import SchoolBudgetForm from '../../School Status/SchoolBudgetForm';
import ContactForm from '../../School Status/ContactForm';
import './all.css'
function AllData() {

    var [contactObjects, setContactObjects] = useState({})
    var [currentId, setCurrentId] = useState('')

    useEffect(() => {
        firebaseDb.database().ref('contacts').on('value', snapshot => {
            if (snapshot.val() != null)
                setContactObjects({
                    ...snapshot.val()
                })
            else
                setContactObjects({})
        })
    }, [])// similar to componentDidMount

    const addOrEdit = obj => {
        if (currentId == '')
            firebaseDb.database().ref('contacts').push(
                obj,
                err => {
                    if (err)
                        console.log(err)
                    else
                        setCurrentId('')
                }
            )
        else
            firebaseDb.database().ref(`contacts/${currentId}`).set(
                obj,
                err => {
                    if (err)
                        console.log(err)
                    else
                        setCurrentId('')
                }
            )
    }

    const onDelete = key => {
        if (window.confirm('Are you sure to delete this record?')) {

            firebaseDb.database().ref(`contacts/${key}`).remove(
                err => {
                    if (err)
                        console.log(err)
                    else
                        setCurrentId('')
                }
            )
        }
    }
    return (
        <div>
            <div className="row p-2"  >
                {/* <div className="col-md-4 col-sm-12 col-xs-12" > */}
                <ContactForm {...({ addOrEdit, currentId, contactObjects })} />
                {/* </div> */}
                {/* <hr/>
        <br/> */}
                {/* <h2>Budget Data List</h2> */}
                <br />
                <div className="col-12  p-4 " style={{ overflow: "auto" }} >
                    <table className="table table-dark " >
                        <thead className="thead-light">
                            <tr>
                                {/* <th scope="col">#</th> */}
                                <th scope="col">School Name</th>
                                <th scope="col">Total</th>
                                <th scope="col">1st Doss</th>
                                <th scope="col">Remaining in First Doss</th>
                                <th scope="col">2nd Doss</th>
                                <th scope="col">Remaining in Second Doss</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Object.keys(contactObjects).map(id => {
                                    return <tr key={id}>
                                        <td>{contactObjects[id].schoolName}</td>
                                        <td>{contactObjects[id].totalStudent}</td>
                                        <td>{contactObjects[id].firstDoss}</td>
                                        <td>{contactObjects[id].remainingFirstDoss}</td>
                                        <td>{contactObjects[id].secondDoss}</td>
                                        <td>{contactObjects[id].remainingSecondDoss}</td>

                                        <td>
                                            <a className="btn text-primary" onClick={() => { setCurrentId(id) }}>
                                                <i className="fas fa-pencil-alt">Edit</i>
                                            </a>
                                            <a className="btn text-danger" onClick={() => { onDelete(id) }}>
                                                <i className="far fa-trash-alt">Delete</i>
                                            </a>
                                        </td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>

                </div>
            </div>
        </div>

    )
}

export default AllData;
