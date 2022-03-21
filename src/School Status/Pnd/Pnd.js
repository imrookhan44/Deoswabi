import React from 'react'
import './pnd.css'
function Pnd() {
    return (
        <div>
            <div className='container-pnd' style={{ marginLeft: "1rem" }}>
                <br />
                <div className='pd'><h2>P & D</h2></div>
                <div className='wise mt-2'>Class wise enrollment </div>
                <div className='rows-pnd mt-4 ms-2'>
                    <div className='col-2'>
                        <b>6th</b>
                        <input className="place" type="text" />
                    </div>
                    <div className='col-2'>
                        <b >7th</b>
                        <input className="place" type="text" />

                    </div>
                    <div className='col-2'>
                        <b>8th</b>
                        <input className="place" type="text" />

                    </div>
                    <div className='col-2'>
                        <b>9th</b>
                        <input className="place" type="text" />

                    </div>
                    <div className='col-2'>
                        <b>10th</b>
                        <input className="place" type="text" />

                    </div>
                    <div className='col-2'>
                        <b>11th</b>
                        <input className="place" type="text" />

                    </div>
                    <div className='col-2'>
                        <b>12th</b></div>

                </div>

                <div className='row2 mt-4'>
                    <div className='col-6'>
                        <div className='wall'>
                            < h6 className='h61'>Boundary wall</ h6>
                            <div className='checkbox'>
                                <div className="form-group form-check ms-2 mt-2">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" for="exampleCheck1">upraising</label>
                                </div>
                                <div className="form-group form-check ms-2">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" for="exampleCheck1">Reconstruction</label>
                                </div>
                                <div className="form-group form-check ms-2">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" for="exampleCheck1">New</label>
                                </div>
                            </div>
                        </div>

                        <div className='wall mt-2'>
                            < h6 className="h61">Group latrine</ h6>
                            <div className='checkbox'>
                                <div className="form-group form-check ms-2 mt-2">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" for="exampleCheck1">upraising</label>
                                </div>
                                <div className="form-group form-check ms-2">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" for="exampleCheck1">Reconstruction</label>
                                </div>
                                <div className="form-group form-check ms-2">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" for="exampleCheck1">New</label>
                                </div>
                            </div>
                        </div>
                        <div className='wall mt-2'>
                            < h6 className="h61">Water Supply</ h6>
                            <div className='checkbox'>
                                <div className="form-group form-check ms-2 mt-2">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" for="exampleCheck1">Repair</label>
                                </div>
                                <div className="form-group form-check ms-2">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" for="exampleCheck1">New</label>
                                </div>

                            </div>
                        </div>

                        <div className='wall mt-2'>
                            < h6 className="h61">Solar System available</ h6>
                            <div className='checkbox'>
                                <div className="form-group form-check ms-2 mt-2">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" for="exampleCheck1">YES</label>
                                </div>
                                <div className="form-group form-check ms-2">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" for="exampleCheck1">NO</label>
                                </div>

                            </div>
                        </div>

                        <div className='wall mt-2'>
                            < h6 className="h61">Electricity</ h6>
                            <div className='checkbox'>
                                <div className="form-group form-check ms-2 mt-2">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" for="exampleCheck1">Repair</label>
                                </div>
                                <div className="form-group form-check ms-2">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" for="exampleCheck1">New</label>
                                </div>

                            </div>
                        </div>

                    </div>
                    <div className='col-4 time'>
                        {/* Time and date of last update me be automatic */}
                        Date and Time
                    </div>

                </div>

                <div className='row3 mt-3'>
                    <div className='col-7'>
                        <div className='abc'>
                            < h6 className="h61">Number of Existing class Room</ h6>
                            <input className='place ms-2' type="number" placeholder='input should number only' />
                        </div>
                        <div className='abc'>
                            < h6 className="h61">Number of Additional Class</ h6>
                            <input className='place ms-2' type="number" placeholder='input should number only' />
                        </div>
                        <div className='abc'>
                            < h6 className="h61">Total Area of school</ h6>
                            <input className='place ms-2' type="number" placeholder='input should number only' />
                        </div>
                    </div>
                    <div className='col-5'>
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
                    </div>
                </div>

                <div className='row4'>
                    <div className='col-6'>
                        <div className='wall mt-2'>
                            < h6 className="h61">IT Lab</ h6>
                            <div className='checkbox'>
                                <div className="form-group form-check ms-2 mt-2">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" for="exampleCheck1">Exist</label>
                                </div>
                                <div className="form-group form-check ms-2">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" for="exampleCheck1">Not Exist</label>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='col-6'>
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
                    </div>
                </div>

                <div className='row5'>
                    <div className='col-6'>
                        <div className='wall mt-2'>
                            < h6 className="h61">IT Lab</ h6>
                            <div className='checkbox'>
                                <div className="form-group form-check ms-2 mt-2">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" for="exampleCheck1">Exist</label>
                                </div>
                                <div className="form-group form-check ms-2">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" for="exampleCheck1">Not Exist</label>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='col-6'>
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
                    </div>
                </div>
                <br />
                <br />
                <br />
            </div>
        </div>

    )
}

export default Pnd
