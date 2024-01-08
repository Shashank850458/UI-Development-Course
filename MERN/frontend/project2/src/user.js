import {useState, useEffect} from 'react';

const Myuser = () =>{
    let[userlist, updateUser]=useState([]);
    const getuser = () =>{
        fetch("http://localhost:2222/myuser")
        .then(response=>response.json())
        .then(userArray=>{
            updateUser(userArray.reverse());
        })
    }

    useEffect(()=>{
        getuser();
    },[1]);

    let[fullname, pickName] = useState("");
    let[mobile, pickMobile] = useState("");
    let[email, pickEmail] = useState("");
    let[address, pickAddress] = useState("");

    const save = () =>{
        let url = "http://localhost:2222/myuser";
        let newuser = {
            "n":fullname,
            "e":email,
            "m":mobile,
            "a":address
        };
        let postdata = {
            headers:{'Content-Type':'application/json'},
            method:"POST",
            body:JSON.stringify(newuser)
        }

        fetch(url, postdata)
        .then(response =>response.json())
        .then(serverdata=>{
            alert(serverdata.message);
            pickName("");
            pickMobile("");
            pickEmail("");
            pickAddress("");
            getuser(); // to reload the list after adding new user
        })
    }

    return(
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-lg-12 text-center'>
                    <h3> Manage User : {userlist.length} </h3>
                </div>
            </div>

            <div className='row mt-4'>
                <div className='col-lg-3'>
                    <div className='border p-3'>
                        <h3 className='text-center mb-4'> Enter User Details </h3>
                        <div className='mb-3'>
                            <label> Full Name </label>
                            <input type="text" className='form-control'
                            onChange={obj=>pickName( obj.target.value)} value={fullname}/>
                        </div>

                        <div className='mb-3'>
                            <label> Mobile No </label>
                            <input type="number" className='form-control'
                            onChange={obj=>pickMobile( obj.target.value)} value={mobile}/>
                        </div>

                        <div className='mb-3'>
                            <label> e-Mail </label>
                            <input type="email" className='form-control'
                            onChange={obj=>pickEmail( obj.target.value)} value={email}/>
                        </div>

                        <div className='mb-3'>
                            <label> Address </label>
                            <textarea className='form-control'
                            onChange={obj=>pickAddress( obj.target.value)} value={address}></textarea>
                        </div>

                        <div className='text-center'>
                            <button className='btn btn-primary' onClick={save}> Save User </button>
                        </div>
                    </div>
                </div>
                <div className='col-lg-9'>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th> Full Name </th>
                                <th> Mobile </th>
                                <th> Email Id </th>
                                <th> Full Address </th>
                                <th> Action </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                userlist.map((user, index)=>{
                                    return(
                                        <tr key={index}>
                                            <td> {user.fullname} </td>
                                            <td> {user.mobile} </td>
                                            <td> {user.email} </td>
                                            <td> {user.address} </td>
                                            <td> ------ </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Myuser;