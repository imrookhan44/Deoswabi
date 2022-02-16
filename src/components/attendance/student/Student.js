import React, { useState, useEffect } from 'react';
import { db } from '../../firebase'
import { Table } from 'react-bootstrap'
import './student.css'
function Student() {
    const [total, setTotal] = useState("");
    const [present, setPresent] = useState("");
    const [absent, setAbsent] = useState("");
    const [leave, setLeave] = useState("");
    const [teaching, setTeaching] = useState("");
    const [nonTeaching, setNonTeaching] = useState("");
    const [Student, setStudent] = useState("");
    const [emisCode, setEmisCode] = useState("")
    const [data2, setData2] = useState([]);
    const [dateAndTime, setDateAndTime] = useState("");

    useEffect(() => {
        db.collection("Students").onSnapshot((snapshot) => {
            setData2(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                }))
            );
        });
        console.log("data:", data2);
    }, []);
    const submit = (e) => {
        e.preventDefault();
        db.collection("Students").add({
            total: total,
            present: present,
            absent: absent,
            leave: leave,
            dateAndTime: dateAndTime,
            emisCode: emisCode,

        });
        setTotal("");
        setPresent("");
        setAbsent("");
        setLeave("");
        setDateAndTime("");
        setEmisCode("");

    };
    return (

        <>

            <Table striped bordered hover size="lg">
                <thead>
                    <tr>
                        <th>EmisCode</th>
                        <th>Total</th>
                        <th>Present</th>
                        <th>Absent</th>
                        <th>Leave</th>
                        <th>Date And Time</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <input type="number" placeholder="Enter EmisCode"
                                value={emisCode}
                                onChange={(e) => setEmisCode(e.target.value)} /></td>
                        <td>
                            <input type="number" placeholder="Enter Total"
                                value={total}
                                onChange={(e) => setTotal(e.target.value)} /></td>
                        <td><input type="number" placeholder='Enter Present'
                            value={present}
                            onChange={(e) => setPresent(e.target.value)} /></td>
                        <td><input type="number" placeholder='Enter Absent'
                            value={absent}
                            onChange={(e) => setAbsent(e.target.value)} /></td>
                        <td><input type="number" placeholder='Enter Leaves'
                            value={leave}
                            onChange={(e) => setLeave(e.target.value)} /></td>
                        <td>  <input type="datetime-local" id="birthdaytime" name="birthdaytime"
                            value={dateAndTime}
                            onChange={(e) => setDateAndTime(e.target.value)} /></td>
                    </tr>

                </tbody>

            </Table>
            <div className='text-center'>
                <button type="button" class="btn btn-outline-primary mt-1" id='btnbtn' onClick={submit}>Save</button>
            </div>
            <>
                <Table size="lg" className="table mt-4" id='student'>
                    <tr>
                        <th scope="col">Numbers</th>
                        <th scope="col">EmisCode</th>
                        <th scope="col">Total</th>
                        <th scope="col">Present</th>
                        <th scope="col">absent</th>
                        <th scope="col">Leave</th>
                        <th scope="col">Date And Time</th>
                        <th scope="col">Update</th>
                        <th scope="col">Delete</th>
                    </tr>
                    {data2?.map(({ id, data, index }) => (
                        <tr key={id}>
                            <td>{index + 1}</td>
                            <td>{data?.emisCode}</td>
                            <td>{data?.total}</td>
                            <td>{data?.present}</td>
                            <td>{data?.absent}</td>
                            <td>{data?.leave}</td>
                            <td>{data?.dateAndTime}

                            </td>
                            <td>
                                <button className='btn-info' onClick={() => db.collection("Students").doc(id).update({

                                    total: total,
                                    present: present,
                                    absent: absent,
                                    leave: leave,
                                    dateAndTime: dateAndTime,
                                    emisCode: emisCode,
                                })}>Update</button>
                            </td>
                            <td>
                                <button className='btn btn-danger' onClick={() => db.collection("Students").doc(id).delete()} style={{ color: "black" }}>Delete</button>

                            </td>
                        </tr>
                    ))}
                </Table>
            </>
        </>
    )
}

export default Student;
