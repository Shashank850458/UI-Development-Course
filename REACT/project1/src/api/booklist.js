import { useState, useEffect } from "react";

const Mybook = ()=>{
    let[allbook, updatebook]= useState([]);
    const getbook = ()=>{
        fetch("http://localhost:1234/book")
        .then(response=>response.json())
        .then(bookArray=>{
             updatebook(bookArray.reverse());
        })
    }

    useEffect(()=>{      // works as a onload event of javascript
        getbook();
    },[1])

    let[name, pickname]=useState("");
    let[price, pickprice]=useState("");
    let[author, pickauthor]=useState("");
    let[message, updatemessage]=useState("");
    
    const save=()=>{
        if(bookid == 0){

        let url="http://localhost:1234/book";
        let newbook={ "bookname":name,"price":price,"author":author};
        let postdata= {
            headers:{"Content-Type":"application/json"},
            method:"POST",
            body:JSON.stringify(newbook)
        }
        fetch(url, postdata)
        .then(response=>response.json())
        .then(bookinfo=>{
            updatemessage(name + "Save Successfully...");
            getbook(); // reload the list after save
            pickname("");
            pickprice("");
            pickauthor("");
        })
    } else{
        let url="http://localhost:1234/book/"+bookid;
        let newbook={ "bookname":name,"price":price,"author":author};
        let postdata= {
            headers:{"Content-Type":"application/json"},
            method:"PUT",
            body:JSON.stringify(newbook)
        }
        fetch(url, postdata)
        .then(response=>response.json())
        .then(bookinfo=>{
            updatemessage(name + "Update Successfully...");
            getbook(); // reload the list after save
            pickname("");
            pickprice("");
            pickauthor("");
            updateid(0);
        })
        
    }

    }

    const deleteBook = (id, name) =>{
        let url = "http://localhost:1234/book/"+id;
        let postdata = {method:"DELETE"};
        fetch(url, postdata)
        .then(response=>response.json())
        .then(emptyres=>{
            updatemessage(name + "Deleted successfully....");
            getbook(); //to reload the list after delete
        })
    }

    let[bookid, updateid] = useState(0);
    const editBook = (details) =>{
        updatemessage("You are editing" + details.bookname)
        pickname(details.bookname);
        pickprice(details.price);
        pickauthor(details.author);
        updateid(details.id)
    }

    let[keyword, updateKeyword] = useState("");

    return(
        <div>
            <h1 align="center">Enter Book Details</h1>
            <p align="center">{message}</p>
            <p align="center">
                <input type="text" placeholder="Enter Book Name"
                onChange={obj=>pickname(obj.target.value)} value={name}/>
                <input type="text" placeholder="Enter Book Price"
                onChange={obj=>pickprice(obj.target.value)} value={price}/>
                <input type="text" placeholder="Enter Book Author"
                onChange={obj=>pickauthor(obj.target.value)} value={author}/>
                <button onClick={save}>Save</button>
            </p>
            <h3 align="center"> Manage Books  : {allbook.length}</h3>
            <p align="right"><input type="text" onChange={obj=>updateKeyword(obj.target.value)}/></p>
            <table align="center">
                <thead>
                    <tr>
                        <th>Book ID</th>
                        <th>Book Name</th>
                        <th>Book Price</th>

                        <th>Book Author</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                 {
                    allbook.map((book,index)=>{
                        if(book.bookname.toLowerCase().includes(keyword.toLowerCase()))
                         return(
                            <tr key={index}>
                                <td>{book.id}</td>
                                <td>{book.bookname}</td>
                                <td>{book.price}</td>
                                <td>{book.author}</td>
                                <td>
                                    <button onClick={editBook.bind(this, book)}>Edit</button>
                                </td>
                                <td>
                                    <button onClick={deleteBook.bind(this, book.id,book.bookname)}>Delete</button>
                                </td>
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