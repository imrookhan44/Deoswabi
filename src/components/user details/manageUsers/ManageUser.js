import React, { useState, useEffect } from "react";
import "./manage.css";
import firebase from "../../firebase";
import { db } from "../../firebase";
function ManageUser() {
  const [list, setList] = useState([]);
  useEffect(() => {
    db.collection("clerksData").onSnapshot((snapshot) => {
      setList(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
    // console.log("List2:", list);
  }, []);
  return (
    <div className="container ms-5">
      <div className="container ms-4 mt-5">
        <div className="row ">
          <div className="table-responsive">
            <table className="table">
              <tr>
                <th scope="col">Email</th>
                <th scope="col">SchoolName</th>
                <th scope="col">Password</th>
                <th scope="col">Emis Code</th>
                <th scope="col">Allow</th>
                <th scope="col">admin</th>

              </tr>
              {list?.map(({ id, data }) => (
                <tr key={id}>
                  <td>{data?.email}</td>
                  <td>{data?.schoolName}</td>
                  <td>{data?.password}</td>
                  <td>{data?.emisCode}</td>

                  <th scope="col">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      checked={data?.role}
                      onClick={() => {
                        if (!data?.role) {
                          data["role"] = false;
                        }
                        data["role"] = !data?.role;
                        firebase
                          .firestore()
                          .collection("clerksData")
                          .doc(id)
                          .update(data)
                          .then((res) => {
                            console.log(res);
                          })
                          .catch((e) => {
                            console.error(e);
                          });
                      }}
                    />
                  </th>
                  <th scope="col">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      checked={data?.admin}
                      onClick={() => {
                        if (!data?.admin) {
                          data["admin"] = false;
                        }
                        data["admin"] = !data?.admin;
                        firebase
                          .firestore()
                          .collection("clerksData")
                          .doc(id)
                          .update(data)
                          .then((res) => {
                            console.log(res);
                          })
                          .catch((e) => {
                            console.error(e);
                          });
                      }}
                    />
                  </th>
                </tr>
              ))}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManageUser;
