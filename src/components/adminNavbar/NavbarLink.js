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
            width: "50%",
            border: "solid grey",
            display: "flex",
            justifyContent: "center",
            margin: " auto",
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



                    <th>Link</th>
                    <th>Site Name</th>



                    {/* <th>Actions</th> */}
                  </tr>
                </thead>
                <tbody>
                  {Object.keys(contactObjects).map((id) => {
                    return (
                      <tr key={id}>
                        <td>{contactObjects[id].address}</td>

                        <td>{contactObjects[id].email}</td>
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
