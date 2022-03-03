// import React, { useState, useEffect } from "react";
// import "./manage.css";
// import firebase from "../../firebase";
// import { db } from "../../firebase";
// function ManageUser() {
//   const [list, setList] = useState(null);
//   useEffect(() => {
//     db.collection("clerksData").onSnapshot((snapshot) => {
//       setList(
//         snapshot.docs.map((doc) => ({
//           id: doc.id,
//           data: doc.data(),
//         }))
//       );
//     });

//   }, []);
//   return (

//     <div className="container-fluid mt-5">
//       <div className="row ">
//         <div className="table-responsive">
//           <table className="table">
//             <tr>
//               <th scope="col">Numbers</th>
//               <th scope="col">Email</th>
//               <th scope="col">SchoolName</th>
//               <th scope="col">Password</th>
//               <th scope="col">Emis Code</th>
//               <th scope="col">Allow</th>
//               <th scope="col">admin</th>
//             </tr>
//             {list?.map(({ id, index, data }) => (
//               <tr key={id}>
//                 <td>{index + 1}</td>
//                 <td>{data?.email}</td>
//                 <td>{data?.schoolName}</td>
//                 <td>{data?.password}</td>
//                 <td>{data?.emisCode}</td>
//                 <th scope="col">
//                   <input
//                     className="form-check-input"
//                     type="checkbox"
//                     checked={data?.role}
//                     onClick={() => {
//                       if (!data?.role) {
//                         data["role"] = false;
//                       }
//                       data["role"] = !data?.role;
//                       firebase
//                         .firestore()
//                         .collection("clerksData")
//                         .doc(id)
//                         .update(data)
//                         .then((res) => {
//                           console.log(res);
//                         })
//                         .catch((e) => {
//                           console.error(e);
//                         });
//                     }}
//                   />
//                 </th>
//                 <th scope="col">
//                   <input
//                     className="form-check-input"
//                     type="checkbox"
//                     checked={data?.admin}
//                     onClick={() => {
//                       if (!data?.admin) {
//                         data["admin"] = false;
//                       }
//                       data["admin"] = !data?.admin;
//                       firebase
//                         .firestore()
//                         .collection("clerksData")
//                         .doc(id)
//                         .update(data)
//                         .then((res) => {
//                           console.log(res);
//                         })
//                         .catch((e) => {
//                           console.error(e);
//                         });
//                     }}
//                   />
//                 </th>
//               </tr>
//             ))}
//           </table>
//         </div>
//       </div>
//     </div>

//   );
// }

// export default ManageUser;


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