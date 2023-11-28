import {useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';

const Myapi = () =>{
    let[commentlist, updateComment] = useState( [] );

    const getComment = () =>{
        fetch("https://jsonplaceholder.typicode.com/comments")
        .then(response=>response.json())
        .then(commentArray=>{
            updateComment(commentArray);
        })
    }

    useEffect(()=>{
        getComment();
    },[1]);

    const dispatch = useDispatch();
    const save = () =>{
        let apidata = {type:"saveapi", mydata:commentlist};
        dispatch(apidata);
        alert("Records Sent To Redux...");
    }


    return(
        <div className='container mt-4'>
            <div className='row'>
                <div className='col-lg-12 text-center mb-5'>
                    <h3 className='text-primary'> 
                        Manage Api Data : { commentlist.length } 
                    </h3>
                    <button className='btn btn-danger m-4' onClick={save}> Send To Redux </button>
                </div>
                {
                    commentlist.map((comment, index)=>{
                        return(
                            <div className='col-lg-4 mb-4' key={index}>
                                <p> {comment.body} </p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Myapi;