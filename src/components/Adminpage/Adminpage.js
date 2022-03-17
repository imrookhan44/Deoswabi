import React, { useState, useEffect } from "react";
import "./Adminpage.css";
import firebaseDb from "firebase";
import BudgetData from "../../School Status/BugdetData";
import Contacts from "../../School Status/Contacts";
import { Table, Tab, Tabs } from 'react-bootstrap';
import Pnd from "../../School Status/Pnd/Pnd";
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

      {/* <div className="alldivs">
      
        <Contacts />
        <h1 className="Headinginadmin">Enter Budget Data</h1>

        <BudgetData />
      </div> */}
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
      <Tabs defaultActiveKey="CovidData" id="uncontrolled-tab-example" className="mb-3">

        <Tab eventKey="CovidData" title="Covid Data">
          <div className="text-center">
            <h2 className="Headinginadmin">Enter Covid(19) Data</h2>
          </div>
          <Contacts />
        </Tab>
        <Tab eventKey="profile" title="BudgetData">
          <div className="text-center">
            <h2 className="Headinginadmin">Enter BudgetData</h2>
          </div>
          <BudgetData />
        </Tab>
        <Tab eventKey="PND" title="P & D">
          <div className="text-center">
            {/* <h2 className="Headinginadmin"></h2> */}
          </div>
          <Pnd />
        </Tab>
      </Tabs>
    </div>
  );
}

