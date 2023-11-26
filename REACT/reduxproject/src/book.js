import { useState } from "react";

const Mybook =() =>{
    let[booklist,updateBook] = useState([]);
    let[newbook,pickBook] = useState([]);

    const savebook =() =>{
        updateBook(booklist =[...booklist,newbook]);
        pickBook("");
    }
    return(
        <div className="container mt-4">
         <div className="row">
            <div className="col-lg-12 text-center mb-5">
                <h3 className="text-primary">Manage Book</h3>
                <p>
                    Enter Book Name:
                    <input type="text" className="m-3"
                    onChange={obj=>pickBook(obj.target.value)}
                    value={newbook}/>
                    <button onClick={savebook} className="btn btn-danger m-3">Save</button>
                    
                </p>
            </div>
            {
                booklist.reverse().map((bookname,index)=>{
                    return(
                        <div className="col-lg-3 mb-4" key={index}>
                            <div className="shadow p-3 rounded text-center">
                                <p className="text-primary">{bookname}</p>
                            </div>
                        </div>
                    )
                })
            }
         </div>   
        </div>
    )
}

export default Mybook;