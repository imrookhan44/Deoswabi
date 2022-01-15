import React, { useState, useEffect } from "react";
import ContactForm from "./ContactForm"
import firebaseDb from "firebase";
import './Contacts.css'
const Contacts = () => {

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
            debugger
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
    // col-lg-8 col-md-8 col-sm-12 col-xs-12 
    return (
            
            <div className="row" id="contactsfulldiv" >
               <div className="contactformdivincontact">

                <div className=" col-lg-4 col-md-4 col-sm-12 col-xs-12  " >
                    <ContactForm {...({ addOrEdit, currentId, contactObjects })} />
                </div>
               </div>

               <hr className="hrdivcontacts"/>
               <br/>
               <h2>Covid(19) Data List</h2>
                <div className="col-12 tabledivcontacts "  >
                <div  className="tablediv" style={{overflow:"auto"}}>
                    <table  className="table  table-dark" >
                        <thead className="" >
                            <tr>
                                <th scope="col"  >School Name</th>
                                <th scope="col">Total Student</th>
                                <th scope="col">First Doss </th>
                                <th scope="col">Remaining First Doss </th>
                                <th scope="col">Second Doss </th>
                                <th scope="col">Remaining Second Doss </th>
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
               
  );
}

export default Contacts;