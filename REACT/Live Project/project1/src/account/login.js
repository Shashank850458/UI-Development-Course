import { useState } from "react";
const Mylogin =() =>{
    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-lg-4"></div>
                <div className="col-lg-4">
                    <div className="card border-0 shadow-lg">
                        <div className="card-header bg-info text-white">
                            <i className="fa fa-lock"></i><b> Login </b>
                        </div>

                        <div className="card-body">
                            
                            <div className="mb-3">
                                <label>e-mail Id</label>
                                <input type="email" className="form-control"/>
                            </div>
                            <div className="mb-3">
                                <label>Password</label>
                                <input type="password" className="form-control"/>
                            </div>
                           
                        </div>


                        <div className="card-footer teext-center">
                            <button className="btn btn-danger"> Login </button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4"></div>
            </div>
        </div>
    )

}

export default Mylogin;