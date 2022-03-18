import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useHistory } from "react-router";
import "./user.css";
import { db, auth } from "../firebase";
toast.configure();
const User = () => {
  let history = useHistory();
  const notify = () => toast.success("Form Submitted", "complete form");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loader, setLoader] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [schoolName, setSchoolName] = useState("");
  const [emisCode, setEmisCode] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    db.collection("clerksData").add({
      email: email,
      password: password,
      confirmPassword: confirmPassword,
      schoolName: schoolName,
      emisCode: emisCode,
    });

    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setSchoolName("");
    setEmisCode("");
  };
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
    // console.log("List:", list);
  }, []);

  const handleSubmit = async (e) => {
    console.log(email, password);
    try {
      const result = await auth
        .createUserWithEmailAndPassword(email, password)
        .then((res) => {
          console.log("res ", res);
          history.push("/");
        });

      console.log("RESULT CONST :", result);
    } catch (err) {
      console.log("err ;  :", err);
    }
  };

  return (
    <div  className="userDetails mt-5">
      <div  className="row-reg pt-4 ">
        <div className=" col-reg">
          <div className="textreg">
          <h3 className=" offset-4 userdetailtext">Registration</h3>
          </div>
          <br />
          <form
            onSubmit={submit}
            autoComplete=""
            className="form offset-3 userdivform"
          >
            <input
              required="required"
              value={email}
              type="email"
              placeholder="  Email Address"
              className="form-control1"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              value={schoolName}
              required="required"
              type="name"
              placeholder="School Name"
              name="name"
              className="form-control1"
              onChange={(e) => setSchoolName(e.target.value)}
            />
            <br />
            <input
              value={password}
              required="required"
              type="password"
              placeholder="Password"
              name="pass"
              className="form-control1"
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              value={confirmPassword}
              required="required"
              type="password"
              placeholder="Confirm Password"
              name="pass"
              className="form-control1"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <input
              value={emisCode}
              type="number"
              required="required"
              placeholder="EmisCode"
              name="pass"
              className="form-control1"
              onChange={(e) => setEmisCode(e.target.value)}
            />
            <br />
            
            <div className="submitbtnuser">
              <button
                className="  controlbutton "
                id="bTN"
                onClick={handleSubmit}
                disabled={!email || !password}
              >
                Submit
              </button>
            </div>
            {/* <div className="mt-3  ms-2" >
              <a onClick={() => history.push("/login")} href="" style={{ fontWeight: "400", fontSize: "1rem", color: "black"}}>
                Already Have An Account SignIn
              </a>
            </div> */}
          </form>
        </div>
      </div>
    </div>
  );
};
export default User;
