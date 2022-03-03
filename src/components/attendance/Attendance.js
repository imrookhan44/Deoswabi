import React, { useState, useEffect } from 'react'
import { db } from '../firebase';
import "./attendace.css"
import { Table } from "react-bootstrap"
import ReactHTMLTableToExcel from "react-html-table-to-excel";
function Attendance() {
    const [data, setData] = useState([]);
    const [emisCode, setEmisCode] = useState("");
    const [total, setTotal] = useState("");
    const [present, setPresent] = useState("");
    const [absent, setAbsent] = useState("");
    const [leave, setLeave] = useState("");
    const [nonTeachingTotal, setNonTeachingTotal] = useState("");
    const [present2, setPresent2] = useState("");
    const [absent2, setAbsent2] = useState("");
    const [leave2, setLeave2] = useState("");
    const [total3, setTotal3] = useState("");
    const [present3, setPresent3] = useState("");
    const [absent3, setAbsent3] = useState("");
    const [leave3, setLeave3] = useState("");
    const [dateAndTime, setDateAndTime] = useState("");
    const [dataIdToBeUpdated, setDataIdToBeUpdated] = useState("");
    const [updatedEmisCode, setUpdatedEmisCode] = useState("");
    const [updatedTotal, setUpdatedTotal] = useState("");
    const [updatedPresent, setUpdatedPresent] = useState("");
    const [updatedAbsent, setUpdatedAbsent] = useState("");
    const [updatedLeave, setUpdatedLeave] = useState("");
    const [updatedDateAndTime, setUpdatedDateAndTime] = useState("");
    const [updatedNonTeachingTotal, setUpdatedNonTeachingTotal] = useState("");
    const [updatedPresent2, setUpdatedPresent2] = useState("");
    const [updatedAbsent2, setUpdatedAbsent2] = useState("");
    const [updatedLeave2, setUpdatedLeave2] = useState("");
    const [updatedTotal3, setUpdatedTotal3] = useState("");
    const [updatedPresent3, setUpdatedPresent3] = useState("");
    const [updatedAbsent3, setUpdatedAbsent3] = useState("");
    const [updatedLeave3, setUpdatedLeave3] = useState("");


    const addData = (e) => {
        e.preventDefault();
        db.collection("wholeAttendance").add({
            emisCode: emisCode,
            total: total,
            present: present,
            absent: absent,
            leave: leave,
            // dateAndTime: dateAndTime,
            nonTeachingTotal: nonTeachingTotal,
            present2: present2,
            absent2: absent2,
            leave2: leave2,
            total3: total3,
            present3: present3,
            absent3: absent3,
            leave3: leave3,
            date44: date44,
        });
        setEmisCode("");
        setTotal("");
        setPresent("");
        setAbsent("");
        setLeave("");
        // setDateAndTime("");
        setNonTeachingTotal("");

        setPresent2("");
        setAbsent2("");
        setLeave2("");
        setTotal3("");
        setPresent3("");
        setAbsent3("");
        setLeave3("");
        setDate44("");


    };


    const updateData = (e) => {
        e.preventDefault();
        db.collection("wholeAttendance").doc(dataIdToBeUpdated).update({
            emisCode: updatedEmisCode,
            total: updatedTotal,
            present: updatedPresent,
            absent: updatedAbsent,
            leave: updatedLeave,
            nonTeachingTotal: updatedNonTeachingTotal,
            present2: updatedPresent2,
            absent2: updatedAbsent2,
            leave2: updatedLeave2,
            total3: updatedTotal3,
            present3: updatedPresent3,
            absent3: updatedAbsent3,
            leave3: updatedLeave3,
            // dateAndTime: updatedDateAndTime,
        });
        setDataIdToBeUpdated("");
        setUpdatedEmisCode("");
        setUpdatedTotal("");
        setUpdatedPresent("");
        setUpdatedAbsent("");
        setUpdatedLeave("");
        // setUpdatedDateAndTime("");
        setUpdatedNonTeachingTotal("");
        setUpdatedPresent2("");
        setUpdatedAbsent2("");
        setUpdatedLeave2("");
        setUpdatedTotal3("");
        setUpdatedPresent3("");
        setUpdatedAbsent3("");
        setUpdatedLeave3("");
    };
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
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const today = month + "-" + day + "-" + year;
    // console.log("today:", today);
    const [date44, setDate44] = useState(today);
    // console.log("date44:", date44);
    return (
        <>
            <div className='container-fluid-atted'>

                <div className='container-attend'>
                    {!dataIdToBeUpdated ? (
                        <div className='row-attend'>


                            <div className='col-3 left'>
                                <input className='inputat' type="number" placeholder='EMIS Code'
                                    name='emisCode'
                                    value={emisCode}
                                    onChange={(e) => setEmisCode(e.target.value)}
                                />
                            </div>
                            <div className='col-6 center'>
                                <Table>
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Total</th>
                                            <th>Absent</th>
                                            <th>present</th>
                                            <th>Leave</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Teaching</td>
                                            <td><input className='input2' type="number" placeholder='Total' value={total}
                                                required
                                                name='total'
                                                onChange={(e) => setTotal(e.target.value)}
                                            /></td>

                                            <td><input className='input2' type="number" placeholder='Absent' value={absent}
                                                required
                                                name='absent'
                                                onChange={(e) => setAbsent(e.target.value)}
                                            />
                                            </td>
                                            <td><input className='input2' type="number" placeholder='present' value={present}
                                                required
                                                name='present'
                                                onChange={(e) => setPresent(e.target.value)}


                                            /></td>
                                            <td><input className='input2' type="number" placeholder='Leave' value={leave}
                                                name='leave'
                                                required
                                                onChange={(e) => setLeave(e.target.value)}


                                            /></td>
                                        </tr>
                                        <br />
                                        <tr>
                                            <td>Non Teaching</td>
                                            <td><input className='input2' type="number" value={nonTeachingTotal}
                                                name='nonTeachingTotal'
                                                placeholder='Total'
                                                required
                                                onChange={(e) => setNonTeachingTotal(e.target.value)}


                                            /></td>
                                            <td><input className='input2' type="number" value={absent2}
                                                name='absent2'
                                                placeholder='Absent'
                                                required

                                                onChange={(e) => setAbsent2(e.target.value)}


                                            /></td>
                                            <td><input className='input2' type="number" value={present2}
                                                name='present2'
                                                placeholder='present'
                                                required
                                                onChange={(e) => setPresent2(e.target.value)}


                                            /></td>
                                            <td><input className='input2' type="number" value={leave2}
                                                name='leave2'
                                                placeholder='Leave'
                                                required

                                                onChange={(e) => setLeave2(e.target.value)}


                                            /></td>
                                        </tr>
                                        <br />
                                        <tr>
                                            <td>Student</td>
                                            <td><input className='input2' type="number" value={total3}
                                                name='total3'
                                                placeholder='Total'
                                                required
                                                onChange={(e) => setTotal3(e.target.value)}

                                            /></td>
                                            <td><input className='input2' type="number" value={absent3}
                                                name='absent3'
                                                placeholder='Absent'
                                                required
                                                onChange={(e) => setAbsent3(e.target.value)}

                                            /></td>
                                            <td><input className='input2' type="number" value={present3}
                                                name='present3'
                                                placeholder='present'
                                                required
                                                onChange={(e) => setPresent3(e.target.value)}
                                            /></td>
                                            <td><input className='input2' type="number" value={leave3}
                                                name='leave3'
                                                placeholder='Leave'
                                                required
                                                onChange={(e) => setLeave3(e.target.value)}


                                            /></td>
                                        </tr>
                                    </tbody>
                                    <button className='btn btn-primary mt-1 ' type='submit'
                                        onClick={(e) => addData(e)}
                                    >Submit</button>
                                </Table>

                            </div>


                            <div className='col-3 right'>
                                <input className='inputat' placeholder='Date/Time'
                                    value={date44}
                                    // onChange={(e) => setDate44(e.target.value)}

                                    name='date44'
                                />
                            </div>
                        </div>
                    ) : (

                        //updated form

                        <div className='row-attend'>


                            <div className='col-3 left'>
                                <input className='inputat' type="number" placeholder='EMIS Code'
                                    name='emisCode'
                                    value={updatedEmisCode}
                                    onChange={(e) => setUpdatedEmisCode(e.target.value)}
                                />
                            </div>
                            <div className='col-6 center'>
                                <Table>
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Total</th>
                                            <th>Absent</th>
                                            <th>present</th>
                                            <th>Leave</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Teaching</td>
                                            <td><input className='input2' type="number" placeholder='Total' value={updatedTotal}
                                                required
                                                name='total'
                                                onChange={(e) => setUpdatedTotal(e.target.value)}
                                            /></td>

                                            <td><input className='input2' type="number" placeholder='Absent' value={updatedAbsent}
                                                required
                                                name='absent'
                                                onChange={(e) => setUpdatedAbsent(e.target.value)}
                                            />
                                            </td>
                                            <td><input className='input2' type="number" placeholder='present' value={updatedPresent}
                                                required
                                                name='present'
                                                onChange={(e) => setUpdatedPresent(e.target.value)}


                                            /></td>
                                            <td><input className='input2' type="number" placeholder='Leave' value={updatedLeave}
                                                name='leave'
                                                required
                                                onChange={(e) => setUpdatedLeave(e.target.value)}


                                            /></td>
                                        </tr>
                                        <br />
                                        <tr>
                                            <td>Non Teaching</td>
                                            <td><input className='input2' type="number" value={updatedNonTeachingTotal}
                                                name='nonTeachingTotal'
                                                placeholder='Total'
                                                required
                                                onChange={(e) => setUpdatedNonTeachingTotal(e.target.value)}


                                            /></td>
                                            <td><input className='input2' type="number" value={updatedAbsent2}
                                                name='absent2'
                                                placeholder='Absent'
                                                required

                                                onChange={(e) => setUpdatedAbsent2(e.target.value)}


                                            /></td>
                                            <td><input className='input2' type="number" value={updatedPresent2}
                                                name='present2'
                                                placeholder='present'
                                                required
                                                onChange={(e) => setUpdatedPresent2(e.target.value)}


                                            /></td>
                                            <td><input className='input2' type="number" value={updatedLeave2}
                                                name='leave2'
                                                placeholder='Leave'
                                                required

                                                onChange={(e) => setUpdatedLeave2(e.target.value)}


                                            /></td>
                                        </tr>
                                        <br />
                                        <tr>
                                            <td>Student</td>
                                            <td><input className='input2' type="number" value={updatedTotal3}
                                                name='total3'
                                                placeholder='Total'
                                                required
                                                onChange={(e) => setUpdatedTotal3(e.target.value)}
                                            /></td>
                                            <td><input className='input2' type="number" value={updatedAbsent3}
                                                name='absent3'
                                                placeholder='Absent'
                                                required
                                                onChange={(e) => setUpdatedAbsent3(e.target.value)}

                                            /></td>
                                            <td><input className='input2' type="number" value={updatedPresent3}
                                                name='present3'
                                                placeholder='present'
                                                required
                                                onChange={(e) => setUpdatedPresent3(e.target.value)}
                                            /></td>
                                            <td><input className='input2' type="number" value={updatedLeave3}
                                                name='leave3'
                                                placeholder='Leave'
                                                required
                                                onChange={(e) => setUpdatedLeave3(e.target.value)}


                                            /></td>
                                        </tr>
                                    </tbody>
                                    <button className='btn btn-success' onClick={updateData}>Update</button>
                                </Table>

                            </div>
                        </div>
                    )}


                    <div className='container-fluid' id='container' style={{ marginBottom: "100px" }}>




                        <Table className='max' id='max' responsive id="table-to-xls">

                            <thead>
                                <tr>
                                    <th>Index</th>
                                    <th>EMIS Code</th>
                                    <th>Total</th>
                                    <th>Absent</th>
                                    <th>present</th>
                                    <th>Leave</th>
                                    <th>NonTeachingTotal</th>
                                    <th>absent</th>
                                    <th>present</th>
                                    <th>leave</th>
                                    <th>Student total</th>
                                    <th>absent</th>
                                    <th>present</th>
                                    <th>leave</th>
                                    <th>Date</th>
                                    <th>Action</th>

                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item, index) => (
                                    <tr key={item.id}>
                                        <td>{index + 1}</td>
                                        <td>{item.data.emisCode}</td>
                                        <td>{item.data.total}</td>
                                        <td>{item.data.absent}</td>
                                        <td>{item.data.present}</td>
                                        <td>{item.data.leave}</td>
                                        <td>{item.data.nonTeachingTotal}</td>
                                        <td>{item.data.absent2}</td>
                                        <td>{item.data.present2}</td>
                                        <td>{item.data.leave2}</td>
                                        <td>{item.data.total3}</td>
                                        <td>{item.data.absent3}</td>
                                        <td>{item.data.present3}</td>
                                        <td>{item.data.leave3}</td>
                                        <td>{item.data.date44}</td>
                                        <td>

                                            <button
                                                className='btn btn-info'
                                                onClick={() => {
                                                    setDataIdToBeUpdated(item.id);
                                                    setUpdatedEmisCode(item.data.emisCode);
                                                    setUpdatedTotal(item.data.total);
                                                    setUpdatedAbsent(item.data.absent);
                                                    setUpdatedPresent(item.data.present);
                                                    setUpdatedLeave(item.data.leave);
                                                    setUpdatedNonTeachingTotal(item.data.nonTeachingTotal);
                                                    setUpdatedAbsent2(item.data.absent2);
                                                    setUpdatedPresent2(item.data.present2);
                                                    setUpdatedLeave2(item.data.leave2);
                                                    setUpdatedTotal3(item.data.total3);
                                                    setUpdatedAbsent3(item.data.absent3);
                                                    setUpdatedPresent3(item.data.present3);
                                                    setUpdatedLeave3(item.data.leave3);
                                                    // setUpdatedDateAndTime(item.data.dateAndTime);



                                                }}
                                            >
                                                Update
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>



                        </Table>

                        <ReactHTMLTableToExcel
                            id="table-to-xls"
                            className="download-table-xls-button"
                            table="table-to-xls"
                            filename="tablexls"
                            sheet="tablexls"
                            buttonText="Download in excel file"

                        />




                    </div>




                </div>


            </div>



        </>
    )
}

export default Attendance;
