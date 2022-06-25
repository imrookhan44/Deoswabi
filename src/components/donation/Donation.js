import React, { Fragment } from 'react'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
function Donation() {
    return (
        <Fragment>
            <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3">
                <Tab eventKey="home" title="Poor students education support ">
                    <div className='bg-info text-center  h-50 w-50 m-auto'>
                        <p className='fw-bold p-5 text-white'>Donation Through easypaisa Account</p>
                    </div>
                    <div>
                        <marquee width="80%" direction="left" height="300px">
                            <h1 className='text-right'> Easypaisa Mobile number</h1>
                            <h3 className='text-right'>03488123407</h3>
                        </marquee>
                    </div>
                    <div className='bg-success text-center  h-50 w-50 m-auto'>
                        <p className='fw-bold p-5 text-white'>Donation Through Bank Account Account</p>
                    </div>
                    <div>
                        <marquee width="80%" direction="left" height="300px">
                            <h1 className='text-right'>Bank Account Details</h1>
                            <h2>Meezan Bank</h2>
                            <h3 className='text-right'>Account Number: 03020104452155 <br />
                                IBAN: PK29MEZN0003020104452155</h3>
                        </marquee>
                    </div>


                </Tab>
                <Tab eventKey="profile" title="Site maintenance">
                    <div className='bg-info text-center  h-50 w-50 m-auto'>
                        <p className='fw-bold p-5 text-white'>Donation Through easypaisa Account</p>
                    </div>
                    <div>
                        <marquee width="80%" direction="left" height="300px">
                            <h1 className='text-right'> Easypaisa Mobile number</h1>
                            <h3 className='text-right'>03488123407</h3>
                        </marquee>
                    </div>
                    <div className='bg-success text-center  h-50 w-50 m-auto'>
                        <p className='fw-bold p-5 text-white'>Donation Through Bank Account Account</p>
                    </div>
                    <div>
                        <marquee width="80%" direction="left" height="300px">
                            <h1 className='text-right'>Bank Account Details</h1>
                            <h2>Meezan Bank</h2>
                            <h3 className='text-right'>Account Number: 03020104452155 <br />
                                IBAN: PK29MEZN0003020104452155</h3>
                        </marquee>
                    </div>

                </Tab>
                <Tab eventKey="contact" title="Other" >
                    <div className='bg-info text-center  h-50 w-50 m-auto'>
                        <p className='fw-bold p-5 text-white'>Donation Through easypaisa Account</p>
                    </div>
                    <div>
                        <marquee width="80%" direction="left" height="300px">
                            <h1 className='text-right'> Easypaisa Mobile number</h1>
                            <h3 className='text-right'>03488123407</h3>
                        </marquee>
                    </div>
                    <div className='bg-success text-center  h-50 w-50 m-auto'>
                        <p className='fw-bold p-5 text-white'>Donation Through Bank Account Account</p>
                    </div>
                    <div>
                        <marquee width="80%" direction="left" height="300px">
                            <h1 className='text-right'>Bank Account Details</h1>
                            <h2>Meezan Bank</h2>
                            <h3 className='text-right'>Account Number: 03020104452155 <br />
                                IBAN: PK29MEZN0003020104452155</h3>
                        </marquee>
                    </div>

                </Tab>
            </Tabs>

        </Fragment>
    )
}

export default Donation
