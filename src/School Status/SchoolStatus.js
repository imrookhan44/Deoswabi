import React from "react";
import { useState, useEffect } from "react";
import firebaseDb from "firebase";
import { Tab, Tabs } from "react-bootstrap";
import BudgetResult from "./BudgetResult";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import './school.css'

const SchoolStatus = () => {
  var [contactObjects, setContactObjects] = useState({});
  var [currentId, setCurrentId] = useState("");

  useEffect(() => {
    firebaseDb
      .database()
      .ref("contacts")
      .on("value", (snapshot) => {
        if (snapshot.val() != null)
          setContactObjects({
            ...snapshot.val(),
          });
        else setContactObjects({});
      });
  }, []); // similar to componentDidMount
  return (
    <div>
      <Tabs
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="home" title="Covid-19">
          <div className="table-responsive ">
            <table className=" table table-dark " id="table-to-xls">
              {/* <table class="table table-hover"> */}
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">School Name</th>
                  <th scope="col">Total</th>
                  <th scope="col">1st Doss</th>
                  <th scope="col">Remaining in First Doss</th>
                  <th scope="col">2nd Doss</th>
                  <th scope="col">Remaining in Second Doss</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(contactObjects).map((id) => {
                  return (
                    <tr key={id}>
                      <td>{}</td>
                      <td>{contactObjects[id].schoolName}</td>
                      <td>{contactObjects[id].totalStudent}</td>
                      <td>{contactObjects[id].firstDoss}</td>
                      <td>{contactObjects[id].remainingFirstDoss}</td>
                      <td>{contactObjects[id].secondDoss}</td>
                      <td>{contactObjects[id].remainingSecondDoss}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <ReactHTMLTableToExcel
              id="table-to-xls"
              className="download-table-xls-button"
              table="table-to-xls"
              filename="tablexls"
              sheet="tablexls"
              buttonText="Download in excel file"
              
            />
          </div>
          <paki />
        </Tab>
        <Tab eventKey="profile" title="School Budget">
          <BudgetResult />
          <paki />
        </Tab>
        <Tab eventKey="contact" title="Daily Attendance">
          <paki />
        </Tab>
      </Tabs>
    </div>
  );
};
export default SchoolStatus;
