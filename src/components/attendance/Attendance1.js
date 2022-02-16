import React, { useEffect, useState } from 'react'
import { Table, Tab, Tabs } from 'react-bootstrap'
import { db } from '../../components/firebase'
import './attendance1.css'
function Attendance1() {
    const [data1, setData1] = useState([]);
    const [data2, setData2] = useState([]);
    const [data3, setData3] = useState([]);
    useEffect(() => {
        db.collection("Teaching").onSnapshot((snapshot) => {
            setData1(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                }))
            );
        });
        console.log("data:", data1);
    }, []);


    useEffect(() => {
        db.collection("nonTeaching").onSnapshot((snapshot) => {
            setData2(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                }))
            );
        });
        console.log("data:", data2);
    }, []);
    useEffect(() => {
        db.collection("Students").onSnapshot((snapshot) => {
            setData3(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                }))
            );
        });
        console.log("data:", data3);
    }, []);
    return (
        <>
            <Tabs defaultActiveKey="teaching" id="uncontrolled-tab-example" className="mb-3">
                <Tab eventKey="teaching" title="Teaching">
                <div className='teaching mt-4' id='Teaching'>
                <h1>Teaching</h1>
                <Table striped bordered hover size="lg">
                    <tr>
                        <th scope="col">EmisCode</th>
                        <th scope="col">Total</th>
                        <th scope="col">Present</th>
                        <th scope="col">absent</th>
                        <th scope="col">Leave</th>
                        <th scope="col">Date And Time</th>

                    </tr>
                    {data1?.map(({ id, data, index }) => (
                        <tr key={id}>
                            <td>{data?.emisCode}</td>
                            <td>{data?.total}</td>
                            <td>{data?.present}</td>
                            <td>{data?.absent}</td>
                            <td>{data?.leave}</td>
                            <td>{data?.dateAndTime}</td>
                        </tr>
                    ))}

                </Table>
            </div>
                </Tab>
                <Tab eventKey="nonTeaching" title="Non Teaching">

                <div div className='' id='nonTeaching'>
                <h1>Non Teaching</h1>

                <Table striped bordered hover size="lg" className="table mt-4" >
                    <tr>
                        <th scope="col">EmisCode</th>
                        <th scope="col">Total</th>
                        <th scope="col">Present</th>
                        <th scope="col">absent</th>
                        <th scope="col">Leave</th>
                        <th scope="col">Date And Time</th>
                    </tr>
                    {data2?.map(({ id, data }) => (
                        <tr key={id}>
                            <td>{data?.emisCode}</td>
                            <td>{data?.total}</td>
                            <td>{data?.present}</td>
                            <td>{data?.absent}</td>
                            <td>{data?.leave}</td>
                            <td>{data?.dateAndTime}</td>
                        </tr>
                    ))}
                </Table>
            </div>

                </Tab>
                <Tab eventKey="students" title="Students">
                <div className='' id='student'>
                <h1>Students</h1>
                <Table striped bordered hover size="lg" className="table mt-4" >
                    <tr>
                        <th scope="col">emisCode</th>
                        <th scope="col">Total</th>
                        <th scope="col">Present</th>
                        <th scope="col">absent</th>
                        <th scope="col">Leave</th>
                        <th scope="col">Date And Time</th>
                    </tr>
                    {data3?.map(({ id, data }) => (
                        <tr key={id}>
                            <td>{data?.emisCode}</td>
                            <td>{data?.total}</td>
                            <td>{data?.present}</td>
                            <td>{data?.absent}</td>
                            <td>{data?.leave}</td>
                            <td>{data?.dateAndTime}</td>
                        </tr>
                    ))}
                </Table>
            </div>
                </Tab>
            </Tabs>
         

         

        </>
    )
}

export default Attendance1