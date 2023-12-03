import { useState } from "react";
const ViewMyProfile =() =>{
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-4"></div>
                <div className="col-lg-4">
                    <div className="card border-0 shadow-lg">
                        <div className="card-header bg-primary text-white">
                            <i className="fa fa-eye"></i><b> View Profile</b>
                        </div>

                        <div className="card-body">
                            <div className="mb-3">
                                <label>Full Name</label>
                                <p>Mr. Shashank</p>
                            </div>
                            <div className="mb-3">
                                <label>e-mail Id</label>
                               <p>shashankhebbar85@gmail.com</p>
                            </div>
                            <div className="mb-3">
                                <label>Password</label>
                                <p>xxxxxxxxxx</p>
                            </div>
                            <div className="mb-3">
                                <label>City</label>
                               <p>Banglore</p>
                            </div>
                            <div className="mb-3">
                                <label>Full Address</label>
                                <p>Banglore Marathahalli 560037</p>
                            </div>
                        </div>


                        <div className="card-footer teext-center">
                            <button className="btn btn-warning"> Edit Now </button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4"></div>
            </div>
        </div>
    )

}

export default ViewMyProfile;