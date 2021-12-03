import React,{useState} from "react";
import { Formik, Form, Field } from "formik";
import firebase from "firebase";
import "./Login.css";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'; 
import login from "../../assets/images/login.jpg";
import human from "../../assets/images/human.jpg";
toast.configure()
function Login() {
  const notify= () =>{
    firebase.auth().signInWithEmailAndPassword(email,password)
    .then((auth)=>{
       toast("Login Succesfully"); 
    }).catch((err)=>{
      toast("register first");
    })
 
  }

  const [email, setEmail]= useState("");
  const [password, setPassword] = useState("");
  console.log(firebase.auth())
  const signInHandler = () =>{

  }
  return (
    <div>
      <div className=" mt-4 adminpanel ">
        <div className="row ">
          <div className=" col-5 offset-4 ">
            <h3 className="admin mt-5 pt-4 ">Login Page</h3>
            <input
              type="email"
              onChange={e=>setEmail(e.target.value)}
              className="form-controls1 pt-2 "
              placeholder="Email"
            ></input>
            <input
              type="password"
              onChange={e=>setPassword(e.target.value)}
              className="form-controls1 mt-2 pt-2"
              placeholder="Password"
            />
            <div className="Checkbox mt-2">
              <input type="checkbox"></input> <b>Remember me</b>
              </div>
            
            <div>
              {" "}
              <button onClick={signInHandler, notify} className="btn btn-primary mt-4" id="button">
                Login
              </button>{" "}
            </div><br />
            
          </div>

          <div className>
           
            {/* <img className="custom-img image " src={signin} alt='signup' /> */}
          </div>
        </div>
      </div>
    </div>
  );
}


export default Login;