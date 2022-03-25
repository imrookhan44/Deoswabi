import React, { useState, useEffect } from 'react'
import { Table } from 'react-bootstrap'
import firebase from "../../firebase";
import { db } from "../../firebase";

function ManageUser() {
  const [data, setdata] = useState([])


  useEffect(() => {
    firebase.firestore().collection('clerksData').onSnapshot((snapshot) => {
      setdata(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    })
  }, [])
  return (
    <>



      <div className='container-fluid' id='container' style={{ marginBottom: "100px" }}>

        <Table className='max' id='max' responsive >
          <thead>
            <tr>
              <th>Index</th>
              <th>EMIS Code</th>
              <th>email</th>
              <th>schoolName</th>
              <th>password</th>
              <th>Allow</th>
              <th>admin</th>


            </tr>
          </thead>
          <tbody>
            {data?.map((item, index, id) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.data.emisCode}</td>
                <td>{item.data.email}</td>
                <td>{item.data.schoolName}</td>
                <td>{item.data.password}</td>
                <td>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    checked={item.data.role}
                    onClick={() => {
                      if (!item.data.role) {
                        item.data["role"] = false;
                      }
                      item.data["role"] = !item.data.role;
                      firebase
                        .firestore()
                        .collection("clerksData")
                        .doc(item.id)
                        .update(item.data)
                        .then((res) => {
                          console.log(res);
                        })
                        .catch((e) => {
                          console.error(e);
                        });
                    }}
                  />
                </td>
                <td>
                  <input
                    className="form-check-input"

                    type="checkbox"
                    checked={item.data.admin}
                    onClick={() => {
                      if (!item.data.admin) {
                        item.data["admin"] = false;
                      }
                      item.data["admin"] = !item.data.admin;
                      firebase
                        .firestore()
                        .collection("clerksData")
                        .doc(item.id)
                        .update(item.data)
                        .then((res) => {
                          console.log(res);
                        })
                        .catch((e) => {
                          console.error(e);
                        });
                    }}
                  />
                </td>



              </tr>
            ))}
          </tbody>
        </Table>
      </div>

    </>

  )
}

export default ManageUser