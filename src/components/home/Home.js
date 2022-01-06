import React, { useState, useEffect } from "react";
import "./Home.css";
import firebaseDb from "firebase";
import BudgetData from "../../School Status/BugdetData";
import Contacts from "../../School Status/Contacts";

export default function Home() {
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
  return (
    <div className="container">
      <div className="bg_img">
<Contacts/>
<BudgetData/>
        <tbody>
          {
            Object.keys(contactObjects).map(id => {
              return <tr key={id}>
                <td>{contactObjects[id].fullName}</td>
                <br />
                <td>{contactObjects[id].email}</td>
              </tr>
            })
          }
        </tbody>
      </div>
    </div>
  );
}

