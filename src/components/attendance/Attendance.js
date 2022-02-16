import React, { useState, useEffect } from 'react';
import { Table, Tab, Tabs } from 'react-bootstrap';
import './attendace.css'
import NonTeaching from './nonTeaching/NonTeaching';
import Teaching from './teaching/Teaching';
import Student from './student/Student';
function Attendance() {

    return (
        <div>
            {/* <h1>Attendance</h1> */}
            <div className='container-fluid'>
                <Tabs defaultActiveKey="Teaching" id="uncontrolled-tab-example" className="mb-3">
                    <Tab eventKey="Teaching" title="Teaching">
                        <Teaching />
                    </Tab>
                    <Tab eventKey="profile" title="Non-Teaching">
                        <NonTeaching />
                    </Tab>
                    <Tab eventKey="contact" title="Student" >
                        <Student />
                    </Tab>
                </Tabs>
            </div>
        </div>
    )
}

export default Attendance;
