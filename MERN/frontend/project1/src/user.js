import {useState,useEffect} from 'react';

const Myuser = () =>{
    let[userlist,updateUser] = useState([]);
    const getUser =() =>{
        fetch("http://localhost:1111/user")
        .then(response => response.json())
        .then(userArray=>{
            updateUser(userArray);
        })
    }
    useEffect(()=>{
        getUser();
    },[1]);

    return (
        <div>
            <h1>Manage Users:{userlist.length}</h1>
                    <table cellpadding="20">
                    <thead>
                        <tr>
                            <th>Full name</th>
                            <th>Age</th>
                            <th>City</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            userlist.map((user, index)=>{
                                return (
                                    <tr key={index}>
                                       <td>{user.name}</td>
                                       <td>{user.age}</td>
                                       <td>{user.city}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>

                    </table>
        </div>
    )
}

export default Myuser;