import React, { Component } from "react";
import "firebase/database";
import FinanceResult from "./FinaceResult";
import HrResult from "../Download/HrResult";
import {Tab,pak,Tabs} from "react-bootstrap";
import AccountsResult from "../Download/AccountsResult";

    const Download =()=>{

      
    return (
        <div>
           <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
  <Tab eventKey="home" title="Finance">
 <FinanceResult/>
  <paki />
  </Tab>
  <Tab eventKey="profile" title="HR">
  <HrResult/>
  <paki />
  </Tab>
  <Tab eventKey="contact" title="Accounts" >
      <AccountsResult/>

  <paki />
  </Tab>
</Tabs>
        </div>
    )
}

export default Download