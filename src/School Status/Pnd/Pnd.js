import React, { useState, useEffect } from 'react'
import './pnd.css'
import { db } from './../../components/firebase';

import PndTable from './PndTable'
function Pnd() {

    const [data, setData] = useState([]);
    const [classSix, setClassSix] = useState("");
    // const [classSeven, setClassSeven] = useState("");
    // const [classEight, setClassEight] = useState("");
    // const [classNine, setClassNine] = useState("");
    // const [classTen, setClassTen] = useState("");
    // const [classEleven, setClassEleven] = useState("");
    // const [classTwelth, setClassTwelth] = useState("");
    const [boundaryWall, setBoundaryWall] = useState("");
    const [group, setGroup] = useState("");
    const [waterSupply, setWaterSupply] = useState("");
    const [solar, setSolar] = useState("");
    const [electricity, setElectricity] = useState("");
    const [existing, setExisting] = useState("");
    const [additional, setAdditional] = useState("");
    const [schoolname, setSchoolName] = useState("");
    const [area, setArea] = useState("");
    const [itLab, setItLab] = useState("");
    const addData = (e) => {
        e.preventDefault();
        db.collection("PNDData").add({
            schoolname: schoolname,
            classSix: classSix,
            boundaryWall: boundaryWall,
            group: group,
            waterSupply: waterSupply,
            solar: solar,
            electricity: electricity,
            existing: existing,
            additional: additional,
            area: area,
            itLab: itLab,
            date44: date44,
        });
        setSchoolName("");
        setClassSix("");
        setBoundaryWall("");
        setGroup("");
        setWaterSupply("");
        setSolar("");
        setElectricity("");
        setExisting("");
        setAdditional("");
        setArea("");
        setItLab("");
        setDate44("");

    };


    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const today = month + "-" + day + "-" + year;
    // console.log("today:", today);
    const [date44, setDate44] = useState(today);
    // console.log("date44:", date44);


    return (
        <div>
            <div className='container-pnd'>
                <br />
                <div className='pd'><h2>P & D</h2></div>

                {/* <div className='rows-pnd mt-4 ms-2'>
                    <div className='col-2'>
                        <b className='bb'>6th</b>
                        <input className="place" name='classSix' type="text" value={classSix}
                            onChange={(e) => setClassSix(e.target.value)}


                        />
                    </div>
                    <div className='col-2'>
                        <b className='bb' >7th</b>
                        <input className="place" type="text" name='classSeven' value={classSeven}
                            onChange={(e) => setClassSeven(e.target.value)}
                        />

                    </div>
                    <div className='col-2'>
                        <b className='bb'>8th</b>
                        <input className="place" type="text" name='classEight' value={classEight}
                            onChange={(e) => setClassEight(e.target.value)}
                        />

                    </div>
                    <div className='col-2'>
                        <b className='bb'>9th</b>
                        <input className="place" type="text" name='classNine' value={classNine}
                            onChange={(e) => setClassNine(e.target.value)}
                        />

                    </div>
                    <div className='col-2'>
                        <b className='bb'>10th</b>
                        <input className="place" type="text" name='classTen' value={classTen}
                            onChange={(e) => setClassTen(e.target.value)}
                        />

                    </div>
                    <div className='col-2'>
                        <b className='bb'>11th</b>
                        <input className="place" type="text" name='classEleven' value={classEleven}
                            onChange={(e) => setClassEleven(e.target.value)}
                        />

                    </div>
                    <div className='col-2'>
                        <b className='bb'>12th</b></div>
                    <input className="place" type="text" name='classTwelth' value={classTwelth}
                        onChange={(e) => setClassTwelth(e.target.value)}
                    />
                </div> */}

                <div className='row2 mt-4'>
                    <div className='col-6'>
                        <div className='d-flex'>
                            <div className='h61'>School Name</div>&nbsp;&nbsp;&nbsp;&nbsp;

                            <span>

                                <input type="text" className="form-control111 mt-1" placeholder=" Enter your School Name" name='schoolname' value={schoolname} onChange={(e) => setSchoolName(e.target.value)} /></span>
                        </div>
                        <br />
                        <div className='d-flex'>
                            <div className='h61'>Class wise enrollment </div>&nbsp;&nbsp;&nbsp;&nbsp;

                            <span>

                                <input type="text" className="form-control111 mt-1" placeholder=" Enter your class" name='classSix' value={classSix} onChange={(e) => setClassSix(e.target.value)} /></span>
                        </div>


                        <br />
                        <div className='wall'>
                            <h6 className='h61'>Boundary wall</ h6>

                            <div className="boundarywall">
                                <select className="dropdownss  ms-3" onChange={(e) => setBoundaryWall(e.target.value)}
                                    value={boundaryWall}>

                                    <option className="abc" value="Select" > select </option>
                                    <option className="abc" value="Upraising">Upraising</option>
                                    <option className="abc" value="Reconstruction">Reconstruction</option>
                                    <option className="abc" value="New">New</option>
                                </select>
                            </div>

                        </div>

                        <div className='wall mt-2'>
                            < h6 className="h61">Group latrine</ h6>

                            <div className="latrine">
                                <select className="dropdownss  ms-3" onChange={(e) => setGroup(e.target.value)}
                                    value={group}>

                                    <option className="abc" value="Select" > select </option>
                                    <option className="abc" value="Upraising">Upraising</option>
                                    <option className="abc" value="Reconstruction">Reconstruction</option>
                                    <option className="abc" value="New">New</option>
                                </select>
                            </div>


                        </div>
                        <div className='wall mt-2'>
                            < h6 className="h61">Water Supply</ h6>

                            <div className="WaterSupply">
                                <select className="dropdownss  ms-3" onChange={(e) => setWaterSupply(e.target.value)} value={waterSupply}>

                                    <option className="abc" value="Select" > select </option>
                                    <option className="abc" value="Repair">Repair</option>
                                    <option className="abc" value="New">New</option>
                                </select>
                            </div>
                        </div>

                        <div className='wall mt-2'>
                            < h6 className="h61">Solar System available</ h6>

                            <div className="Solar">
                                <select className="dropdownss  ms-3" onChange={(e) => setSolar(e.target.value)} value={solar}
                                >
                                    <option className="abc" value="Select" > select </option>
                                    <option className="abc" value="Yes">Yes</option>
                                    <option className="abc" value="No">No</option>
                                </select>
                            </div>

                        </div>

                        <div className='wall mt-2'>
                            < h6 className="h61">Electricity</ h6>

                            <div className="Electricity">
                                <select className="dropdownss  ms-3" onChange={(e) => setElectricity(e.target.value)} value={electricity}
                                >
                                    <option className="abc" value="Select" > select </option>
                                    <option className="abc" value="Repair">Repair</option>
                                    <option className="abc" value="New">New</option>
                                </select>
                            </div>
                        </div>

                    </div>
                    <div className='col-4 time'>
                        <div className='dateandtime'>Date and Time</div>
                        <div>
                            <input className='place' type="" placeholder='Date & time' value={date44} />
                        </div>
                    </div>

                </div>

                <div className='row3 mt-3'>
                    <div className='col-7'>
                        <div className='abc'>
                            < h6 className="h61">Number of Existing class Room</ h6>
                            <input className='form-control111 ms-2' type="number" placeholder='input should number only'
                                onChange={(e) => setExisting(e.target.value)}
                                value={existing}
                            />
                        </div>
                        <div className='abc'>
                            < h6 className="h61">Number of Additional Class</ h6>
                            <input className='form-control111 ms-2' type="number" placeholder='input should number only'
                                onChange={(e) => setAdditional(e.target.value)}
                                value={additional}
                            />
                        </div>
                        <div className='abc'>
                            < h6 className="h61">Total Area of school</ h6>
                            <input className='form-control111 ms-2' type="number" placeholder='input should number only'
                                onChange={(e) => setArea(e.target.value)}
                                value={area}
                            />
                        </div>
                    </div>
                    {/* <div className='col-5'>
                        <br />
                        <br />
                        <div className='wall mt-2'>
                            < h6 className="h61">Space</ h6>
                            <div className='checkbox'>
                                <div className="form-group form-check ms-2 mt-2">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" for="exampleCheck1">Available</label>
                                </div>
                                <div className="form-group form-check ms-2">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" for="exampleCheck1">Not Available</label>
                                </div>

                            </div>
                        </div>
                    </div> */}
                </div>

                <div className='row4'>
                    <div className='col-6'>
                        <div className='wall mt-2'>
                            < h6 className="h61">IT Lab</ h6>
                            <div className="itlab">
                                <select className="dropdownss  ms-3" onChange={(e) => setItLab(e.target.value)}
                                    value={itLab}
                                >
                                    <option className="abc" value="Select" > select </option>
                                    <option className="abc" value="Exist">Exist</option>
                                    <option className="abc" value="Not Exist">Not Exist</option>
                                </select>
                            </div>

                        </div>
                    </div>
                    {/* <div className='col-6'>
                        <div className='wall mt-2'>
                            < h6 className="h61">Space</ h6>
                            <div className='checkbox'>
                                <div className="form-group form-check ms-2 mt-2">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" for="exampleCheck1">Available</label>
                                </div>
                                <div className="form-group form-check ms-2">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" for="exampleCheck1">Not Available</label>
                                </div>

                            </div>
                        </div>
                    </div> */}
                </div>

                <div className='text-center mt-3'>
                    {/* <div className='col-6'>
                        <div className='wall mt-2'>
                            < h6 className="h61">IT Lab</ h6>

                            <div className="Itlab">
                                <select className="dropdownss  ms-3" onChange={(e) => set(e.target.value)}
                                >
                                    <option className="abc" value="Select" > select </option>
                                    <option className="abc" value="Exist">Exist</option>
                                    <option className="abc" value="Not Exist">Not Exist</option>
                                </select>
                            </div>

                        </div>
                    </div> */}
                    {/* <div className='col-6'>
                        <div className='wall mt-2'>
                            < h6 className="h61">Space</ h6>
                            <div className='checkbox'>
                                <div className="form-group form-check ms-2 mt-2">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" for="exampleCheck1">Available</label>
                                </div>
                                <div className="form-group form-check ms-2">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" for="exampleCheck1">Not Available</label>
                                </div>

                            </div>
                        </div>
                    </div> */}
                    <button disabled={!area || !itLab} className='btn btn-  databtn' onClick={addData} >Submit</button>
                </div>
                <br />
                <br />
                <br />


            </div>
            <br />
            <br />
            <PndTable />
        </div>

    )
}

export default Pnd
