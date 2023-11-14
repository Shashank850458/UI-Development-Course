import { useState } from "react";
const Myhook6 =()=>{
    let [citylist,UpdateCity]= useState([]);
    const getcity =()=>{
        fetch("city.json")   
        .then(response=>response.json())
        .then(cityArray=>{
            UpdateCity(cityArray); // respone assign to state variable.

        })
    } 
    let[bloglist,updateBlog]= useState([]);
    const getblog =()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")   
        .then(response=>response.json())
        .then(blogArray=>{
            updateBlog(blogArray); // respone assign to state variable.
    })
   }

    return(
        <div>
            <h1>Fetch() API,useState()</h1>
            <button onClick={getcity}>Show City List</button>
            <p>Total City:{citylist.length}</p>
            {
                citylist.map((cityname,index)=>{
                    return(
                        <p key={index} className="four">{cityname}</p>
                    )
                })
            }
            
            <br/>
            <button onClick={getblog}>Blog List</button>
            <h1>Total Blogs :{bloglist.length}</h1>
            
            {
                bloglist.map((blog,index)=>{
                    return(
                        <div key={index} className="two">
                            <h3>{blog.title}</h3>
                            <p>{blog.body}</p>
                        </div>
                    )
                })
            }
        </div>
    )   
}
export default Myhook6;