import React, { useState, useEffect } from "react";
import ContactForm from "./ContactForm"
import firebaseDb from "firebase";
import { auth, db } from "./../components/firebase"
import './Contacts.css'
const Contacts = () => {
    var [contactObjects, setContactObjects] = useState({})
    var [currentId, setCurrentId] = useState('')
    const [userDetails, setUserDetails] = useState(null);
    const [list, setList] = useState(null);
    const [currentUser, setCurrentUser] = useState(null)

    useEffect(() => {
        firebaseDb.database().ref('contacts').on('value', snapshot => {
            if (snapshot.val() != null)
                setContactObjects({
                    ...snapshot.val()
                })
            else
                setContactObjects({})

        })
    }, [])

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) setCurrentUser(user);
            else setCurrentUser(null);
            getUserDetails();
        });
        getUserDetails();
    }, []);

    const getUserDetails = () => {
        if (auth?.currentUser?.email) {
            console.log(" user ", auth?.currentUser?.email);
            db.collection("clerksData")
                .where("email", "==", auth?.currentUser?.email)
                .get()
                .then((res) => {
                    console.log("user in contacts", res.docs.map((item) => item.data()));
                    let user = res.docs.map((item) => item.data());
                    user = user[0];
                    setUserDetails(user);
                    // console.log(" userdetails in contacts1 ", userDetails);
                    
                    let objs = Object.values(contactObjects);
                    objs.filter(item => item.schoolName == userDetails.schoolName);
                    // setUserDetails(objs);
                    setList(objs);
                    console.log("  ", objs);
                })
                .catch((e) => console.error(e));
        }
    }
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

        <div className="row" id="contactsfulldiv" >
            <div className="contactformdivincontact">

                <div className=" col-lg-4 col-md-4 col-sm-12 col-xs-12  " >
                    <ContactForm {...({ addOrEdit, currentId, contactObjects })} />
                </div>
            </div>

            <hr className="hrdivcontacts" />
            <br />
            <h2>Covid(19) Data List</h2>
            <div className="col-12 tabledivcontacts "  >
                <div className="tablediv" style={{ overflow: "auto" }}>
                    <table className="table table-dark" >
                        <thead className="" >
                            <tr>
                                <th scope="col"  >SchoolName</th>
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
                                list?.map((item,index) => {
                                    return <tr key={index}>
                                        <td>{item?.schoolName}</td>
                                        <td>{item?.totalStudent}</td>
                                        <td>{item?.firstDoss}</td>
                                        <td>{item?.remainingFirstDoss}</td>
                                        <td>{item?.secondDoss}</td>
                                        <td>{item?.remainingSecondDoss}</td>
                                        <td>
                                            <a className="btn text-primary" onClick={() => { setCurrentId(index) }}>
                                                <i className="fas fa-pencil-alt">Edit</i>
                                            </a>
                                            <a className="btn text-danger" onClick={() => { onDelete(index) }}>
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