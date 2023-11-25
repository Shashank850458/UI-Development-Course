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
    }, [1])

    let[name,pickName] =useState("");
    let[price,pickPrice] =useState("");
    let[author,pickAuthor] =useState("");
    let[message,updateMessage] =useState("");

    const save=() =>{
        if(bookid==0 ){
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
            getBook();     //reload the list after save
            pickName("");
            pickPrice("");
            pickAuthor("");
        })
     }else{
        let url = "http://localhost:1234/book/"+bookid;
        let newbook ={"bookname": name,"price":price,"author": author};
        let postdata={
            headers:{'Content-Type': 'application/json'},
            method: 'PUT',
            body: JSON.stringify(newbook)
        }
        fetch(url, postdata)
        .then(response=>response.json())
        .then(bookinfo =>{
            updateMessage(name+ "Updated Successfully...");
            getBook();     //reload the list after update
            pickName("");
            pickPrice("");
            pickAuthor("");
            updateid(0);  //reset to 0 as default value
        })
     }
    }

    const deleteBook =(id,name) =>{
        let url="http://localhost:1234/book/" +id;
        let postdata ={method: "DELETE"};
        fetch(url,postdata)
        .then(response=>response.json())
        .then(emptyres=>{
            updateMessage(name + "Deleted Successfully...");
            getBook(); //reload the list after delete
        })
    }
     
    let [bookid,updateid] = useState(0);
    const editBook =(details) =>{
        updateMessage("your editing" + details.bookname);
        pickName(details.bookname);
        pickPrice(details.price);
        pickAuthor(details.author);
        updateid(details.id);
    }

    let[keyword,updateKeyword] = useState("");

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
                onChange={obj=>pickAuthor(obj.target.value)} value={author} />
              <button onClick={save}> Save</button>
              
         </p>
         <h3 align="center"> Manage Books:{allbook.length}</h3>
         <p align="right"><input type="text" onChange={obj=>updateKeyword(obj.target.value)}/></p>
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
                        if(book.bookname.toLowerCase().includes(keyword.toLowerCase()))
                       return (
                        <tr key={index}>
                            <td>{book.id}</td>
                            <td>{book.bookname}</td>
                            <td>{book.price}</td>
                            <td>{book.author}</td>
                            <td><button onClick={editBook.bind(this,book)}>Edit</button></td>
                            <td><button onClick={deleteBook.bind(this,book.id,book.bookname)}>Delete</button></td>
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