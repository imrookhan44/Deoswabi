import React, { useState, useEffect } from "react";
import { db } from "../../src/components/firebase";
import { Table } from "react-bootstrap";
import ReactHTMLTableToExcel from "react-html-table-to-excel";

import './BudgetData.css'
const BudgetData = () => {
    const [data, setData] = useState([]);
    const [emisCode, setEmisCode] = useState("");
    const [totalBudget, setTotalBudget] = useState("");
    const [Utilize, setUtilize] = useState("");
    const [remaining, setRemaining] = useState("");
    const [TelePhoneBudget, setTelePhoneBudget] = useState("")
    const [TelePhoneUtilize, setTelePhoneUtilize] = useState("")
    const [TelePhoneRemaining, setTelePhoneRemaining] = useState("")
    const [budgetConveyance, setBudgetConveyance] = useState("")
    const [utilizeConveyance, setUtilizeConveyance] = useState("")
    const [remainingConveyance, setRemainingConveyance] = useState("")
    const [TAbudget, setTABudget] = useState("")
    const [TAutilize, setTAUtilize] = useState("")
    const [TAremaining, setTARemaining] = useState("")
    const [pettyBudget, setPettyBudget] = useState("")
    const [pettyUtilize, setPettyUtilize] = useState("")
    const [pettyRemaining, setPettyRemaining] = useState("")
    const [crcBudget, setCrcBudget] = useState("")
    const [crcUtilize, setCrcUtilize] = useState("")
    const [crcRemaining, setCrcRemaining] = useState("")




    const add = (e) => {
        e.preventDefault();
        db.collection("budgetData").add({
            emisCode: emisCode,
            totalBudget: totalBudget,
            Utilize: Utilize,
            remaining: remaining,
            TelePhoneBudget: TelePhoneBudget,
            TelePhoneUtilize: TelePhoneUtilize,
            TelePhoneRemaining: TelePhoneRemaining,
            budgetConveyance: budgetConveyance,
            utilizeConveyance: utilizeConveyance,
            remainingConveyance: remainingConveyance,
            TAbudget: TAbudget,
            TAutilize: TAutilize,
            TAremaining: TAremaining,
            pettyBudget: pettyBudget,
            pettyUtilize: pettyUtilize,
            pettyRemaining: pettyRemaining,
            crcBudget: crcBudget,
            crcUtilize: crcUtilize,
            crcRemaining: crcRemaining,
        });
        setEmisCode("");
        setTotalBudget("");
        setUtilize("");
        setRemaining("");
        setTelePhoneBudget("");
        setTelePhoneUtilize("");
        setTelePhoneRemaining("");
        setBudgetConveyance("");
        setUtilizeConveyance("");
        setRemainingConveyance("");
        setTABudget("");
        setTAUtilize("");
        setTARemaining("");
        setPettyBudget("");
        setPettyUtilize("");
        setPettyRemaining("");
        setCrcBudget("");
        setCrcUtilize("");
        setCrcRemaining("");


    }
    useEffect(() => {
        db.collection("budgetData").onSnapshot((snapshot) => {
            setData(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                }))
            );
        });
        console.log("budgetData:", data);
    }, []);

    return (
        <div>
            <div className=" d-flex  flex-column align-items-center ">
                <div className=" bg-warning p-2 w-25  ">
                    <h6 className="text-center">Non-Salary Budget</h6>
                </div>
                <div className="mt-4 mb-3">
                    <input type="number" placeholder="Emis Code" value={emisCode}
                        onChange={(e) => setEmisCode(e.target.value)}
                    />
                </div>
            </div>
            <div className="row mt-2">
                <div className="col-3 ">
                    <span className="bg-primary p-1 ms-5">Electricity</span>

                </div>
                <div className="col-3">
                    <input type="number" placeholder="Total Budget" value={totalBudget}
                        onChange={(e) => setTotalBudget(e.target.value)} />
                </div>
                <div className="col-3">
                    <input type="number" placeholder="Utilize" value={Utilize}
                        onChange={(e) => setUtilize(e.target.value)} />
                </div>
                <div className="col-3">
                    <input type="number" placeholder="Remaining" value={remaining}
                        onChange={(e) => setRemaining(e.target.value)} />
                </div>

            </div>
            <div className="row mt-2">
                <div className="col-3 ">
                    <span className="bg-primary p-1  ms-5">TelePhone</span>

                </div>
                <div className="col-3">
                    <input type="number" placeholder="Total Budget" value={TelePhoneBudget}
                        onChange={(e) => setTelePhoneBudget(e.target.value)} />
                </div>
                <div className="col-3">
                    <input type="number" placeholder="Utilize" value={TelePhoneUtilize}
                        onChange={(e) => setTelePhoneUtilize(e.target.value)} />
                </div>
                <div className="col-3">
                    <input type="number" placeholder="Remaining" value={TelePhoneRemaining}
                        onChange={(e) => setTelePhoneRemaining(e.target.value)} />
                </div>

            </div>
            <div className="row mt-2">
                <div className="col-3 ">
                    <span className="bg-primary p-1 ms-5">Conveyance</span>

                </div>
                <div className="col-3">
                    <input type="number" placeholder="Total Budget" value={budgetConveyance}
                        onChange={(e) => setBudgetConveyance(e.target.value)} />
                </div>
                <div className="col-3">
                    <input type="number" placeholder="Utilize" value={utilizeConveyance}
                        onChange={(e) => setUtilizeConveyance(e.target.value)} />
                </div>
                <div className="col-3">
                    <input type="number" placeholder="Remaining" value={remainingConveyance}
                        onChange={(e) => setRemainingConveyance(e.target.value)} />
                </div>

            </div>
            <div className="row mt-2">
                <div className="col-3 ">
                    <span className="bg-primary p-1 ms-5">TA/DA</span>

                </div>
                <div className="col-3">
                    <input type="number" placeholder="Total Budget" value={TAbudget}
                        onChange={(e) => setTABudget(e.target.value)} />
                </div>
                <div className="col-3">
                    <input type="number" placeholder="Utilize" value={TAutilize}
                        onChange={(e) => setTAUtilize(e.target.value)} />
                </div>
                <div className="col-3">
                    <input type="number" placeholder="Remaining" value={TAremaining}
                        onChange={(e) => setTARemaining(e.target.value)} />
                </div>

            </div>
            <div className="row mt-2">
                <div className="col-3 ">
                    <span className="bg-primary p-1 w-25 ms-5">Petty Repair</span>

                </div>
                <div className="col-3">
                    <input type="number" placeholder="Total Budget" value={pettyBudget}
                        onChange={(e) => setPettyBudget(e.target.value)} />
                </div>
                <div className="col-3">
                    <input type="number" placeholder="Utilize" value={pettyUtilize}
                        onChange={(e) => setPettyUtilize(e.target.value)} />
                </div>
                <div className="col-3">
                    <input type="number" placeholder="Remaining" value={pettyRemaining}
                        onChange={(e) => setPettyRemaining(e.target.value)} />
                </div>

            </div>
            <div className="row mt-2">
                <div className="col-3  w-25">
                    <span className="bg-primary p-1  ms-5">CRC</span>

                </div>
                <div className="col-3">
                    <input type="number" placeholder="Total Budget" value={crcBudget} onChange={(e) => setCrcBudget(e.target.value)} />
                </div>
                <div className="col-3">
                    <input type="number" placeholder="Utilize" value={crcUtilize} onChange={(e) => setCrcUtilize(e.target.value)} />
                </div>
                <div className="col-3">
                    <input type="number" placeholder="Remaining" value={crcRemaining} onChange={(e) => setCrcRemaining(e.target.value)} />
                </div>

            </div>

            <div className="d-flex justify-content-center">
                <button className="mt-3 mb-2 btn btn-success" onClick={add}>Save</button>
            </div>
            <div id="budgetData">
                <Table className="tableBudget" striped bordered hover responsive id="tableBudget" style={{ border: "solid 1px" }}>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>EMiS Code</th>
                            <th>Electricity Budget</th>
                            <th>Utilize</th>
                            <th>Remaining</th>
                            <th>Telephone Budget</th>
                            <th>Utilize</th>
                            <th>Remaining</th>
                            <th>Conveyance Budget</th>
                            <th>Utilize</th>
                            <th>Remaining</th>
                            <th>TA/DA Budget</th>
                            <th>Utilize</th>
                            <th>Remaining</th>
                            <th>Petty Repair Budget</th>
                            <th>Utilize</th>
                            <th>Remaining</th>
                            <th>CRC Total Budget</th>
                            <th>Utilize</th>
                            <th>Remaining</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            data.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{item?.data.emisCode}</td>
                                        <td>{item?.data.totalBudget}</td>
                                        <td>{item?.data.Utilize}</td>
                                        <td>{item?.data.remaining}</td>
                                        <td>{item?.data.TelePhoneBudget}</td>
                                        <td>{item?.data.TelePhoneUtilize}</td>
                                        <td>{item?.data.TelePhoneRemaining}</td>
                                        <td>{item?.data.budgetConveyance}</td>
                                        <td>{item?.data.utilizeConveyance}</td>
                                        <td>{item?.data.remainingConveyance}</td>
                                        <td>{item?.data.TAbudget}</td>
                                        <td>{item?.data.TAutilize}</td>
                                        <td>{item?.data.TAremaining}</td>
                                        <td>{item?.data.pettyBudget}</td>
                                        <td>{item?.data.pettyUtilize}</td>
                                        <td>{item?.data.pettyRemaining}</td>
                                        <td>{item?.data.crcBudget}</td>
                                        <td>{item?.data.crcUtilize}</td>
                                        <td>{item?.data.crcRemaining}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>

                </Table>
            </div>

            <ReactHTMLTableToExcel
                id="tableBudget"
                className="btn btn-primary  mb-2 offset-5"
                table="tableBudget"
                filename="tablexls"
                sheet="tablexls"
                buttonText="Download as Excel"
            />



        </div>
    );

}

export default BudgetData;