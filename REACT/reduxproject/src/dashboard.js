import {useSelector} from 'react-redux';

const Mydashboard = () =>{
    const alluser = useSelector( state=>state.Userlist );
    const allproduct = useSelector( state=>state.Productlist );
    const commentlist = useSelector( state=>state.Apilist );

    return(
        <div className='container mt-4'>
            <div className='row'>
                <div className='col-lg-12 text-center'>
                    <h3 className='text-primary'> User List : {alluser.length} </h3>
                </div>
            </div>
            <div className='row mt-5 text-center'>
                {
                    alluser.map((name, index)=>{
                        return(
                            <div className='col-lg-3 mb-4' key={index}>
                                <p className='border p-3 rounded shadow-lg'> {name} </p>
                            </div>
                        )
                    })
                }
            </div>

            <div className='row mt-5'>
                <h3 className='mb-5 col-lg-12 text-center'> Product List : {allproduct.length} </h3>
                {
                    allproduct.map((product, index)=>{
                        return(
                            <div className='col-lg-3 mb-4' key={index}>
                                <h5> {product.name} </h5>
                                <p> Rs.{product.price}</p>
                                <p> Stock {product.qty}</p>
                            </div>
                        )
                    })
                }
            </div>

            <div className='row mt-5'>
                <div className='col-lg-12 text-center mb-5'>
                    <h3 className='text-primary'> 
                        Manage Api Data : { commentlist.length } 
                    </h3>
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

export default Mydashboard;