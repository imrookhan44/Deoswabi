import React, { useState, useEffect } from "react";
import SchoolBudgetForm from "./SchoolBudgetForm";
import firebaseDb from "firebase";

const BudgetData = () => {

    var [contactObjects, setContactObjects] = useState({})
    var [currentId, setCurrentId] = useState('')

    useEffect(() => {
        firebaseDb.database().ref('Budget').on('value', snapshot => {
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
        firebaseDb.database().ref('Budget').push(
                obj,
                err => {
                    if (err)
                        console.log(err)
                    else
                        setCurrentId('')
                }
            )
        else
        firebaseDb.database().ref(`Budget/${currentId}`).set(
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
            debugger
           firebaseDb.database().ref(`Budget/${key}`).remove(
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
        <>
           
            <div className="row">
            <div className="col-md-5">
                    <SchoolBudgetForm {...({ addOrEdit, currentId, contactObjects })} />
                </div>
                <div className="col-md-7">
                    <table className="table table-borderless table-stripped">
                        <thead className="thead-light">
                            <tr>
                                <th>School Name</th>
                                <th>Total Budget</th>
                                <th>Spending Budget </th>
                                <th>Remaining Budget </th>
                              
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Object.keys(contactObjects).map(id => {
                                    return <tr key={id}>
                                        <td>{contactObjects[id].schoolNames}</td>
                                        <td>{contactObjects[id].totalBudget}</td>
                                        <td>{contactObjects[id].spendingBudget}</td>
                                        <td>{contactObjects[id].remainingBudget}</td>
                                      
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
        </>
    );
}

export default BudgetData;