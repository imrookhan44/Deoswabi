import React, { useEffect, useState } from 'react'
import { Table, Tab, Tabs } from 'react-bootstrap'
import { db } from '../../components/firebase'
import './attendance1.css'
function Attendance1() {
    const [data, setData] = useState([{
        emisCode: "",
        total: "",
        present: "",
        absent: "",
        leave: "",
        nonTeachingTotal: "",
        present2: "",
        absent2: "",
        leave2: "",
        total3: "",
        present3: "",
        absent3: "",
        leave3: "",
        dateAndTime: "",

    }]);

    useEffect(() => {
        db.collection("wholeAttendance").onSnapshot((snapshot) => {
            setData(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                }))
            );
        });
        console.log("data2354234:", data);
    }, []);

    return (
        <>
            <div className='row-attend'>
                <div className='col-12'>
                    <Table>
                        <thead>
                            <tr>
                                <th>index</th>
                                <th>EMIS Code</th>
                                <th>Teaching Total</th>
                                <th>Absent</th>
                                <th>present</th>
                                <th>Leave</th>
                                <th>Non Teaching Total</th>
                                <th>Absent</th>
                                <th>present</th>
                                <th>Leave</th>
                                <th>Student Total</th>
                                <th>Absent</th>
                                <th>present</th>
                                <th>Leave</th>
                                <th>Date/Time</th>

                            </tr>
                        </thead>



                        {data.map((data, index) => (
                            <tbody key={index}>
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{data.data?.emisCode}</td>
                                    <td>{data.data?.total}</td>
                                    <td>{data.data?.absent}</td>
                                    <td>{data.data?.present}</td>
                                    <td>{data.data?.leave}</td>
                                    <td>{data.data?.nonTeachingTotal}</td>
                                    <td>{data.data?.absent2}</td>
                                    <td>{data.data?.present2}</td>
                                    <td>{data.data?.leave2}</td>
                                    <td>{data.data?.total3}</td>
                                    <td>{data.data?.absent3}</td>
                                    <td>{data.data?.present3}</td>
                                    <td>{data.data?.leave3}</td>
                                    <td>{data.data?.dateAndTime}</td>

                                </tr>
                            </tbody>
                        ))}




                    </Table>

                </div>
            </div>




        </>
    )
}

export default Attendance1