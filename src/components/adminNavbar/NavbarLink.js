import React, { useState, useEffect } from "react";
import firebaseDb from "firebase";

function NavbarLink() {
  var [contactObjects, setContactObjects] = useState({});
  var [currentId, setCurrentId] = useState("");

  useEffect(() => {
    firebaseDb
      .database()
      .ref("links")
      .on("value", (snapshot) => {
        if (snapshot.val() != null)
          setContactObjects({
            ...snapshot.val(),
          });
        else setContactObjects({});
      });
  }, []); // similar to componentDidMount
  return (
    <div>
      <>
        <div
          className="table mt-4"
          style={{
            padding: "10px 10px 10px 10px",
          }}
        >
          <div className="row">
            <div className="">
              {/* <ContactForm {...{ currentId, contactObjects }} /> */}
            </div>
            <div className="" id="table">
              <table className="table table-borderLess table-stripped mt-4">
                <thead className="thead-light">
                  <tr>
                    <th>Numbers</th>
                    <th>Site Name</th>
                    <th>Link</th>
                    {/* <th>Actions</th> */}
                  </tr>
                </thead>
                <tbody>
                  {Object.keys(contactObjects).map((id, index) => {
                    return (
                      <tr key={id}>
                        <td>{index + 1}</td>
                        <td>{contactObjects[id].email}</td>
                        <td>
                          <a href={contactObjects[id].address} target="_blank">
                            {contactObjects[id].address}
                          </a>
                          {/* {contactObjects[id].address}</td> */}
                        </td>
                        <td></td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default NavbarLink;
