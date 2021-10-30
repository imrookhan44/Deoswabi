import React from 'react'
import { Formik, Form, Field } from 'formik';
import './Login.css'
import login from '../../assets/images/login.jpg'
import human from '../../assets/images/human.jpg'

export default function Login() {
    return (

        <div class="">

            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-sm-4'>
                         {/* <Formik initialValues={{name:"",password:"",checkbox:""}} onSubmit={(values) => {
                             console.log(values);
                         }}>
                         <Form>
                         {/* <lable>Name:</lable> */}
                             {/* <Field name="name" type="text" placeholder="Username" />
                             <br /><br />
                             
                             {/* <lable>Password:</lable> */}
                             {/* <Field name="password" type="password"  placeholder="Password" />
                             <br /><br />
                             <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input> <b>Remember Username</b> <br /><br />
                             <button type="submit">Submit</button>
                         </Form>

                        </Formik>
 */} 

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
 <img className='img-fluid' src={login}/>
 <br /><br /><br /><br />

 <h2>
                        APCA Education
                        <br />
                        </h2>
                        <h3>
                      All Pakistan Clerk Assocition
                    </h3> 

                        <form >
                            <input className="border" type="text" placeholder="Username" style={{ outline: "none", borderRadius: "20px", width: "70%", padding: "12px 20px", margin: "8px 0px", display: "inline-block", border: "1px solid #ccc", boxsizing: "border-box", backgroundcolor: "#f1f1f1" }}></input><br />
                            <input className="border" type="password" placeholder="Password" style={{ outline: "none", borderRadius: "20px", width: "70%", padding: "12px 20px", margin: "8px 0px", display: "inline-block", border: "1px solid #ccc", boxsizing: "border-box", backgroundcolor: "#f1f1f1" }}></input><br /><br />
                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input> <b>Remember Username</b> <br /><br />
                           &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  <button className="b" style={{ width: "30%", borderRadius: "20px", }}>Sign In</button>
                        </form>
                    </div>
                    <div className='col-sm-8'>
                    <img className='img' src={human}/>
                    </div>
                </div>
            </div>
            {/* <div class="grid-item">
  <form class="container">
  <input className="border" type="text" placeholder="Username" style={{ outline:"none",borderRadius:"20px", width:"70%",padding:"12px 20px",margin:"8px 0px",display: "inline-block",border: "1px solid #ccc", boxsizing: "border-box",backgroundcolor:"#f1f1f1"}}></input><br/>
                            <input className="border"  type="password" placeholder="Password" style={{outline:"none", borderRadius:"20px",width:"70%",padding:"12px 20px",margin:"8px 0px",display: "inline-block",border: "1px solid #ccc", boxsizing: "border-box",backgroundcolor:"#f1f1f1"}}></input><br />
                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input> <b>Remember Username</b> <br />
                            <button className="b" style={{width:"50%",borderRadius:"20px",}}>Sign In</button>
</form>
</div>

<div class="grid-item2">
<img src={human} alt="BigCo Inc. logo"/>
</div> */}
        </div>






        //     <>
        //    <img src={human} alt="BigCo Inc. logo"/>

        //         </>


    )
}
