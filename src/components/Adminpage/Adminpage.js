import React, { useState, useEffect } from "react";
import "./Adminpage.css";
import firebaseDb from "firebase";
import BudgetData from "../../School Status/BugdetData";
import Contacts from "../../School Status/Contacts";

export default function Adminpage() {
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
    <div className=" fullcontianerofhome">
      
  <div className="alldivs">
<h2 className="Headinginadmin">Enter Covid(19) Data</h2>
<Contacts/>
<h1 className="Headinginadmin">Enter Budget Data</h1>

<BudgetData/>
    </div>    
        {/* <tbody className="unknowthings">
          {
            Object.keys(contactObjects).map(id => {
              return <tr key={id}>
                <td>{contactObjects[id].fullName}</td>
                <br />
                <td>{contactObjects[id].email}</td>
              </tr>
            })
          }
        </tbody> */}
      
     
    </div>
  );
}

