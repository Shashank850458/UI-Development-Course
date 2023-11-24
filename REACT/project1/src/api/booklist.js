import { useState,useEffect } from "react";

const Mybook =() => {
    let [allbook,updateBook] =useState ([]);
    const getBook = () =>{
        fetch("http://localhost:1234/book")
        .then(response=>response.json())
        .then(bookArray=>{
            updateBook(bookArray.reverse());
        })
    }
    useEffect(()=>{
        getBook();
    })

    let[name,pickName] =useState("");
    let[price,pickPrice] =useState("");
    let[author,pickAuthor] =useState("");
    let[message,updateMessage] =useState("");

    const save=() =>{
        let url = "http://localhost:1234/book";
        let newbook ={"bookname": name,"price":price,"author": author};
        let postdata={
            headers:{'Content-Type': 'application/json'},
            method: 'POST',
            body: JSON.stringify(newbook)
        }
        fetch(url, postdata)
        .then(response=>response.json())
        .then(bookinfo =>{
            updateMessage(name+ "Save Successfully...");
            getBook();
            pickName("");
            pickPrice("");
            pickAuthor("");
        })
    }
    return (
    
    <div>
         <h1 align="center">Enter Book Details</h1>
         <p align="center">{message}</p>
         <p align="center">
              <input type="text" placeholder='Enter Book Name'
              onChange={obj=>pickName(obj.target.value)} value={name} />
              <input type="text" placeholder='Enter Book Price'
                onChange={obj=>pickPrice(obj.target.value)} value={price} />
              
              <input type="text" placeholder='Enter Book Author'
                onChange={obj=>pickAuthor(obj.target.value)} value={author} 
              />
              <button> Save</button>
              
         </p>
         <h3 align="center"> Manage Books:{allbook.length}</h3>
         <table align="center">
             <thead>
                <tr>
                    <th> Book Id</th>
                    <th> Book Name</th>
                    <th>Book Price</th>
                    <th>Book Author</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
             </thead>
             <tbody>
                 {
                    allbook.map((book,index)=>{
                       return (
                        <tr key={index}>
                            <td>{book.id}</td>
                            <td>{book.bookname}</td>
                            <td>{book.price}</td>
                            <td>{book.author}</td>
                            <td><button>Edit</button></td>
                            <td><button>Delete</button></td>
                        </tr>
                       )
                    })
                 }
             </tbody>
         </table>
    </div>
    )
}

export default Mybook;