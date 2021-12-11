import React from "react";
import "./BankDonation.css";
import { Dropdown } from "react-bootstrap";

function BankDonation() {
  return (
    <div>
      <div className=" mt-5  adminpanell ">
        <div className="rowss ">
          <div className=" col pt-3">
            <h3 className="admin mt-2">Bank Donation</h3>
            <div className="row-donation offset-2 mt-4">
              <input
                type="Number"
                className="form-controls22 p-2 "
                placeholder="Account Here"
              ></input>
              &nbsp;
              <input
                type="password"
                className="form-controls22 mt-2 p-2"
                placeholder="Pin Here"
              />
              &nbsp;
              <div>
                
                Select Your Bank
                <Dropdown className="DropDown">
                  <Dropdown.Toggle
                    id="dropdown-button-light-example1"
                    variant=""
                  >
                    Select Your Bank
                  </Dropdown.Toggle>

                  <Dropdown.Menu variant="">
                    <Dropdown.Item href="" active>
                      Allied Bank Limited
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Alfa Pay</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Advans Microfinance Bank
                    </Dropdown.Item>

                    <Dropdown.Item href="#/action-4">Upaisa</Dropdown.Item>
                    <Dropdown.Item href="#/action-4">
                      United Bank Limited UBL
                    </Dropdown.Item>

                    <Dropdown.Item href="#/action-4">
                      U Microfinance Bank
                    </Dropdown.Item>

                    <Dropdown.Item href="#/action-4">Summit Bank</Dropdown.Item>

                    <Dropdown.Item href="#/action-4">
                      Telenor Microfinance Bank
                    </Dropdown.Item>

                    <Dropdown.Item href="#/action-4">
                      Moblink Microfinance Bank
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-4">Meezan Bank</Dropdown.Item>
                    <Dropdown.Item href="#/action-4">JazzCash</Dropdown.Item>

                    <Dropdown.Item href="#/action-4">
                      Habib Bank Limited HBL
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <button className="btn btn-primary mt-4 offset-3  " id="button">
                  Submit
                </button>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BankDonation;
