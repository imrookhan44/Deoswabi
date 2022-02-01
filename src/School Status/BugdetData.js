import React, { useState, useEffect } from "react";
import SchoolBudgetForm from "./SchoolBudgetForm";
import firebaseDb from "firebase";
import './BudgetData.css'

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
           
            <div className="">
            <div className="row budgetdatarowschoolbgform " id="divrow"  >
            <div className="col-md-4 col-sm-12 col-xs-12 schoolbudgetformdiv" >
                    <SchoolBudgetForm {...({ addOrEdit, currentId, contactObjects })} />
                </div>
                <hr/>
                <br/>
                <h2>Budget Data List</h2>
                <br/>
                <div className="col-12 schoolbudgetformdiv " style={{overflow: "auto"}} >
                    <table className="table table-dark " >
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
            </div>
        </>
    );
}

export default BudgetData;