import React, { useState, useEffect } from "react";
import ContactForm from "../ContactForm";
import firebaseDb from "firebase";
const ImportLink = () => {
  var [contactObjects, setContactObjects] = useState({});
  var [currentId, setCurrentId] = useState("");

  useEffect(() => {
    firebaseDb
      .database()
      .ref("news")
      .on("value", (snapshot) => {
        if (snapshot.val() != null)
          setContactObjects({
            ...snapshot.val(),
          });
        else setContactObjects({});
      });
  }, []); // similar to componentDidMount

  const addOrEdit = (obj) => {
    if (currentId == "")
      firebaseDb
        .database()
        .ref("news")
        .push(obj, (err) => {
          if (err) console.log(err);
          else setCurrentId("");
        });
    else
      firebaseDb
        .database()
        .ref(`news/${currentId}`)
        .set(obj, (err) => {
          if (err) console.log(err);
          else setCurrentId("");
        });
  };

  const onDelete = (key) => {
    if (window.confirm("Are you sure to delete this record?")) {
      debugger;
      firebaseDb
        .database()
        .ref(`news/${key}`)
        .remove((err) => {
          if (err) console.log(err);
          else setCurrentId("");
        });
    }
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <ContactForm {...{ addOrEdit, currentId, contactObjects }} />
          </div>
          <div className="col-md-7">
            <table className="table table-borderless table-stripped">
              <thead className="thead-light">
                <tr>
                  <th>Site Name</th>

                  <th>Link</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(contactObjects).map((id) => {
                  return (
                    <tr key={id}>
                      <td>{contactObjects[id].fullName}</td>

                      <td>{contactObjects[id].email}</td>
                      <td>
                        <a
                          className="btn text-primary"
                          onClick={() => {
                            setCurrentId(id);
                          }}
                        >
                          <i className="fas fa-pencil-alt">Edit</i>
                        </a>
                        <a
                          className="btn text-danger"
                          onClick={() => {
                            onDelete(id);
                          }}
                        >
                          <i className="far fa-trash-alt">Delete</i>
                        </a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImportLink;
