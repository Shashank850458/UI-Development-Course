import { useState } from "react";
const EditMyProfile =() =>{
    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-lg-4"></div>
                <div className="col-lg-4">
                    <div className="card border-0 shadow-lg">
                        <div className="card-header bg-primary text-white">
                            <i className="fa fa-edit"></i><b> Edit Profile</b>
                        </div>

                        <div className="card-body">
                            <div className="mb-3">
                                <label>Full Name</label>
                                <input type="text" className="form-control" value="shashank"/>
                            </div>
                            <div className="mb-3">
                                <label>e-mail Id</label>
                                <input type="email" className="form-control" value="shashankhebbar85@gmail.com"/>
                            </div>
                            <div className="mb-3">
                                <label>Password</label>
                                <input type="password" className="form-control" value="xxxxxxxx"/>
                            </div>
                            <div className="mb-3">
                                <label>City</label>
                                <input type="text" className="form-control" value="Banglore"/>
                            </div>
                            <div className="mb-3">
                                <label>Full Address</label>
                                <textarea className="form-control" value="Marathahalli"></textarea>
                            </div>
                        </div>



                        <div className="card-footer teext-center">
                            <button className="btn btn-danger"> Register </button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4"></div>
            </div>
        </div>
    )

}

export default EditMyProfile;