import React, { useEffect, useState } from 'react'
import { Table } from "react-bootstrap"
import "./pnd.css"
import { db } from './../../components/firebase'

import ReactHTMLTableToExcel from "react-html-table-to-excel";

function PndTable() {

    const [data, setData] = useState([])
    function getdata() {
        db.collection('PNDData').get().then((snapshot) => {
            setData(snapshot.docs.map(doc => doc.data()))

        })
    }
    useEffect(() => {
        getdata()
    }, [])
    return (
        <div className='conatiner-fluid-pndtable'>
            <div className='container-pndtable'>
                <Table className='max-pndtable' responsive id="example-table">
                    <thead>
                        <tr className='tr-pndtable'>
                            <th className='th-pndtable' >S.No</th>
                            <th className='th-pndtable'>School Name</th>
                            <th className='th-pndtable'>Class wise enrollement
                                <br />
                                <th className='th-pndtable1'>6th</th>
                                <th className='th-pndtable1'>7th</th>
                                <th className='th-pndtable1'>8th</th>
                                <th className='th-pndtable1'>9th</th>
                                <th className='th-pndtable1'>10th</th>
                                <th className='th-pndtable1'>11th</th>
                                <th className='th-pndtable1'>12th</th>
                            </th>
                            <th className='th-pndtable'>Boundary wall</th>
                            <th className='th-pndtable'>Group latrine</th>
                            <th className='th-pndtable'>Water supply</th>
                            <th className='th-pndtable'>Solar</th>
                            <th className='th-pndtable'>Electricity</th>
                            <th className='th-pndtable'>No of Existing room</th>
                            <th className='th-pndtable'>No of Additional Classroom</th>
                            <th className='th-pndtable'>Time & Dated</th>

                        </tr>
                    </thead>
                    {
                        data.map((item, index) => {
                            return (
                                <tbody key={index}>
                                    <tr className='tr-pndtable'>
                                        <td className='td-pndtable'>{index + 1}</td>
                                        <td className='td-pndtable'>{item.schoolname}</td>
                                        <td className='td-pndtable' id='classWise'>{item.classSix}  | {item.classSeven} | {item.classEight} | {item.classNine} | {item.classTen} | {item.classEleven} | {item.classTwelth}</td>

                                        <td className='td-pndtable'>{item.boundaryWall}</td>
                                        <td className='td-pndtable'>{item.group}</td>
                                        <td className='td-pndtable'>{item.waterSupply}</td>
                                        <td className='td-pndtable'>{item.solar}</td>
                                        <td className='td-pndtable'>{item.electricity}</td>
                                        <td className='td-pndtable'>{item.existing}</td>
                                        <td className='td-pndtable'>{item.additional}</td>
                                        <td className='td-pndtable'>{item.date44}</td>
                                    </tr>
                                </tbody>
                            )
                        })
                    }
                    {/* <tbody>
                        <tr className='tr-pndtable2'>
                            <td className='td-pndtable'>1</td>
                            <td className='td-pndtable'>GGHS MANERI</td>
                            <td className='td-pndtable'>
                                <td className='td-pndtable1'>50</td>
                                <td className='td-pndtable1'>60</td>
                                <td className='td-pndtable1'>20</td>
                                <td className='td-pndtable1'>30</td>
                                <td className='td-pndtable1'>25</td>

                            </td>
                            <td className='td-pndtable'>
                                <td className='td-pndtable1'>Uprising</td>
                                <td className='td-pndtable1'>Reconcon struction</td>
                                <td className='td-pndtable1'>New</td>
                            </td>
                            <td className='td-pndtable'>
                                <td className='td-pndtable1'>Reconstruction</td>
                                <td className='td-pndtable1'>New</td>
                            </td>
                            <td className='td-pndtable'>
                                <td className='td-pndtable1'>Repair</td>
                                <td className='td-pndtable1'>New</td>
                            </td>
                            <td className='td-pndtable'>
                                <td className='td-pndtable1'>Yes</td>
                                <td className='td-pndtable1'>No</td>
                            </td>
                            <td className='td-pndtable'>
                                <td className='td-pndtable1'>Repair</td>
                                <td className='td-pndtable1'>New</td>
                            </td>
                            <td className='td-pndtable'>
                                14
                            </td>
                            <td className='td-pndtable'>4</td>
                            <td className='td-pndtable'>03/29/2022 11:00</td>
                        </tr>
                    </tbody> */}
                </Table>

                <ReactHTMLTableToExcel
                    id="example-table"
                    className="btn btn-primary  mb-2 offset-5"
                    table="example-table"
                    filename="tablexls"
                    sheet="tablexls"
                    buttonText="Download as Excel"
                />

            </div>
        </div>
    )
}

export default PndTable