import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";

const Myuser =() =>{
    let[newuser,pickUser] = useState([]);
    const dispatch = useDispatch();

    const saveuser =() =>{
        let userdata ={fullname:newuser,type:"adduser"};
        dispatch(userdata);
        pickUser("");
        // alert(newuser + "sent to store...");
    }

    const deleteUser =(index) =>{
        let userdata ={userindex:index,type:"removeuser"};
        dispatch(userdata);
    }

    const alluser =useSelector(state=>state.Userlist);
    return(
        <div className="container mt-4">
         <div className="row">
            <div className="col-lg-12 text-center">
                <h3 className="text-primary">Manage User:{alluser.length}</h3>
                <p>
                    Enter Full Name:
                    <input type="text" className="m-3"
                    onChange={obj=>pickUser(obj.target.value)}
                    value={newuser}/>
                    <button onClick={saveuser} className="btn btn-danger m-3">Save</button>
                    
                </p>
            </div>

         </div> 
           <div className="row mt-5 text-center">
            {
                alluser.map((name,index) => {
                    return (
                        <div className="col-lg-3 mb-4" key={index}>
                            <p>{name}</p>
                            <button className="btn btn-danger btn-sm" onClick={deleteUser.bind(this, index)}>Delete</button>
                        </div>
                    )
                })
            }
           </div>  
        </div>
    )
}

export default Myuser;