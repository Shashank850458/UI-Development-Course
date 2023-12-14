import {useState,useEffect} from 'react';

const Mybook = () =>{
    let[booklist,updateBook] = useState([]);
    const getBook =() =>{
        fetch("http://localhost:1111/book")
        .then(response => response.json())
        .then(bookArray=>{
            updateBook(bookArray);
        })
    }
    useEffect(()=>{
        getBook();
    },[1]);

    return (
        <div>
            <h1>Manage Books:{booklist.length}</h1>
            {
                booklist.map((bookname, index)=>{
                    return (
                    <p key={index}>{bookname}</p>
                    )
                })
            }
        </div>
    )
}

export default Mybook;