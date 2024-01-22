import React, { useState , useEffect } from 'react';
import axios from 'axios';

const Mypic = () => {
    const [newUser, setNewUser] = useState(
        {
            name: '',
            birthdate: '',
            photo: '',
        }
    );
    
    let setNewAuthor = setNewUser;
    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('photo', newUser.photo);
        formData.append('birthdate', newUser.birthdate);
        formData.append('name', newUser.name);

        axios.post('http://localhost:2222/uploadimage', formData)
             .then(res => {
                alert("Record Save Successfully..")
                getphoto();
             })
             .catch(err => {
                console.log(err);
             });
    }

    const handleChange = (e) => {
        setNewAuthor({...newUser, [e.target.name]: e.target.value});
    }

    const handlePhoto = (e) => {
        setNewAuthor({...newUser, photo: e.target.files[0]});
    }

    let[allphoto, updatePhoto] = useState( [] );
    const getphoto = () =>{
        fetch("http://localhost:2222/uploadimage")
        .then(response=>response.json())
        .then(photoArray=>{
            updatePhoto(photoArray);
            newUser.name ="";
            newUser.date ="";
        })
    }

    useEffect(()=>{
        getphoto();
    },[1]);


    return (
        <div className='container mt-5'>
        <form onSubmit={handleSubmit} encType='multipart/form-data'>
        <div className='row'>
            <div className='col-lg-3'>
            <input type="file" accept=".png, .jpg, .jpeg" name="photo" onChange={handlePhoto}
                className='form-control'
            />
            </div>
            <div className='col-lg-3'>
            <input type="text" placeholder="name" name="name" value={newUser.name} onChange={handleChange}
                 className='form-control'
            />
            </div>
            <div className="col-lg-3">
            <input type="date" name="birthdate" value={newUser.date} onChange={handleChange}  
                 className='form-control'
            />
            </div>

            <div className="col-lg-3">
            <button className="btn btn-primary">Upload Image</button>
            </div>
            </div>
        </form>
            <div className='row mt-5'>
                {
                    allphoto.map((myphoto, index)=>{
                        return(
                            <div className='col-lg-3 mb-4' key={index}>
                                <h4> {myphoto.name} </h4>
                                <img src={`http://127.0.0.1:5500/backend/restapi/images/${myphoto.photo}`} height="150" width="150"/>
                                <p> Date of Birth : {myphoto.birthdate} </p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Mypic;