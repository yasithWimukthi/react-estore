import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { GoogleLogin } from "react-google-login";
import * as actions from "../../redux/actions";
import { Redirect } from "react-router-dom";


const Login = (props) => {

    const item = props.location.state;
    const dispatch = useDispatch();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const onSuccess = (res) => {

        console.log("onSuccess", res);

        sessionStorage.setItem("userdetails", JSON.stringify(res.profileObj));
     
        dispatch(actions.login(res.profileObj));
        setIsLoggedIn(true);
    }

    return (
        <div>
            {isLoggedIn && <Redirect to={"/estore"} />}
           
            <div className="d-flex justify-content-center align-items-center">
                <div className="card col-lg-4 col-md-6 col-sm-12">
                    <div className="card-body">
                        <h5 className="card-title">Login</h5>
                        <div className="dropdown-divider"></div>
                        <div className="form-group">
                            <label>Username</label>
                            <input
                                type="text"
                                className="form-control" />

                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input
                                type="password"
                                className="form-control" />

                        </div>
                        <div className="btn btn-success btn-block">{`LOGIN`}</div>
                        <div className="dropdown-divider">OR</div>
                        <GoogleLogin
                            clientId={"890129301213-q8b038gfm5n6l58do3blljk82l61r2q2.apps.googleusercontent.com"}
                            buttonText="Login with Google"
                            onSuccess={onSuccess}
                            className="btn-block"
                            theme="dark"
                        />
                    </div>
                </div>

            </div>

        </div>)
}

export default Login;