import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

const Myhome =() =>{
    let[allproduct,updateProduct]=useState([]);

    const getproduct =() =>{
        fetch("http://localhost:1234/product")
        .then(response=>response.json())
        .then(productArray=>{
            updateProduct(productArray.reverse() );
        })
    }
    useEffect(()=>{
        getproduct();
    },[1]);

    let[keyword,updateKeyword] = useState("");  //for search
    const PER_PAGE = 4;
    const [currentPage, setCurrentPage] = useState(0);
    function handlePageClick({ selected: selectedPage }) {
        setCurrentPage(selectedPage)
    }
    const offset = currentPage * PER_PAGE;
    const pageCount = Math.ceil(allproduct.length / PER_PAGE);

    const addtocart = async(pinfo) =>{
        let url = "http://localhost:1234/cart";
        let postdata = {
            headers:{'Content-Type':'application/json'},
            method:'POST',
            body:JSON.stringify(pinfo)
        }
        try{
            await fetch(url,postdata)
                .then(response => response.json())
                .then(pinfo => {
                    alert(pinfo.name+ " Added in your cart", "success");
            })
        }
        catch(error){
            alert(pinfo.name+" Already in Your Cart", "warning");
        }
    }
    return(
        <>
            <section id="banner"></section>
            <div className="container mt-5">

            <div className="row mb-4">
                <div className="col-lg-4"></div>
                <div className="col-lg-4">
                    <input type="text" 
                    className="form-control"
                        placeholder="Search..."
                            onChange={obj=>updateKeyword(obj.target.value)}/>
                </div>
                <div className="col-lg-4"></div>
            </div>
                <div className="row">
                    {
                        allproduct.slice(offset, offset + PER_PAGE).map( (product,index)=>{
                            if (product.name.toLowerCase().includes(keyword.toLowerCase())|| product.price.includes(keyword))
                            return (
                                <div className="col-lg-3 mb-4" key={index}>
                                    <div className="p-4 shadow-lg rounded">
                                        <h3 className="text-center text-primary">{product.name}</h3>
                                        <img src={product.photo} height="150" width="100%" className="mt-2 mb-2"/>
                                        <p>{product.details}</p>
                                        <p>Rs. {product.price}</p>
                                        <p className="text-center">
                                            <button className="btn btn-danger btn-sm"
                                            onClick={addtocart.bind(this,product)}>
                                                <i className="fa fa-shopping-cart"></i> Add to Cart
                                            </button>
                                        </p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div> {/* Pagination start */}
                <div className="mb-4 mt-4">
                        <ReactPaginate
                            previousLabel={"Previous"}
                            nextLabel={"Next"}
                            breakLabel={"..."}
                            pageCount={pageCount}
                            marginPagesDisplayed={2}
                            pageRangeDisplayed={3}
                            onPageChange={handlePageClick}
                            containerClassName={"pagination  justify-content-center"}
                            pageClassName={"page-item "}
                            pageLinkClassName={"page-link"}
                            previousClassName={"page-item"}
                            previousLinkClassName={"page-link"}
                            nextClassName={"page-item"}
                            nextLinkClassName={"page-link"}
                            breakClassName={"page-item"}
                            breakLinkClassName={"page-link"}
                            activeClassName={"active primary"}
                        />
                    </div>
            </div>
        </>
    )
}

export default Myhome;