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


      <Tabs defaultActiveKey="CovidData" id="uncontrolled-tab-example" className="CovidData12 mb-3">

        <Tab eventKey="CovidData" title="Covid Data">
          <div className="text-center">
            <h2 className="Headinginadmin">Enter Covid(19) Data</h2>
          </div>
          <Contacts />
        </Tab>
        <Tab eventKey="profile" title="BudgetData">
          <div className="text-center">
            {/* <h2 className="Headinginadmin">Enter BudgetData</h2> */}
          </div>
          <BudgetData />
        </Tab>
        <Tab eventKey="PND" title="P & D">
          <div className="text-center">
          </div>
          <Pnd />
        </Tab>
      </Tabs>
    </div>
  );
}

