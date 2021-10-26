import React from 'react'
import './Login.css'
import login from '../../assets/images/login.jpg'


export default function Login() {
    return (
        
        <div>
        
            <form action="">
                <div className="main">
                    

                {/* <img src="..." class="img-fluid" alt="..."> */}
                    
                   
                    <div className="row">
                        <div className="col-4 ms-3">
                        
                        <div className="img">
                        <right>
                        <img src= {login}>
                        </img>
                        </right>
                    </div>
                        <h2>
                        {/* APCA Education */}
                        <br />
                        </h2>
                        <h3>
                      {/* All Pakistan Clerk Assocition */}
                    </h3><br /><br /><br /><br />
                        
                            <input className="border" type="text" placeholder="Username" style={{ outline:"none",borderRadius:"20px", width:"70%",padding:"12px 20px",margin:"8px 0px",display: "inline-block",border: "1px solid #ccc", boxsizing: "border-box",backgroundcolor:"#f1f1f1"}}></input><br/>
                            <input className="border"  type="password" placeholder="Password" style={{outline:"none", borderRadius:"20px",width:"70%",padding:"12px 20px",margin:"8px 0px",display: "inline-block",border: "1px solid #ccc", boxsizing: "border-box",backgroundcolor:"#f1f1f1"}}></input><br />
                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input> <b>Remember Username</b> <br />
                            <button className="b" style={{width:"50%",borderRadius:"20px",}}>Sign In</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}
