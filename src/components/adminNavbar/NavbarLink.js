import React, { useState, useEffect } from "react";
import firebaseDb from "firebase";
function NavbarLink() {
  var [contactObjects, setContactObjects] = useState({});
  var [currentId, setCurrentId] = useState("");

  useEffect(() => {
    firebaseDb
      .database()
      .ref("contacts")
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
        <div className="container">
          <div className="row">
            <div className="">
              {/* <ContactForm {...{ currentId, contactObjects }} /> */}
            </div>
            <div className="">
              <table className="table table-borderless table-stripped">
                <thead className="thead-light">
                  <tr>
                    <th>Site Name</th>

                    <th>Link</th>
                    {/* <th>Actions</th> */}
                  </tr>
                </thead>
                <tbody>
                  {Object.keys(contactObjects).map((id) => {
                    return (
                      <tr key={id}>
                        <td>{contactObjects[id].fullName}</td>

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
